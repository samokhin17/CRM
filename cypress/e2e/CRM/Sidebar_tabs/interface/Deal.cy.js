import { header_menu } from "../../../../support/pages/header_menu";

describe('Deal', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-deal.span-align').click();
    })



    it('Deal', () => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-deal.span-align').click();
    })


    it('checking the search box inside the tab', () => {        //поле поиска(стандартную сделаку, любую)
        cy.xpath('//*[@id="search"]')
            .click()
            .type('111');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
            .click();
    })


    it('Checking currency filters', () => {     //проверка фильтров валюты
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item eur active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item usd active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[1]')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item rub active');
    })


    it('Checking status filters', () => {     //проверка фильтиров статуса

        cy.xpath('//*[@id="statuses"]/a[2]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[2]')
            .should('have.class', 'button-group-item setstatus raw active');

        cy.xpath('//*[@id="statuses"]/a[3]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item setstatus new active');

        cy.xpath('//*[@id="statuses"]/a[4]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[4]')
            .should('have.class', 'button-group-item setstatus pilot active');

        cy.xpath('//*[@id="statuses"]/a[5]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item setstatus agreement active');

        cy.xpath('//*[@id="statuses"]/a[6]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item setstatus payment active');


        cy.xpath('//*[@id="statuses"]/a[7]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[7]')
            .should('have.class', 'button-group-item setstatus purchased active');

        cy.xpath('//*[@id="statuses"]/a[2]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[2]')
            .should('have.class', 'button-group-item setstatus raw');

        cy.xpath('//*[@id="statuses"]/a[3]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item setstatus new');

        cy.xpath('//*[@id="statuses"]/a[4]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[4]')
            .should('have.class', 'button-group-item setstatus pilot');

        cy.xpath('//*[@id="statuses"]/a[5]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item setstatus agreement');

        cy.xpath('//*[@id="statuses"]/a[6]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item setstatus payment');

        cy.xpath('//*[@id="statuses"]/a[7]')
            .click();
        cy.xpath('//*[@id="statuses"]/a[7]')
            .should('have.class', 'button-group-item setstatus purchased');
    })


    it('all groups selection', () => {      //проверка групп
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/button')
            .click({ force: true });
    })


    it('group selection', () => {        //группа определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('//*[@id="group-button"]')
            .click({ force: true })
            .clear()
            .type('Admins')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Admins');
    })


    it('all managers selection', () => {     //выбор менеджеров
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
        //     .click();
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
        //     .click({ force: true });
    })

    it('only me', () => {
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[2]')
        //     .click({ force: true });
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
        //     .click();
    })

    it('lists manager selection', () => {                           //проверка списка при выборе менеджера
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломи', 'Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
        //     .click();
        // cy.xpath('//*[@id="manager-button"]')
        //     .clear()
        //     .type('Максим').wait(4000)
        //     .type('{downarrow}')
        //     .type('{enter}')
        //     .should('have.value', 'Максим Кузубов');
        // cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[5]')
        //     .should('have.contain', 'Максим Кузубов')
    })


    it('both fields are filled', () => {
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломи', 'Виталий Коломиец')
        cy.xpath('//*[@id="summpopover"]')
            .click();
        cy.xpath('//*[@id="sum_from"]')
            .click({ force: true })
            .type('7778')
            .should('have.value', '7778')
        cy.xpath('//*[@id="sum_to"]')
            .click({ force: true })
            .type('10000')
            .should('have.value', '10000')
        cy.xpath('//*[@id="setSum"]')
            .click().wait(2000);
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]')
            .should('not.have.contain', '7776')
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]')
            .should('have.contain', '7778')
    })


    it('Checking currency filters_lists.rub', () => {
        // cy.xpath('//div[1]/div/div/div[2]/div[1]/div[1]/div[2]/button')
        cy.get('[data-status="rub"]')
            .click();
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(2000);
        // cy.xpath('//div[1]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            // .click({ force: true });                          //проверка соответствия списка фильтру
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .click();
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .should('have.class', 'button-group-item rub active');
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]/i')
            .should('have.class', 'glyphicon-rub');
    })

    it('Checking currency filters_lists.usd', () => {
        cy.get('[data-status="usd"]')
            .click();
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        //проверка соответствия списка фильтру
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item usd active');
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]/i')
            .should('have.class', 'glyphicon-usd');
    })


    it('Checking currency filters_lists.eur', () => {
        cy.get('[data-status="eur"]')
            .click();
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        //проверка соответствия списка фильтру
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click()
            .wait(2000)
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item eur active').wait(1000);
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[3]/i')
            .should('have.class', 'glyphicon-eur');
    })




    it('Checking list raw', () => {     //проверка фильтиров статуса
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        cy.get('[data-status="RAW"]')
            .click().wait(2000)
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'RAW');
    })


    it('Checking list new', () => {     //проверка фильтиров статуса
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        cy.get('[data-status="RAW"]').should('have.class', 'button-group-item setstatus raw');
        cy.get('[data-status="NEW"]').click();
        cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item setstatus new active');
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'NEW');
    })

    it('Checking lisT PILOT', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item setstatus new');
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        cy.get('[data-status="PILOT"]').click();
        cy.xpath('//*[@id="statuses"]/a[4]').should('have.class', 'button-group-item setstatus pilot active');
        cy.xpath('//div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[4]')
            .should('have.contain', 'PILOT');
        cy.xpath('//table[1]/tbody/tr/td[4]')
            .should('not.have.contain', 'NEW');
    })

    it('Checking list AGREEMENT', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[4]')
            .should('have.class', 'button-group-item setstatus pilot');
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        cy.get('[data-status="AGREEMENT"]').click();
        cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item setstatus agreement active');
        cy.xpath('//table[1]/tbody/tr/td[4]')
            .should('have.contain', 'AGREEMENT');
    })

    it('Checking list PAYMENT', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item setstatus agreement');
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        cy.get('[data-status="PAYMENT"]').click();
        cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item setstatus payment active');
        cy.xpath('//table[1]/tbody/tr/td[4]')
            .should('have.contain', 'PAYMENT');
    })

    it('Checking list PURCHASED', () => {     //проверка фильтиров статуса
        cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item setstatus payment');
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(3000);
        cy.get('[data-status="PURCHASED"]').click();
        cy.xpath('//*[@id="statuses"]/a[7]')
            .should('have.class', 'button-group-item setstatus purchased active');
        cy.xpath('//table[1]/tbody/tr/td[4]')
            .should('have.contain', 'PURCHASED');
        cy.xpath('//table[1]/tbody/tr/td[4]')
            .should('not.have.contain', 'PAYMENT');

    })

    it('Cancel adding a deal', () => { //Отменить добавление сделки
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click()
            .wait(5000);
        cy.xpath('//form/div[1]/div[1]/div/input').first()
            .type('autotest')
            .should('have.value', 'autotest');
        cy.xpath('//form/div[1]/div[3]/div/input[1]').first()
            .click()
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.xpath('//div[2]/div/div/div/div[2]/form/div[1]/div[5]/div/input')
            .type('10000')
            .should('have.value', '10000');
        cy.xpath('//div[2]/div/div/div/div[2]/form/div[1]/div[7]/div/textarea')
            .type('ffffffffffffffffffffffffffffff')
            .should('have.value', 'ffffffffffffffffffffffffffffff');
        cy.get('[id="modal"]').should('be.visible')
        cy.xpath('//*[@id="form"]/div[2]/a')
            .click();
        cy.get('[id="modal"]').should('not.be.visible')
    })

    it('adding a deal', () => {      //Добавить сделку
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click()
            .wait(5000);
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
            .click({ force: true })
            .type('autotest')
            .should('have.value', 'autotest');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[3]/div/input[1]')
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[5]/div/input')
            .type('10000')
            .should('have.value', '10000');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[7]/div/textarea')
            .type('ffffffffffffffffffffffffffffff')
            .should('have.value', 'ffffffffffffffffffffffffffffff');
        cy.xpath('//*[@id="form"]/div[2]/button')
            .click();
        cy.get('[id="modal"]').should('not.be.visible')
    })


    //проверка фильтра даты
    it('check data', () => {
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
        .click();
        cy.xpath('/html/body/div[11]/div[2]/div/input[1]')
        .click({ force:true })
        .type('29.06.2022', { force: true });
        cy.xpath('//*[@id="date_to"]')
        .click({ force:true })
        .type('29.06.2022', { force: true });
        cy.xpath('//*[@id="perpop"]/div/a[1]')
        .click({ force:true }).wait(3000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[6]')
        .should('have.contain', '29.06.2022')
    })


    it('check data cancel', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
        .click();
        cy.xpath('/html/body/div[11]/div[2]/div/input[1]')
        .click({ force:true })
        .type('10.08.2021', { force: true });
        cy.xpath('//*[@id="date_to"]')
        .click({ force:true })
        .type('10.08.2021', { force: true });
        cy.xpath('//*[@id="perpop"]/div/a[2]')
        .click({ force:true }).wait(2000);
        cy.get('[id="period"]').should('have.contain', 'Select period')
})
})