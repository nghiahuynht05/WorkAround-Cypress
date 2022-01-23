var _ = require('lodash');

Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function (chunkSize) {
        var array = this;
        return [].concat.apply([],
            array.map(function (elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
        );
    }
});
class Controller {
    constructor() {}
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

    getHeaderRows(element) {
        var headerRows = {};
        var rowsInfo = [];

        function getHeader() {
            cy.xpath(element)
                .within((jQuery) => {
                    var i = 0;
                    for (i == 0; i < jQuery.length; i++) {
                        Object.assign(headerRows, {
                            [Cypress.$(jQuery[i]).text()]: Cypress.$(jQuery[i]).text()
                        });
                    }
                    cy.xpath(`//*[@class="cell_content"]`)
                        .within((content) => {
                            var arrjQuery = []

                            for (var i = 0; i < content.length; i++) {
                                arrjQuery.push(Cypress.$(content[i]).text())
                            };
                            var rowsArry = arrjQuery.chunk_inefficient(jQuery.length);
                            var keysHeader = _.keys(headerRows);
                            rowsArry.forEach(function (values, index) {
                                if (index != 0) {
                                    var objectRows = {};
                                    values.forEach(function (item, index) {
                                        Object.assign(objectRows, {
                                            [keysHeader[index]]: item
                                        })
                                    });
                                    rowsInfo.push(objectRows);
                                }
                            });
                        });
                    return rowsInfo
                })
            return [headerRows, rowsInfo]
        }
        return Promise.all([getHeader()]).then((value) => {
            return value[0]
        })
    }

    matchData(data, expect) {
        var self = this;
        if (_.isArray(expect) && _.isArray(data)) {
            return expect.every(function (item) {
                return data.some(function (datum) {
                    return self.matchData(datum, item);
                })
            })
        } else {
            return _.isMatchWith(data, expect, self.matchFn);
        }
    }

    matchFn(obj, src) {
        if (!_.isObject(obj)) {
            return obj === src
        }
        if (_.isArray(src) && _.isArray(obj)) {
            return src.every(function (item) {
                return obj.some(function (datum) {
                    return matchFn(datum, item);
                })
            })
        } else {
            if (_.matches(src)(obj)) return true;
            return Object.keys(src).every(function (key) {
                return matchFn(obj[key], src[key]);
            })
        }
        return false;
    }
}


export default new Controller();