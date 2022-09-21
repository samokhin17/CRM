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
        cy.xpath('//*[@id="user-button"]')
            .clear()
            .type('Максим').wait(4000)
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
            .click().wait(2000);
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




    it('Checking list raw', () => {     //проверка фильтиров статуса
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({ force: true })
            .wait(2000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
            .click().wait(2000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'RAW');
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
    })

    it('Checking lisT PILOT', () => {     //проверка фильтиров статуса
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
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'PILOT');
    })

    it('Checking list AGREEMENT', () => {     //проверка фильтиров статуса
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
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'AGREEMENT');
    })

    it('Checking list PAYMENT', () => {     //проверка фильтиров статуса
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
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'PAYMENT');
    })

    it('Checking list PURCHASED', () => {     //проверка фильтиров статуса
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
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'PURCHASED');
    })

})
