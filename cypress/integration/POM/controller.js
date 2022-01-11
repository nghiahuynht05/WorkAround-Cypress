
class Controller {
    input(element, value) {
        cy.xpath(element).type(value);
    }

    clickBtn(element) {
        cy.xpath(element).click();
    }

    getTextTypeInput(element, expected) {
        return cy.get(element).should('have.value', expected);
    }
}

export default new Controller();