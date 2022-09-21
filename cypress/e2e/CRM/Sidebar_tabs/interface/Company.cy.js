const dayjs = require("dayjs");
const { should } = require("chai");

describe('Company', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');      //переходим на вкладку Компания
        cy.get('.sidebar-toggle-state').click();
        cy.get('.icon-crm-company.span-align').click();
    })


    it('Company', () => {
        cy.visit('http://10.0.77.50');      //переходим на вкладку Компания
        cy.get('.sidebar-toggle-state').click();
        cy.get('.icon-crm-company.span-align').click();
        cy.url().should('include', '/company/list/')
    })

    it('checking the search box inside the tab', () => {       //проверка поиска вутри вкладки компания
        //Переход на вкладку компания.
        cy.get('[class ="icon-crm icon-crm-company span-align"]').click()
        // выбираем первое поле поиска по компаниям, а не субъекта
        cy.get('input[id="search"]')
            .type('QA Kolom')
            .should('have.value', 'QA Kolom');
        cy.get("button[class='btn btn-default search']").first()
            .click();
        cy.wait(2000)
        // Переписано с полного пути '/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[2]'
        cy.xpath('//table/tbody/tr/td[2]')
            .should('have.contain', 'QA Kolomiets')
    })



    it('tag selection', () => {        //тег опредеденный
        // Зачем этот тест?
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click()
        cy.xpath('//*[@id="tag-button"]')
            .click({ force: true })
            .clear()
            .should('be.empty')
            .type('affiliated')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'affiliated');
    })



    it('data change all', () => {                                               //оба поля даты заполнены
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/a')
            .click().wait(2000);
        cy.xpath('//*[@id="date_from"]').click({ force: true })
            .type('25.03.2022', { force: true })
        cy.xpath('//*[@id="date_to"]').click({ force: true })
            .type('19.05.2022', { force: true })
        cy.xpath('/html/body/div[11]/div[2]/div/div/a[1]').click({ force: true })
            .wait(4000)
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[5]')
            .should('have.contain', '28.04.2022')
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[6]')
            .should('have.contain', '25.04.2022')
    })


    it('data change from', () => {                                               //Только первое поле даты заполнено
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/a')
            .click().wait(2000);
        cy.xpath('//*[@id="date_from"]').click({ force: true })
            .type('25.06.2021', { force: true })
        cy.xpath('//*[@id="date_to"]').click({ force: true })
            .should('be.empty');
        cy.xpath('/html/body/div[11]/div[2]/div/div/a[1]').click({ force: true })
            .wait(4000);
            cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[2]/div/div/table/thead/tr/th[5]')
            .click().click()
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[5]')
            .should('have.contain', '19.04.2022')
    })


    it('data change to', () => {                                               //только второе поле даты заполнено
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/a')
            .click().wait(2000);
        cy.xpath('//*[@id="date_to"]').click({ force: true })
            .type('19.05.2022', { force: true })
        cy.xpath('//*[@id="date_from"]').click({ force: true })
            .should('be.empty');
        cy.xpath('/html/body/div[11]/div[2]/div/div/a[1]').click({ force: true })
            .wait(5000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[6]')
            .should('have.contain', '19.04.2022')
    })



    it('data change cancel', () => {                                               //оба поля даты заполнены
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/a')
            .click().wait(2000);
        cy.xpath('//*[@id="date_from"]').click({ force: true })
            .type('19.04.2022', { force: true })
        cy.xpath('//*[@id="date_to"]').click({ force: true })
            .type('25.06.2021', { force: true })
        cy.xpath('//*[@id="perpop"]/div/a[2]').click({ force: true })
            .wait(4000)
    })



    it('all tags selection', () => {    //все теги
        // Понять зачем такой тест?
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/button')
            .click();
    })

    it('country selection', () => {     //страна определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="country-button"]')
            .click({ force: true })
            .clear()
            .should('be.empty')
            .type('Ukr')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
        cy.wait(2500)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button/span')
            .should('have.contain', 'Ukraine');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]')
            .should('have.contain', 'Ukraine')
    })


    it('all countrys selection', () => {        //все страны
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/button')
            .click();
    })

    it('group selection', () => {        //группа определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/button')
            .click();
        cy.xpath('//*[@id="group-button"]')
            .click({ force: true })
            .clear().should('be.empty')
            .type('Admins')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Admins');
    })

    it('all groups selection', () => {      //все группы
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/button')
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/div/button')
            .click();
    })


    it('manager selection', () => {       //Менеджер определенный
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/button')
            .click()
            .wait(3000);
        cy.xpath('//*[@id="manager-button"]')
            .click({ force: true })
            .clear().should('be.empty')
            .type('Виталий')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[4]/button/span')
            .should('have.contain', 'Виталий Коломиец');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'Виталий Коломиец');
    })


    it('all managers selection', () => {        //все менеджеры
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/div/div/a[1]')
            .click();
    })

    it('select only my entries', () => {        //только мои
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/div/div/a[2]')
            .click();
    })


    it('Create server button', () => {        //Кнопка "создать сервер"
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/button[2]')
            .click();
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[2]/a')
            .click();
    })

    it('Cancel adding a company', () => {       //ОТмена добавления компании
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click();
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input')
            .type('autotest')
            .should('have.value', 'autotest');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[2]/div/input')
            .type('Харьков')
            .should('have.value', 'Харьков');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[3]/div/input')
            .type('11111111');                        //пока не понимаю, как сделать добавляющийся номер
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[4]/div/input')
            .type('www.www.com')
            .should('have.value', 'www.www.com');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[5]/div/input[1]')
            .click({ force: true })
            .type('Ukraine')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Ukraine');
        cy.xpath('//*[@id="form"]/a')
            .click();
    })


    it('adding a company', () => {       //Добавление комании
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click();
        let currentTime = dayjs().format('DDMMYYhhmmss');
        cy.log(currentTime)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input')
            .type('autotest')
            .should('have.value', 'autotest');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[2]/div/input')
            .type('Ростов')
            .should('have.value', 'Ростов');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[3]/div/input').type(currentTime);                        //пока не понимаю, как сделать добавляющийся номер
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[4]/div/input')
            .type('www.www.com')
            .should('have.value', 'www.www.com');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[5]/div/input[1]')
            .click({ force: true })
            .type('russ')
            .wait(2000)
            .type('{downarrow}{downarrow}')
            .type('{enter}')
            .should('have.value', 'Russian Federation');
        cy.xpath('//*[@id="form"]/button').click();
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input').should('not.exist');
    })
})