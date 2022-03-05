var _ = require('lodash');
var chai = require('chai');
var assert = chai.assert;

import {
    Given,
    When,
    Then
} from "cypress-cucumber-preprocessor/steps"


import controller from "../POM/controller";
import ELEMENT from "../../support/element";

var token = "";
var resultNotificationMsg = "";

Given('Login user fleet to CC', function () {
    // Listening response API Login 
    cy.intercept('POST', 'login', (req) => {
        req.continue((res) => {
            token = _.get(res, 'body.res.token');
        })
    });

    cy.visit(Cypress.config('baseUrl'));
    controller.input(ELEMENT.USER_NAME, Cypress.env('userName'));
    controller.input(ELEMENT.PASSWORD, Cypress.env('password'));
    controller.clickBtn(ELEMENT.LOGIN);
});

Given(/^Open "([^"]*)" pages$/, function (setting) {
    // Listening response API /general/get
    cy.intercept({
        method: 'POST',
        url: '/api/setting/general/get',
    }).as('getGeneral')

    controller.clickBtn(ELEMENT.SETTING);
    switch (setting) {
        case "Permission": {
            // Listening response API /api/roles/find
            cy.intercept({
                method: 'POST',
                url: '/api/roles/find',
            }).as('getPermission')
            controller.clickBtn(ELEMENT.PERMISSION);
            cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Permission');
            cy.wait('@getPermission').then((interception) => {
                if (interception.response.statusCode == 200) {
                    return true
                }
            }).should('equal', true)
            cy.wait(2000)

            break;
        }
        case "User": {
            controller.clickBtn(ELEMENT.USER);
            cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/User');
            break;
        }
        case "Dynamic surcharge": {
            controller.clickBtn(ELEMENT.DYNAMIC_SURCHARGE);
            cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Dynamic_surcharge');
            break;
        }
        case "Dynamic fare": {
            controller.clickBtn(ELEMENT.DYNAMIC_FARE);
            cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Dynamic_fare');
            break;
        }
        case "Car type": {
            controller.clickBtn(ELEMENT.CAR_CARMGMT);
            cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Car/Car_mgmt');
            break;
        }
        case "Car mgmt": {
            controller.clickBtn(ELEMENT.CAR_CARTYPE);
            cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Car/Car_type');
            break;
        }
        default: {
            cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Fleet_info');
            cy.wait('@getGeneral').then((interception) => {
                if (interception.response.statusCode == 200) {
                    return true
                }
            }).should('equal', true)
        }
    }
});

Given(/^Get fleet info matching with$/, function (table) {
    var table = table.hashes()[0];
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_NAME, table.name);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_PHONE, table.phonenume);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_EMAIL, table.email);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_COUNTRY, table.country);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_TIMEZONE, table.timeZone);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_ADDRESS, table.address);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_WEBSITE, table.website);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_CURENCY, table.currency);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_UNIT, table.unit);
});

Given(/^Get info header row and total rows in view list matching with$/, function (table) {
    var table = table.hashes()[0];
    var header = JSON.parse(table.headerRow);
    var rows = JSON.parse(table.rows);
    // Get info of header
    controller.getHeaderRows(ELEMENT.HEADERS_NAME).then((actualResult) => {
        console.log("Actual result: ", actualResult);
        console.log("Expected result: header ", header);
        console.log("Expected result: rows ", rows);
        assert.isTrue(controller.matchData(actualResult[0], header), true);
        assert.isTrue(controller.matchData(actualResult[1], rows), true);
    });
});

Given(/^User input data search with data$/, function (table) {
    var table = table.hashes()[0];
    controller.searchByKey(ELEMENT.TEXTBOX_SEARCH, table.search);
});

Given(/^User click "([^"]*)" button$/, function (actions, title) {
    switch (actions) {
        case "Add":
            controller.clickBtn(ELEMENT.BUTTON_ADD);
            break;
        case "Export":
            controller.clickBtn(ELEMENT.BUTTON_EXPORT);
            break;
        default: {
            return false
        }
    }
});

Given(/^User can see "([^"]*)" form$/, function (title) {
    controller.getTextHaveText(`//*[@class="modal-title"]`, title);
});

Given(/^User select full permission with data$/, function (table) {
    var table = table.hashes()[0];
    var name = table.name;
    cy.intercept({
        method: 'POST',
        url: '/api/roles/create',
    }).as('rolesResponse');
    controller.input(ELEMENT.PERMISSION_NAME, name)
    controller.clickBtn(`//label[text()='Full permissions']`);
    controller.clickBtn(ELEMENT.BUTTON_SAVE);
    cy.wait('@rolesResponse').then((interception) => {
        if (_.get(interception, "response.body")) {
            controller.getNotificationMsg(ELEMENT.NOTIFICATION).then((msg) => {
                console.log(msg)
                resultNotificationMsg = msg;
            });
        }
    })
    cy.wait(2000);
});

Given(/^The screen show notification message with data$/, function (table) {
    var table = table.hashes()[0];
    assert.isTrue(resultNotificationMsg == table.message, true);
});

Given(/^User send a request "([^"]*)" API with data$/, async function (api, table) {
    var table = table.hashes()[0];
    var permission = JSON.parse(table.permission)
    var params = {};
    var permissionKeys = [];

    function readFile(file) {
        return new Promise(function (resolve, rej) {
            cy.readFile("./cypress/support/" + file).then((file) => {
                resolve(file);
            });
        })
    }
    Promise.all([readFile('roles-keys.json'), readFile('roles-create.json')]).then(function (values) {
        permissionKeys = values[0];
        params = values[1];
        permissionKeys.forEach(function (value) {
            if (value.name == permission.name) {
                _.set(permission, 'key', value.key);
            }
        });
        _.set(params, "modules[0]", permission);
        _.set(params, "isActive", table.isActive);
        _.set(params, "name", table.name);

        cy.request({
            method: 'POST',
            url: `${Cypress.config('baseUrlAPI')}` + api,
            headers: {
                authorization: token
            },
            body: params
        }).then((response) => {
            if (response.body.error) {
                return false
            } else {
                return true
            }
        }).as('creatRoles');
        cy.get('@creatRoles').should((value) => {
            expect(value).to.eql(true);
        })
    });
});