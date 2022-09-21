describe('TCS', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/a/p/i').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[1]/a').click({force:true});   
      })
    
    it('TCS', () => {
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/a/p/i')
        .click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[1]/a')
        .click();      
    })

    it('manager selection', () => {       //Менеджер определенный
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
        .click();
        cy.xpath('//*[@id="user-button"]')
        .click({force:true})
        .clear()
        .type('Максим')
        .wait(4000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', 'Максим Кузубов');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[4]')
        .should('have.contain', 'Максим Кузубов')
        })


        it('version serch', () => {
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')            //поиск по версии
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form[2]/input')
            .type('1111').should('have.value', '1111')
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form[2]/span/button')
            .click().wait(2000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[5]')
            .should('have.contain', '1111')
        })


        it('status server.online', () =>{
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')            //статус онлайн
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click();   
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item status-online active')
            // cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[6]')
            // .should('have.contain', 'online')                                                        //потому что нет серверов на бете
        })


        it('status server.online', () =>{
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')            //статус офлайн
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click();   
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item status-offline active')
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[6]')
            .should('have.contain', 'offline')                                                        
    })
})