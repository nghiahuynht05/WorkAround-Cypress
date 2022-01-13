var _ = require('lodash');
const ELEMENT = require('../support/element');
import controller from './POM/controller.js';


describe('Verify UI of setting module', () => {
    it('Login user fleet to CC', () => {
        cy.visit(Cypress.config('baseUrl'));
        controller.input(ELEMENT.USER_NAME, Cypress.env('userName'));
        controller.input(ELEMENT.PASSWORD, Cypress.env('password'));
        controller.clickBtn(ELEMENT.LOGIN);
        // });
        // it('Open Permission pages', () => {
        cy.wait(5000);
        controller.clickBtn(ELEMENT.SETTING);
        controller.clickBtn(ELEMENT.PERMISSION);
        cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Permission');
        // });

        // it('Verify header and content table list', () => {
        // Get info of header
        controller.getTextHaveText(ELEMENT.COLUNM_NAME, 'Name');
        controller.getTextHaveText(ELEMENT.COLUNM_STATUS, 'Status');
        controller.getTextHaveText(ELEMENT.COLUNM_ACTIONS, 'Actions');
        // Get info row of table, ignore column Actions
        controller.getTextHaveText(`(//*[@class='cellTable_cell'])[4]`, '1');
        controller.getTextHaveText(`(//*[@class='cellTable_cell'])[5]`, 'Active');
        controller.getTextHaveText(`(//*[@class='cellTable_cell'])[7]`, 'Full');
        controller.getTextHaveText(`(//*[@class='cellTable_cell'])[8]`, 'Active');
        // });

        it('Open add new permission form', () => {
        controller.clickBtn(ELEMENT.BUTTON_ADD);
        });

        // it('Verify info add new permission form', () => {
        //  Check title name
        controller.getTextHaveText(`//*[@class='modal-title']`, 'Add permission')
        // Count number of name permisson
        controller.countHaveLength(`//*[@class='group-roles']//label/span`, 99);
        // Check show button Full permiision
        controller.countHaveLength(`//label/span[text()='Full permissions']`, 1);
        // Check show textbox input name permission
        controller.countHaveLength(`//input[@placeholder='Name']`, 1);
        // Check show radio setting permission Driver/ Car
        controller.countHaveLength(`//span[@class='qup-radio']`, 3)
        // Check show 2 button cancel and Save
        controller.countHaveLength(ELEMENT.BUTTON_SAVE, 1);
        controller.countHaveLength(ELEMENT.BUTTON_CANCEL, 1);
        // Check show checkbox Active
        controller.countHaveLength(`//label[@class='bold']`, 1);
        // });

        // it('Open add new permission form', () => {
        // controller.clickBtn(ELEMENT.BUTTON_ADD);
        // });

        it('Input permission name', () => {
        controller.input(`//input[@placeholder='Name']`, "Permission Test");
        });

        // it('Select full permissions name', () => {
        controller.clickBtn(`//label[text()='Full permissions']`);
        // });

        it('Click Save button', () => {
        cy.wait(2000);
        controller.clickBtn(ELEMENT.BUTTON_SAVE);
    });
});


    // describe('Verify Permission setting', () => {
    //     it('Open Permission pages', () => {
    //         cy.wait(5000);
    //         controller.clickBtn(ELEMENT.SETTING);
    //         controller.clickBtn(ELEMENT.PERMISSION);
    //         cy.url().should('eq', `${Cypress.config('baseUrl')}` + '/settings/Permission');
    //     });

    //     describe('Verify info view list permission', () => {
    //         it('Verify header and content table list', () => {
    //             // Get info of header
    //             controller.getTextHaveText(ELEMENT.COLUNM_NAME, 'Name');
    //             controller.getTextHaveText(ELEMENT.COLUNM_STATUS, 'Status');
    //             controller.getTextHaveText(ELEMENT.COLUNM_ACTIONS, 'Actions');
    //             // Get info row of table, ignore column Actions
    //             controller.getTextHaveText(`(//*[@class='cellTable_cell'])[4]`, 'Permission 01');
    //             controller.getTextHaveText(`(//*[@class='cellTable_cell'])[5]`, 'Inactive');
    //             controller.getTextHaveText(`(//*[@class='cellTable_cell'])[7]`, 'Permission 02');
    //             controller.getTextHaveText(`(//*[@class='cellTable_cell'])[8]`, 'Active');
    //         });
    //     });

    //     describe('Verify add permission form', () => {
    //         it('Open add new permission form', () => {
    //             controller.clickBtn(ELEMENT.BUTTON_ADD);
    //         });

    //         it('Verify info add new permission form', () => {
    //             //  Check title name
    //             controller.getTextHaveText(`//*[@class='modal-title']`, 'Add permission')
    //             // Count number of name permisson
    //             controller.countHaveLength(`//*[@class='group-roles']//label/span`, 88);
    //             // Check show button Full permiision
    //             controller.countHaveLength(`//label/span[text()='Full permissions']`, 1);
    //             // Check show textbox input name permission
    //             controller.countHaveLength(`//input[@placeholder='Name']`, 1);
    //             // Check show radio setting permission Driver/ Car
    //             controller.countHaveLength(`//span[@class='qup-radio']`, 3)
    //             // Check show 2 button cancel and Save
    //             controller.countHaveLength(ELEMENT.BUTTON_SAVE, 1);
    //             controller.countHaveLength(ELEMENT.BUTTON_CANCEL, 1);
    //             // Check show checkbox Active
    //             controller.countHaveLength(`//label[@class='bold']`, 1);
    //         });
    //     });

    //     describe('Verify Add feature', () => {
    //         it('Open add new permission form', () => {
    //             controller.clickBtn(ELEMENT.BUTTON_ADD);
    //         });

    //         it('Input permission name', () => {
    //             controller.input(`//input[@placeholder='Name']`, "Permission Test");
    //         });

    //         it('Select full permissions name', () => {
    //             controller.clickBtn(`//label[text()='Full permissions']`);
    //         });

    //         it('Click Save button', () => {
    //             cy.wait(2000);
    //             controller.clickBtn(ELEMENT.BUTTON_SAVE);
    //         });
    //     });
    // });
});