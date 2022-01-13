
class Controller {
    input(element, value) {
        return cy.xpath(element).type(value);
    }

    clickBtn(element) {
        return cy.xpath(element).click();
    }

    getTextHaveValue(element, expected) {
        return cy.get(element).should('have.value', expected);
    }

    getTextHaveText(element, expected) {
        return cy.xpath(element).should('have.text', expected);
    }

    countHaveLength(element, expected) {
        return cy.xpath(element).should('have.length', expected);
    }
}

export default new Controller();