const ELEMENT = require('../support/element');
import controller from './POM/controller.js';

describe('Verify UI of setting module', () => {

  it('Login user fleet to CC', () => {
    cy.visit(Cypress.config('baseUrl'));
    controller.input(ELEMENT.USER_NAME, Cypress.env('userName'));
    controller.input(ELEMENT.PASSWORD, Cypress.env('password'));
    controller.clickBtn(ELEMENT.LOGIN);
  });

  describe('Verify fleet info', () => {
    it('Open Fleet info pages', () => {
      controller.clickBtn(ELEMENT.SETTING);
      cy.url().should('eq', `${Cypress.config('baseUrl')}` + 'settings/Fleet_info');
    });

    it('Get fleet info', () => {
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_NAME, `Pepsi That's What I Like`);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_PHONE, `+447499123001`);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_EMAIL, `qup.nghiahuynh05@gmail.com`);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_COUNTRY, `Malaysia`);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_TIMEZONE, `Asia/Kuala_Lumpur`);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_ADDRESS, ``);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_WEBSITE, ``);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_CURENCY, `MYR`);
      controller.getTextTypeInput(ELEMENT.INFO_FLEET_UNIT, `km`);
    });
  })
})