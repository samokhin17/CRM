//Создал заявку
describe('Create_Request', () => {
    it('Create_Request', () => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.glyphicon-list-alt.span-align').click()
        .wait(3000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/button')
        .click()
        .wait(3000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
        .click()
        .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
            cy.xpath('//*[@id="form"]/div[2]/button')
            .click()
            .wait(5000)
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
            .click()
            .wait(4000);
    })
})
      

      //начало сьюта
      describe('Request', () => {
        beforeEach(() => {
            cy.visit('https://beta.crm.trueconf.com');
            cy.get('.glyphicon-list-alt.span-align').click()
            .wait(3000);
            cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
            .click()
            .wait(4000);
    })   

//нашел и изменил тип заявки
    it('find/change type request', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div/i')
            .click({force:true});
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div/select')
            .select('partnership')
            .should('have.value', 'partnership');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .type('12345');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.contain', 'partnership');
    })


    //нашел и изменил компанию заявки
    it('find/change company request', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.class', 'react-div');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div/i')
.click({force:true});
cy.xpath('//*[@id="company"]')
.clear()
.type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
.type('12345');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
.click()
.wait(5000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST');
    })


      //нашел и изменил контакт заявки
      it('find/change contact request', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div')
            .should('have.class', 'react-div');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div/i')
.click({force:true});
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div/input[1]')
.clear()
.type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
.type('12345');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
.click()
.wait(5000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST');
    })

 //нашел и изменил описание заявки
 it('find/change drscription request', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[4]/td[2]/div')
        .should('have.class', 'react-div');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[4]/td[2]/div/i')
        .click({force:true});
cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[4]/td[2]/div/textarea')
        // .click()
        .type('Kuzubov AUTOTEST')
        .wait(4000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
        .type('12345');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
        .click()
        .wait(5000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[4]/td[2]/div')
        .should('have.contain', 'Kuzubov AUTOTEST');
 })


   //нашел и изменил владельца заявки
   it('find/change owner request', () => {
    const owners = ['Александр Самохин', 'Сара Мислимова', 'Семен Самойлов', 'Артур Глушенко']
        let getRandomOwner = Math.floor(Math.random() * owners.length)
        var owner = owners[getRandomOwner];
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div')
        .should('have.class', 'react-div');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div/i')
.click({force:true});
cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div/input[1]')
.clear()
.type(owner)
        .wait(4000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', owner)
        .wait(2000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
.type('12345');
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
.click()
.wait(5000);
cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div/span')
        .should('have.value', owner);
})


 //нашел дату заявки
 it('find/check data request', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[6]/td[2]/span')
        .should('have.class', 'react-item');
    })


    it('check tab', () => {                      //проверил табы
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .should('have.class', '');
    })


  //Добавил заметку
    it('add note', () => { 
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div/button')  
        .click()
        .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div/textarea')
        .type('11111')
        .wait(3000);
        cy.xpath('//*[@id="form"]/button')
        .click()
        .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click();
            cy.xpath('//*[@id="notes"]/div/ul/li/div')
            .should('have.class', 'note');
    })



})