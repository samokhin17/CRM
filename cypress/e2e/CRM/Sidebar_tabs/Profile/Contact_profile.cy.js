describe('Contact_profile', () => {
    it('create_a_new_contact', () => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[3]/a/p/i').click().wait(3000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a').click({force:true}).wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[2]/button').click({force:true}).wait(2000);
        cy.xpath('//*[@id="form"]/div/div[1]/div').click().type('Samokhin_Test_Contact');
        cy.xpath('//*[@id="email"]').click().type('111@111.ru')
        cy.xpath('//*[@id="form"]/button').click({force:true}).wait(2000);
    })
})


describe('Contact_profile', () => {

    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-contact.span-align').click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button').click({force: true}).wait(1000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]').click({force: true}).wait(1000);
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a').click().wait(3000)
    })
    //Перешел в первый профиль контакта на странице


    //нашел и изменил имя контакта
    it('find/change contact name', () => {
        let contact_name = String('asdf' + Math.random())
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[1]/td[2]/div')
            .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[1]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[1]/td[2]/div/input')
            .clear({ force: true })
            .type(contact_name);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .type('12345');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click()
            .wait(3000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[1]/td[2]/div')
            .should('have.contain', contact_name);
    })



    //нашел и изменил компанию контакта
    it('find/change contact company', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[2]/td[2]/div')
            .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[2]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[2]/td[2]/div/input[1]')
            .click({ force: true })
            .clear({ force: true })
            .type('САМОХИН АВТОТЕСТ123')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'САМОХИН АВТОТЕСТ123');
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
        //     .type('12345');
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
        //     .click()
        //     .wait(3000);
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[1]/tr[2]/td[2]/div')
        //     .should('have.contain', 'САМОХИН АВТОТЕСТ123');
    })


    //добавил и удалил телефон контакта
    it('find/change/delete contact number', () => {
        function getRandPhoneNumber(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let phone_number = String(getRandPhoneNumber(79000000000, 79999999999))
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[1]/td[2]/div/div')
            .should('have.class', 'contact-communication-content')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[1]/td[2]')
            .should('not.have.class', 'contact-communication-inline');
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[2]/button')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="phone"]')
            .type(phone_number);
        cy.xpath('//*[@id="contactModal"]/div/div/div[2]/form/div[2]/button')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[1]/td[2]/div/div/div/a')
            .should('have.contain', '+7')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[1]/td[2]/div/div/div/i')
            .click({ force: true })
            .wait(2000);
    })



    //Добавил и удалил почту контакта
    it('find/change/delete contact email', () => {
        function getRandPhoneNumber(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let rand_num = String(getRandPhoneNumber(1111, 9999))

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[2]/td[2]/div/div')
            .should('have.class', 'contact-communication-content')
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[1]/button')
            .click()
        cy.xpath('//*[@id="contactModal"]/div/div/div[2]/form/div[1]/div/div[1]')
            .click()
            .type(rand_num + '@' + rand_num + '.ru')
        cy.xpath('//*[@id="contactModal"]/div/div/div[2]/form/div[2]/button')
            .click({multiple:true})
            .wait(3000)
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[2]/td[2]/div/div/div[1]/i')
            .click({ force: true })
            .wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[2]/td[2]')
            .should('not.have.class', 'contact-communication-inline');
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[1]/button')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="email"]')
            .type('samokhin' + rand_num + '@trueconf.ru');
        cy.xpath('//*[@id="contactModal"]/div/div/div[2]/form/div[2]/button')
            .click()
            .wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[2]/td[2]/div/div/div/a')
            .should('have.contain', 'samokhin' + rand_num + '@trueconf.ru')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[2]/td[2]/div/div/div[1]/i')
        .click({ force: true })
        .wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[2]/tr[2]/td[2]/div/div/div/a')
        .should('have.contain', '@')
    })


    //нашел и изменил язык контакта

    it('find/change contact language', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[1]/td[2]/div')
            .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[1]/td[2]/div/i')
            .click({ force: true }).wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[1]/td[2]/div/select')
            .select('Русский');
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
        //     .type('12345');
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
        //     .click()
        //     .wait(3000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[1]/td[2]/div')
            .should('have.contain', 'Русский');
    })



    //нашел и изменил и удалил титул контакта

    it('find/change contact title', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[2]/td[2]/div')
            .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[2]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="title"]')
            .clear({ force: true })
            .type('ЦАРЬ');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .type('12345');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click()
            .wait(3000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[2]/td[2]/div')
            .should('have.contain', 'ЦАРЬ');
    })



    it('find contact tag', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[3]/td[2]/span')
            .should('have.class', 'react-item company-tag')
    })



    it('find contact date', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody[3]/tr[4]/td[2]/span')
            .should('have.class', 'react-item')
    })



    it('check tab', () => {                      //проверил табы
        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[2]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[1]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[3]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[2]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[4]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[3]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[5]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[4]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[4]/div/ul/li[5]')
            .should('have.class', '');
    })


})
