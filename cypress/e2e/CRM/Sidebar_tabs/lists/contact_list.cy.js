describe('Contacs', () => {
beforeEach(() => {
    cy.visit('https://beta.crm.trueconf.com');
    cy.get('.icon-crm-contact.span-align').click();
})



    it('Deal', () => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-contact.span-align').click();
    })

    it('checking the search box inside the tab', () => {        //поле поиска(любой контакт, например Максим)
        cy.xpath('//*[@id="search"]').click()
        .type('Тестирование')
        .should('have.value', 'Тестирование')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span/button')
        .click().wait(4000);
       cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr')
       .should('have.contain', 'Тестирование')
    })
       
    
    it('lists manager selection', () => {                           //проверка списка при выборе менеджера
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/input')
            .clear()
            .type('Максим').wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Максим Кузубов');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[3]')
            .should('have.contain', 'Максим Кузубов')
    })
})