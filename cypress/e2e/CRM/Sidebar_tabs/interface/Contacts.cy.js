
describe('Contacs', () => {
beforeEach(() => {
    cy.visit('http://10.0.77.50');
    cy.get('.icon-crm-contact.span-align').click();
})



    it('Deal', () => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-contact.span-align').click();
    })


    it('checking the search box inside the tab', () => {        //поле поиска(любой контакт, например Максим)
        cy.xpath('//*[@id="search"]').click()
        .type('Kolom')
        .should('have.value', 'Kolom')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span/button')
        .click().wait(4000);
       cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr')
       .should('have.contain', 'QA Kolomiets')
    })

    it('checking the search name column', () => {        //поле поиска(любой контакт, например Максим)
        cy.xpath('//*[@id="search"]').click()
            .type('Kuzubov AUTOTEST')
            .should('have.value', 'Kuzubov AUTOTEST')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/button')
        cy.get('[class="btn btn-default btn-sm manager-select-toggle"]')
            .click();
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/div/div/a[1]')
        cy.get('[class="btn btn-sm showallmanager"]')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span/button')
        .click().wait(4000);
       cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]')
       .should('have.contain', 'Kuzubov AUTOTEST')
    })

    it('checking the search company column', () => {        //поле поиска(любой контакт, например Максим)
        cy.xpath('//*[@id="search"]').click()
            .type('Kuzubov AUTOTEST')
            .should('have.value', 'Kuzubov AUTOTEST')
        cy.get('[class="btn btn-default btn-sm manager-select-toggle"]')
            .click();
        cy.get('[class="btn btn-sm showallmanager"]')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span/button')
        .click().wait(4000);
       cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
       .should('have.contain', 'Kuzubov AUTOTEST')
    })


    it('checking the search title  column', () => {        //поле поиска(любой контакт, например Максим)
        cy.xpath('//*[@id="search"]').click().clear()
            .type('Царь')
            .should('have.value', 'Царь')
        cy.get('[class="btn btn-default btn-sm manager-select-toggle"]')
            .click();
        cy.get('[class="btn btn-sm showallmanager"]')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span/button')
        .click().wait(4000);
       cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[4]')
       .should('have.contain', 'Царь')
    })

    it('checking the search subject box inside the tab', () => {        //поле поиска(любой субъект)
        cy.xpath('//*[@id="area"]').click()
            .type('Donetsk')
            .should('have.value', 'Donetsk');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[2]/span/button').click();
        cy.wait(4000)
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]')
        .should('have.contain', 'QA Kolomiets')
    })


    it('checking the search number box inside the tab', () => {        //поле поиска(любой номер)
        cy.xpath('//*[@id="phone"]').click()
            .type('+380992499780')
            .should('have.value', '+380992499780');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[3]/span/button').click();
        cy.get('[class="btn btn-default btn-sm manager-select-toggle"]').click();
        cy.get('[class="btn btn-sm showallmanager"]').click();
        cy.wait(4000)
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]')
        .should('have.contain', 'Максим Кузубов')
    })

    
    it('manager selection', () => {       //Менеджер определенный
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
        .click();
        cy.xpath('//*[@id="manager-button"]')
        .click({force:true})
        .clear()
        .type('Максим')
        .wait(4000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', 'Максим Кузубов');
        cy.xpath('//*[@id="table"]/tr[1]/td[3]')
        .should('have.contain', 'Максим Кузубов');
        })
    
    
        it('all managers selection', () => {        //все менеджеры
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
        .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
        .click();
        })
    
        it('select only my entries', () => {        //только мои
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
        .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[2]')
        .click();
        })


    it('all tags selection', () => {    //все теги
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
        .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/button')
        .click();
        })
})