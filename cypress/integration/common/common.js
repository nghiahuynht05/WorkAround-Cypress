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

var token = ''

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
    controller.getHeaderRows(ELEMENT.HEADERS_NAME).then(function (actualResult) {

        console.log("Actual result: ", actualResult);
        for (var index = 0; index < actualResult.length; index++) {
            console.log(actualResult[index])
            if (index == 0) {
                assert.isTrue(controller.matchData(actualResult[index], header), true);
            }
            if (index == 1) {
                assert.isTrue(controller.matchData(actualResult[index], rows), true)

            }
        }
    });
});