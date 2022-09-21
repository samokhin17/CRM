describe('Projects', () => {
 it('added project', () => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.glyphicon-folder-close.span-align')
        .click()
        .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[2]')
        .click()
        .wait(5000);
    cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
        .click({ force: true })
        .type('КУЗУБОВ АВТОТЕСТ')
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', 'КУЗУБОВ АВТОТЕСТ')
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
        .type('11111')
        .should('have.value', '11111');
    cy.xpath('//*[@id="form"]/div[2]/button')
        .click();
})
})

describe('Project_profile', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.glyphicon-folder-close.span-align')
        .click()
        .wait(5000);
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click()
        .wait(5000)
    })


    //нашел и проверил парттнера
    it('fing/chech partner', () => {
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div')
.should('have.class', 'react-div');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div/a')
.should('have.contain', 'КУЗУБОВ АВТОТЕСТ')
    })


//нашел и проверил заказчика
it('fing/chech partner', () => {
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div')
.should('have.class', 'react-div');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div/a')
.should('have.contain', 'Kuzubov AUTOTEST');
})


//нашел и проверил контакт
it('fing/chech contact', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div')
    .should('have.class', 'react-div');
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div')
    .should('have.contain', 'autotestik')
        })


        //нашел и проверил опимание
    it('fing/chech description', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[4]/td[2]/div')
        .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[4]/td[2]/div/div')
        .should('have.contain', '11111')
            })


            //нашел и проверил менеджера
    it('fing/chech manager', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div')
        .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div/a')
        .should('have.contain', 'Максим Кузубов')
            })



            //нашел и проверил бюджет
    it('fing/chech budget', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[6]/td[2]/div')
        .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[6]/td[2]/div/span')
        .should('be.empty')
            })



                   //нашел и проверил discount
    it('fing/chech discount', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[7]/td[2]/div')
        .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[7]/td[2]/div/span')
        .should('be.empty')
            })




                 //нашел и проверил валюту
    it('fing/chech currency', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[8]/td[2]/div')
        .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[8]/td[2]/div/span')
        .should('be.empty')
            })




            //нашел и проверил тип покупки
    it('fing/chech Purchase type', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[9]/td[2]/div')
        .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[9]/td[2]/div/span')
        .should('have.contain', 'eauction')
            })



            //нашел и проверил статус
    it('fing/chech status', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[10]/td[2]/div')
        .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[10]/td[2]/div/span')
        .should('have.contain', 'new')
            })



            //нашел и проверил время истечения проекта
    it('fing/chech daedline', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[11]/td[2]/span')
        .should('have.class', 'react-item');
                    })



            //нашел и проверил дату создания
    it('fing/chech partner', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[11]/td[2]/span')
        .should('have.class', 'react-item');
                    })



//нашел и добавил заметку
it('add note', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[1]/button')
    .click()
    .wait(3000);
    cy.xpath('//*[@id="form"]/div[1]/div/label')
    .click()
    .type('11111');
    cy.xpath('//*[@id="form"]/button')   
    .click()
    .wait(5000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
    .click()
.should('have.class', 'active');
cy.xpath('//*[@id="notes"]/div/ul/li/div')
.should('have.class', 'note')
})


//Проверил логи
it('chech logs', () => {
cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
.click()
.should('have.class', 'active')
})



})
