import {header_menu, header_menu_user} from "../../../../support/pages/header_menu";

describe('TCS', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/a/p/i').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[1]/a').click({ force: true });
    })

    it('TCS', () => {
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/a/p/i')
            .click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[1]/a')
            .click();
    })

    it('checking the search box inside the tab for ID', () => {        //поле поиска
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.xpath('//*[@id="search"]')
            .click()
            .type('UA')
            .should('have.value', 'UA')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span/button')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'UA');
    })


    it('checking the search box inside the tab for name', () => {        //поле поиска
        cy.xpath('//*[@id="search"]')
            .click()
            .type('trueconf')
            .should('have.value', 'trueconf')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form[1]/span/button')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click({ force: true })
            .wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[3]')
            .should('have.contain', 'trueconf');
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
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click({ force: true })
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[5]')
            .should('have.contain', '1111')
    })


    it('status server.online', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')            //статус онлайн
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item status-online active')
                                                       //потому что нет серверов на бете
    })


    it('status server.online', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')            //статус офлайн
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item status-offline active')
            .wait(2000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[6]')
            .should('have.contain', 'offline')
    })


    it('all managers selection', () => {        //все менеджеры
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
    })

    it('select only my entries', () => {        //только мои
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
    })



    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName("Коломи", 'Виталий Коломиец')
    })



    it('country selection', () => {     //страна определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="country-button"]')
            .click({ force: true })
            .clear().should('be.empty')
            .type('Ukr')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}').should('have.value', 'Ukraine');
    })


    it('all countrys selection', () => {        //все страны
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/button').click();
    })



    it('Checking filters', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')                 //онлайн вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item status-online active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item status-offline');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[3]')                 //офлайн вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[3]')
            .should('have.class', 'button-group-item status-offline active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .should('have.class', 'button-group-item status-online');



        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/a[1]')                 //платный вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/a[1]')
            .should('have.class', 'button-group-item status-paid active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/a[2]')
            .should('have.class', 'button-group-item status-free');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/a[2]')                 //бесплатный вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/a[2]')
            .should('have.class', 'button-group-item status-free active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/a[1]')
            .should('have.class', 'button-group-item status-paid');
    })


    it('status paid', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/a[1]')
            .click()
            .should('have.class', 'button-group-item status-paid active')
            .wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click().wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]/i[1]')
            .should('have.class', 'glyphicon glyphicon-credit-card false-icon-color')
    })


    it('status free', () => {
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[2]/a[2]')
            .click()
            .should('have.class', 'button-group-item status-free active')
            .wait(2000);
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click();
        cy.xpath('//div[1]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click().wait(2000);
        cy.get('#table > :nth-child(1) > .icon-table-width > .glyphicon').should('not.exist')
        // cy.xpath('//div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]/i[1]')
        //     .should('not.have.class', 'glyphicon glyphicon-credit-card false-icon-color')
    })



    it('data check', () => {
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .click();
        cy.xpath('//*[@id="date_from"]')
            .type('07.07.2022', { force: true })
        cy.xpath('//*[@id="date_to"]')
            .type('08.07.2022', { force: true })
        cy.xpath('//*[@id="perpop"]/div/a[1]')
            .click({ force: true });
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]').first()
            .should('have.contain', '08.07.2022')
    })


    it('data check cancel', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
            .click();
        cy.xpath('//*[@id="date_from"]')
            .type('13.08.2021', { force: true })
        cy.xpath('//*[@id="date_to"]')
            .type('13.08.2021', { force: true })
        cy.xpath('//*[@id="perpop"]/div/a[2]')
            .click({ force: true }).wait(2000);

    })

    it('creating server', () => {       //создаем сервер
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[2]').click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
            .click()
            .type('UA')
            .should('have.value', 'UA');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[3]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div[2]/button')
            .click();
    })


    it('cancel creating server', () => {       //отменяем создание сервера
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[2]')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
            .click()
            .type('UA')
            .should('have.value', 'UA');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[3]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div[2]/a').click();
    })

})



