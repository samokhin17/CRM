import {header_menu} from "../../../../support/pages/header_menu";

describe('Projects', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.glyphicon-folder-close.span-align').click();
    })

    it('Projects tab', () => {
        cy.visit('http://10.0.77.50');
        cy.get('.glyphicon-folder-close.span-align').click();
    })

    it('checking the search box inside the tab ID', () => {        //поле поиска
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Кузуб', 'Максим Кузубов')
        // cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
        //     .click();
        // cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
        //     .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form/input')
            .click()
            .clear()
            .should('be.empty');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
            .click().wait(2000);
        // cy.get('[class="table-count"]').should('have.value', 'Total: 171')
        cy.get('[class="table-count"]').should('have.text', 'Total: 171')
        // cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]')
        //     .should('have.contain', '171',{force: true});
    })



    it('serch partner', () => {        //поле поиска
         cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000); 
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form/input')
            .click()
            .type('Kuzubov AUTOTEST')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
            .click();
          
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'Kuzubov AUTOTEST');
    })



    it('serch customer', () => {        //поле поиска
          cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form/input')
            .click()
            .type('Kuzubov AUTOTEST')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
            .click();
          
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[3]')
            .should('have.contain', 'Kuzubov AUTOTEST');
    })


    it('serch INN', () => {        //поле поиска
         cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form/input')
            .click()
            .type('11251111111')
            .should('have.value', '11251111111');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
            .click();
           
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[4]')
            .should('have.contain', '11251111111');
    })

    it('Checking status filters new', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .click()
            .wait(2000);                                                           //new
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item setstatus new active');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]')
            .should('have.contain', 'new');
    })


    it('Checking status filters registered', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click()
            .wait(2000);                                                          //registered
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item setstatus registered active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item setstatus new');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]')
            .should('have.contain', 'registered');
    })

    it('Checking status filters expired', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click()
            .wait(2000);                                                            //expired
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item setstatus expired active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item setstatus registered');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]')
            .should('have.contain', 'expired');
    })


    it('Checking status filters completed', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[4]')
            .click();                                                             //completed
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[4]')
            .should('have.class', 'button-group-item setstatus completed active')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item setstatus expired');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]')
            .should('have.contain', 'completed');
    })

    it('Checking status filters rejected', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[5]')
            .click();                                                             //rejected
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[5]')
            .should('have.class', 'button-group-item setstatus rejected active')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[4]')
            .should('have.class', 'button-group-item setstatus completed');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]')
            .should('have.contain', 'rejected');
    })


    it('Checking status filters cancelled', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[6]')
            .click();                                                               //cancelled
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[6]')
            .should('have.class', 'button-group-item setstatus cancelled active')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[5]')
            .should('have.class', 'button-group-item setstatus rejected');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]')
            .should('have.contain', 'cancelled');
    })


    it('Checking status filters cancelled cancel', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[6]')
            .click();                                                               //cancelled
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[6]')
            .should('have.class', 'button-group-item setstatus cancelled')
    })

    it('Checking status filters eauction ', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
            .click()
            .wait(2000);                                                           //eauction
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
            .should('have.class', 'button-group-item settype eauction active');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[6]')
            .should('have.contain', 'eauction');
    })


    it('Checking status filter rfg ', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
            .should('have.class', 'button-group-item settype eauction');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
            .click();                                                          //rfg
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
            .should('have.class', 'button-group-item settype rfq active');
        
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click({force: true}).wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[6]')
            .should('have.contain', 'rfq');
    })


    it('Checking status filter contract ', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[3]')
            .click();                                                            //contract
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[3]')
            .should('have.class', 'button-group-item settype contract active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
            .should('have.class', 'button-group-item settype rfq');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/button')
            .click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[6]')
            .should('have.contain', 'contract');
    })


    it('Checking status filter contract ', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[3]')
            .click();                                                            //contract
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[3]')
            .should('have.class', 'button-group-item settype contract');
    })


    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломи', 'Виталий Коломиец')
   })


    it('all managers selection', () => {        //все менеджеры
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
    })

    it('select only my entries', () => {        //только мои
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
    })


    it('View new orders', () => {       //просмотр новых заявок
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[1]')
            .click();
        cy.wait(3000)
        cy.xpath('//*[@id="myModal"]')
            .click();
    })


    it('Data check', () => {
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
        cy.get('[class="btn btn-default btn-sm button-group-item subject-select-toggle"]').contains('Истекает').click();
        cy.get('[class$="small-input select-date-from"]').last().click();
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="7"][@data-month="6"][@data-year="2022"])[3]').click()
        // cy.xpath('(//div[contains(@class, "board")])[1]')
        // :nth-child(1)
        cy.get('[class$="small-input select-date-to"]').last().click();
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="19"][@data-month="6"][@data-year="2022"])[4]').click()
        // cy.xpath('(//*[@class="manager-complete-button show-all-button"][3]/[@class="btn btn-sm"])').click({force: true})
        cy.get(':nth-child(2) > .subject-select > .subject-select-panel > .manager-complete-button > :nth-child(2)').click({force: true})
        cy.wait(3500)
        cy.xpath('//table/tbody/tr/td[8]').first()
            .should('have.contain', '19.07.2022 08:37')
        // 20.07.2022 16:54

        // cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[4]/div[2]/div/button')
        //     .click();
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[4]/div[2]/div/div/input[1]')
        //     .type('13.11.2021', {force:true});
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[4]/div[2]/div/div/input[2]')
        //     .type('13.11.2021', {force:true});
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[4]/div[2]/div/div/div/a[1]')
        //     .click({force:true})
        //     .wait(2000);
        // cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form/input')
        //     .click()
        //     .type('Кастерком')
        //     .should('have.value', 'Кастерком');
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
        //     .click()
        //     .wait(5000);
        // cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr[1]/td[8]')
        //     .should('have.contain', '11.01.2022')
    })



    it('Data check cancel', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[4]/div[2]/div/button')
        .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[4]/div[2]/div/div/input[1]')
        .type('13.11.2021', {force:true});
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[4]/div[2]/div/div/input[2]')
        .type('13.11.2021', {force:true});
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[4]/div[2]/div/div/div/a[2]')
        .click({force:true})
    })



    it('added project', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[2]')
            .click()
            .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[2]/div/input[1]')
            .click({ force: true })
            .type('11251111111')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', '11251111111')
            .wait(2000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[4]/div/textarea')
            .click()
            .type('9794iuyeituy49t7y349')
            .should('have.value', '9794iuyeituy49t7y349');
        cy.xpath('//*[@id="form"]/div[2]/button')
            .click();
    })


    it('cancel added project', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[2]')
            .click()
            .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[2]/div/input[1]')
            .click({ force: true })
            .type('11251111111')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', '11251111111')
            .wait(2000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[4]/div/textarea')
            .click()
            .type('9794iuyeituy49t7y349')
            .should('have.value', '9794iuyeituy49t7y349');
        cy.xpath('//*[@id="form"]/div[2]/a').click();
    })


    it('added special project', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click()
            .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')

            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[2]/div/input[1]')
            .click({ force: true })
            .type('11251111111')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', '11251111111')
            .wait(2000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[4]/div/textarea')
            .click()
            .type('9794iuyeituy49t7y349')
            .should('have.value', '9794iuyeituy49t7y349');
        cy.xpath('//*[@id="form"]/div[2]/button')
            .click();
    })


    it('cancel added special project', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click()
            .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[2]/div/input[1]')
            .click({ force: true })
            .type('11251111111')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', '11251111111')
            .wait(2000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[4]/div/textarea')
            .click()
            .type('9794iuyeituy49t7y349')
            .should('have.value', '9794iuyeituy49t7y349');
        cy.xpath('//*[@id="form"]/div[2]/a')
            .click();
    })

})