const { should } = require("chai");

describe('Deal', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-deal.span-align').click();
    })



    it('Deal', () => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-deal.span-align').click();
    })


    it('lists manager selection', () => {                           //проверка списка при выборе менеджера
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/input') 
            .clear()
            .type('Максим')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Максим Кузубов');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[5]')
            .should('have.contain', 'Максим Кузубов')
    })


    it('both fields are filled', () => {
        cy.xpath('//*[@id="summpopover"]')
            .click();
        cy.xpath('//*[@id="sum_from"]')
            .click({ force: true })
            .type('1000')
            .should('have.value', '1000')
        cy.xpath('//*[@id="sum_to"]')
            .click({ force: true })
            .type('1000')
            .should('have.value', '1000')
        cy.xpath('//*[@id="setSum"]')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click()
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]')
            .should('have.contain', '1000')
    })


    it('Checking currency filters_lists.rub', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true });                          //проверка соответствия списка фильтру
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item rub active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]/i')
            .should('have.class', 'glyphicon-rub');
    })

    it('Checking currency filters_lists.usd', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true });                          //проверка соответствия списка фильтру
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item usd active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]/i')
            .should('have.class', 'glyphicon-usd');
    })


    it('Checking currency filters_lists.eur', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true });                          //проверка соответствия списка фильтру
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click()
            .wait(4000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item eur active').wait(4000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]/i')
            .should('have.class', 'glyphicon-eur');
    })




    it('Checking list raw.rub', () => {     //проверка фильтиров статуса
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true })
            .wait(2000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
            .click().wait(2000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'RAW');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item rub active');
    })

    it('Checking list raw.usd', () => {     //проверка фильтиров статуса
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true })
            .wait(2000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
            .click().wait(2000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'RAW');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item rub active');
    })


    it('Checking list new', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[2]')
            .should('have.class', 'button-group-item setstatus raw');
        cy.xpath('//*[@id="statuses"]/a[3]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item setstatus new active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true });
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'NEW');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item rub active');
    })

    it('Checking lisT PILOT.eur', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item setstatus new');
        cy.xpath('//*[@id="statuses"]/a[4]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[4]')
            .should('have.class', 'button-group-item setstatus pilot active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click()
            .wait(2000)
        cy.xpath('//*[@id="table"]/tr[1]/td[3]/i')
            .should('have.class', 'glyphicon glyphicon-eur')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'PILOT');
    })

    it('Checking list AGREEMENT.eur', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[4]')
            .should('have.class', 'button-group-item setstatus pilot');
        cy.xpath('//*[@id="statuses"]/a[5]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item setstatus agreement active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true }).wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="table"]/tr[1]/td[3]/i')
            .should('have.class', 'glyphicon glyphicon-eur')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'AGREEMENT');
    })

    it('Checking list PAYMENT.usd', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item setstatus agreement');
        cy.xpath('//*[@id="statuses"]/a[6]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item setstatus payment active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="table"]/tr[1]/td[3]/i')
            .should('have.class', 'glyphicon glyphicon-usd')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'PAYMENT');
    })

    it('Checking list PURCHASED.usd', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item setstatus payment');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[7]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[7]')
            .should('have.class', 'button-group-item setstatus purchased active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="table"]/tr[1]/td[3]/i')
            .should('have.class', 'glyphicon glyphicon-usd')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'PURCHASED');
    })

    it('getting a list in chosen period', () => {
        cy.get('i[class="icon-crm icon-crm-deal span-align"]')
            .click()
        cy.get('#period')
            .click()
        cy.get('#date_from')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(43)')
            .click({force:true})
        cy.get('#date_to')
            .click()
        cy.get('body > div:nth-child(25) > div.core.border.selected')
            .click({force:true})
        cy.get('a[class="btn btn-sm setper"]')
            .contains('Применить')
            .click()
        cy.get('td[class="table-width-250"]')
            .contains('Тестовый сертификат')
            .should('have.contain', 'Тестовый сертификат')

    })

    it('showing "null" in not chosen "to_date"', () => {
        cy.get('i[class="icon-crm icon-crm-deal span-align"]')
            .click()
        cy.get('#period')
            .click()
        cy.get('#date_from')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(43)')
            .click({force:true})
        cy.get('a[class="btn btn-sm setper"]')
            .contains('Применить')
            .click()
        cy.get('text[id="period"]')
            .should('have.contain', 'null')
        cy.get('td[class="table-width-250"]')
            .contains('Тестовый сертификат')
            .should('have.contain', 'Тестовый сертификат')
    })

    it('filters: rub, null-date, PILOT, determined group, all managers, sum', () => {
        cy.get('i[class="icon-crm icon-crm-deal span-align"]')
            .click()
        cy.get('i[class="glyphicon glyphicon-rub"]')
            .click()
        cy.get('#period')
            .click()
        cy.get('#date_from')
            .click()
        cy.get('body > div:nth-child(25) > div.core.border.selected')
            .click({force:true})
        cy.get('a[class="btn btn-sm setper"]')
            .contains('Применить')
            .click()
        cy.contains('ПРОБНЫЙ')
            .click()
        cy.contains('Выбрать группу')
            .click()
        cy.get('[placeholder="Группа"]')
            .click()
            .type('Admins')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
        cy.get('#manager-name')
            .click()
        cy.get('[class="btn btn-sm showallmanager"]')
            .click()
        cy.contains('Выбрать сумму')
            .click()
        cy.get('[placeholder="По"]')
            .click()
            .type('9999')
        cy.get('#setSum')
            .click()
        cy.get('[data-status="rub"]')
            .should('have.class', 'button-group-item rub active')
        cy.get('#table > tr:nth-child(1) > td.table-width-150 > i')
            .should('have.class', 'glyphicon glyphicon-rub')
        cy.get('text[id="period"]')
            .should('have.contain', 'null')
        cy.get('td[class="table-width-125"]')
            .should('have.contain', 'PILOT')
        cy.get('[id="group-name"]')
            .should('have.contain', 'Admins')
        cy.get('#manager-name')
            .should('have.contain', 'Выбрать менеджера')
        cy.get('td[class="table-width-150"]')
            .should('have.contain', '9999')
    })

    it.only('filters: rub, date-null, AGREEMENT, all groups, determined managers, without sum', () => {
        cy.get('i[class="icon-crm icon-crm-deal span-align"]')
            .click()
        cy.get('i[class="glyphicon glyphicon-rub"]')
            .click()
        cy.get('#period')
            .click()
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click({force:true})
        cy.get('body > div:nth-child(24) > div:nth-child(1) > a')
            .click({force:true})
        cy.get('#date_from')
            .click()
        cy.get('body > div:nth-child(25) > div.core.border.selected')
            .click({force:true})
        cy.get('a[class="btn btn-sm setper"]')
            .contains('Применить')
            .click()
        cy.contains('ДОГОВОР')
            .click()
        cy.contains('Выбрать группу')
            .click()
        cy.get('[class="btn btn-sm search showallgroup show-all-button"]')
            .click()
        cy.get('#manager-name')
            .click()
        cy.get('[placeholder="Пользователь"]')
            .click()
            .type('Тестовый сертификат')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
        cy.get('[data-status="rub"]')
            .should('have.class', 'button-group-item rub active')
        cy.get('#table > tr:nth-child(1) > td.table-width-150 > i')
            .should('have.class', 'glyphicon glyphicon-rub')
        cy.get('text[id="period"]')
            .should('have.contain', 'null')
        cy.get('td[class="table-width-125"]')
            .should('have.contain', 'AGREEMENT')
        cy.get('[id="group-name"]')
            .should('have.contain', 'Выбрать группу')
        cy.get('td[class="table-width-250"]')
            .should('have.contain', 'Тестовый сертификат')
    })

})