describe('MCU', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[2]/a')
            .click({ force: true });
    })

    it('MCU', () => {
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[2]/a')
            .click({ force: true });
    })


    it('checking the search box inside the tab', () => {        //поле поиска
        cy.xpath('//*[@id="search"]').click()
            .type('MCU')
            .should('have.value', 'MCU');
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form/span/button').click();
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr/td[1]')
            .should('have.contain', 'MCU')

    })
    
    

    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
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
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
    })


    it('country selection', () => {     //страна определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="country-button"]')
            .click({ force: true })
            .clear().should('be.empty')
            .type('Ukr')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}').should('have.value', 'Ukraine');
    })


    it('all countrys selection', () => {        //все страны
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/button')
            .click();
    })


    it('creating server', () => {       //создаем сервер
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kolomiets AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kolomiets AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/button')
            .click();
    })


    it('cancel creating server', () => {       //отменяем создание сервера
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/a')
            .click();
    })
})


describe('Weathervane', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-servers.span-align')
            .click();      //Перешли в продукты
        cy.get('.open > .sidebar-dropmenu > :nth-child(4) > a').click()
    })


    it('Weathervane', () => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        cy.get('.open > .sidebar-dropmenu > :nth-child(4) > a').click()
    })


    it('checking the search box inside the tab', () => {        //поле поиска
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.xpath('//*[@id="search"]')
            .click()
            .type('WV')
            .should('have.value', 'WV');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
            .click().wait(2000);
            cy.xpath('//table/tbody/tr/td[1]')
            .should('have.contain', 'WV');
    })



    it('data check', () => {
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(2000)
        cy.contains('Дата создания').click()
        cy.get('[class$=" select-date-from"]').click()
        cy.get('[class="datepicker--cell datepicker--cell-day"][data-date="7"][data-month="6"][data-year="2022"]').first().click({force: true})
        cy.get('[class$="select-date-to"]').click()
        cy.get('[class="datepicker--cell datepicker--cell-day"][data-date="8"][data-month="6"][data-year="2022"]').last().click({force: true})
        cy.get('[class="btn btn-sm"]').contains('Apply').click({force: true})
        cy.wait(3500)
        cy.xpath('//table/tbody/tr/td[5]').first()
            .should('have.contain', '08.07.2022 23:24')
        cy.xpath('//table/tbody/tr/td[5]').last()
            .should('have.contain', '07.07.2022 00:09')
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


    it('country selection', () => {     //страна определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="country-button"]')
            .click({ force: true })
            .clear().should('be.empty')
            .type('Ukr')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}').should('have.value', 'Ukraine');
    })


    it('all countrys selection', () => {        //все страны
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/button')
            .click();
    })


    it('creating server', () => {       //создаем сервер
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/button')
            .click();
    })


    it('cancel creating server', () => {       //отменяем создание сервера
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        // cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
        cy.get('[id="company_name"]').first()
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/a')
            .click();
        cy.get('[id="company_name"]').should('not.be.visible')
    })
})



describe('Room', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        // cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[4]/a')
        //     .click({ force: true });
        cy.get('.open > .sidebar-dropmenu > :nth-child(5) > a').click()
    })


    // it('Room', () => {
    //     cy.visit('http://10.0.77.50');
    //     cy.get('.icon-crm-servers.span-align')
    //         .click();      //Перешли в продукты
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[4]/a')
    //         .click({ force: true });
    // })


    it('checking the search box inside the tab', () => {        //поле поиска
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.xpath('//*[@id="search"]')
            .click()
            .type('RM1M5')
            .should('have.value', 'RM1M5');
        cy.get('[class="btn btn-default search"]').first()
            .click();
        cy.wait(2500);
        cy.xpath('//table/tbody/tr/td[5]').first()
            .should('have.contain', '16.07.2022 00:03')
    })


    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломи', 'Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
        //     .click();
        // cy.xpath('//*[@id="user-button"]')
        //     .click({ force: true })
        //     .clear().should('be.empty')
        //     .type('Максим Кузубов')
        //     .wait(2000)
        //     .type('{downarrow}')
        //     .type('{enter}')
        //     .should('have.value', 'Максим Кузубов');
    })


    it('all managers selection', () => {        //все менеджеры
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
    })

    it('select only my entries', () => {        //только мои
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
    })


    it('country selection', () => {     //страна определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="country-button"]')
            .click({ force: true })
            .clear().should('be.empty')
            .type('Ukra' )
            .wait(2500)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Ukraine');
    })


    it('all countrys selection', () => {        //все страны
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/button')
            .click();
    })


    it('creating server', () => {       //создаем сервер
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/button')
            .click();
    })


    it('cancel creating server', () => {       //отменяем создание сервера
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/a')
            .click();
    })
})