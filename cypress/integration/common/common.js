import {
    Given, When, Then
} from "cypress-cucumber-preprocessor/steps"


import controller from "../POM/controller";
import ELEMENT from "../../support/element";

Given('Login user fleet to CC', function () {
    cy.visit(Cypress.config('baseUrl'));
    controller.input(ELEMENT.USER_NAME, Cypress.env('userName'));
    controller.input(ELEMENT.PASSWORD, Cypress.env('password'));
    controller.clickBtn(ELEMENT.LOGIN);
});

Given(/^Open Fleet info pages$/, function () {
    controller.clickBtn(ELEMENT.SETTING);
    cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Fleet_info');
});

Given(/^Get fleet info$/, function(){
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_NAME, `Pepsi That's What I Like`);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_PHONE, `+447499123001`);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_EMAIL, `qup.nghiahuynh05@gmail.com`);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_COUNTRY, `Malaysia`);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_TIMEZONE, `Asia/Kuala_Lumpur`);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_ADDRESS, ``);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_WEBSITE, ``);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_CURENCY, `MYR`);
    controller.getTextHaveValue(ELEMENT.INFO_FLEET_UNIT, `km`);
})