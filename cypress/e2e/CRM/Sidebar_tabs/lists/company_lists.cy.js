describe('Company', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');      //переходим на вкладку Компания
        cy.get('.sidebar-toggle-state').click();
        cy.get('.icon-crm-company.span-align').click();
    })


    it('Company', () => {
        cy.visit('https://beta.crm.trueconf.com');      //переходим на вкладку Компания
        cy.get('.sidebar-toggle-state').click();
        cy.get('.icon-crm-company.span-align').click();
    })


it('country_list', () => {
cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
.click();
cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/input')
            .type('Ukr')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .should('have.contain', 'Ukraine').wait(2000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]')
            cy.should('have.contain', 'Ukraine')
})


it('lists manager selection', () => {                           //проверка списка при выборе менеджера
    cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[4]/button')
        .click();
    cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[4]/div/input')
        .clear()
        .type('Максим').wait(4000)
        .type('{downarrow}')
        .type('{enter}')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[4]/button')
        .should('have.contain', 'Максим Кузубов');
    cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
        .should('have.contain', 'Максим Кузубов')
    })


    it('checking the search box inside the tab', () => {       //проверка поиска вутри вкладки компания
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[4]/button')
        .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[4]/div/div/a[1]')
        .click();
        cy.get('[id="search"]')
        .type('autotest')
        .should('have.value', 'autotest');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span')
        .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[2]')
        .should('have.contain', 'autotest')
    })
})