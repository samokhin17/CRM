import { header_menu } from "../../../../support/pages/header_menu";

describe('Meetings', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50/');
        cy.get('.glyphicon-glass.span-align').click();   
    })
    
    it('Request tab', () => {
        cy.visit('http://10.0.77.50/');
        cy.get('.glyphicon-glass.span-align')
        .click();  
    })

    it('checking the search box inside the tab by name', () => {        //поле поиска по имени
        header_menu.searchInputAndButton('111')
        cy.wait(3000);
        cy.xpath('//table/tbody/tr/td[1]')
            .should('have.contain', '111')
    })


    it('checking the search box inside the tab by address', () => {        //поле поиска по адресу
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(1000);
        header_menu.searchInputAndButton('Barcelona city')
        cy.wait(4000);
        cy.xpath('//table/tbody/tr/td[2]')
            .should('have.contain', 'Barcelona city')
            .should('not.have.value', 'AT Ростов, ул.ВКС д.005 строение 12')
            .should('not.have.value', 'Харьков');

    })


    it('data check', () => {
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(1000);
        header_menu.dateChoice('05.12.2021', '25.04.2022')
        header_menu.dateChoiceSubmitButton()
        cy.wait(2000);
        cy.xpath('//table/tbody/tr/td[3]')
            .should('have.contain', '06.12.2021')
        cy.xpath('//table/tbody/tr/td[4]')
            .should('have.contain', '27.04.2022')
        cy.xpath('//table/tbody/tr/td[3]')
            .should('not.have.contain', '20.05.2022')
    })



    it('data check cancel', () => {
        header_menu.dateChoice()
        cy.xpath('//*[@id="perpop"]/div/a[2]').click({force:true})
        cy.xpath('//table/tbody/tr/td[3]')
            .should('have.contain', '20.05.2022')
    })



    it('Checking status filters', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
        .click();                                                           //новый
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
        .should('have.class', 'button-group-item meeting-status active');

        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
        .click();                                                          //принято
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
        .should('have.class', 'button-group-item meeting-status active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
        .should('have.class', 'button-group-item meeting-status');

        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[3]')
        .click();                                                            //отклонено
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[3]')
        .should('have.class', 'button-group-item meeting-status active');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
        .should('have.class', 'button-group-item meeting-status');

        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[4]')
        .click();                                                             //отменено
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[4]')
        .should('have.class', 'button-group-item meeting-status active')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[3]')
        .should('have.class', 'button-group-item meeting-status');

        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[5]')
        .click();                                                               //завершено
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[5]')
        .should('have.class', 'button-group-item meeting-status active')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[4]')
        .should('have.class', 'button-group-item meeting-status')

        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[5]')
        .click();                                                               //завершено
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[5]')
        .should('have.class', 'button-group-item meeting-status')
})
   


    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломи', 'Виталий Коломиец')
        cy.xpath('//table/tbody/tr/td[6]')
            .should('have.contain', 'Виталий Коломиец')
            .should('not.have.contain', 'Максим Кузубов')
    })
    
    
    // it('all managers selection', () => {        //все менеджеры
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
    //     .click();
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
    //     .click();
    // })
    
    // it('select only my entries', () => {        //только мои
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
    //     .click();
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[2]')
    //     .click();
    // })


    it('contact selection', () => {     //контакт определенная
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        header_menu.contactChoiseByName('Кузуб', 'Максим Кузубов')
    })
    
    
    it('all contacts selection', () => {        //все контакты
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
        .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/button')
        .click();
    })


    it('added a meeting', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
        .click()
        .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
        .click()
        .type('111')
        .should('have.value', '111');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[2]/div/input[1]')
        .click()
        .type('Kuzubov AUTOTEST')
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', 'Kuzubov AUTOTEST')
        .wait(2000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[4]/div/input')
        .click()
        .type('Харьков')
        .should('have.value', 'Харьков');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[5]/div/textarea')
        .click()
        .type('5454545454545454545454')
        .should('have.value', '5454545454545454545454');
        cy.xpath('//*[@id="form"]/div[2]/button')
        .click();
    })
    

    it('added a meeting', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
        .click()
        .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
        .click()
        .type('111')
        .should('have.value', '111');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[2]/div/input[1]')
        .click()
        .type('Kuzubov AUTOTEST')
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', 'Kuzubov AUTOTEST')
        .wait(2000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[4]/div/input')
        .click()
        .type('Харьков')
        .should('have.value', 'Харьков');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[5]/div/textarea')
        .click()
        .type('5454545454545454545454')
        .should('have.value', '5454545454545454545454');
        cy.xpath('//*[@id="form"]/div[2]/a')
        .click();
    })
})
