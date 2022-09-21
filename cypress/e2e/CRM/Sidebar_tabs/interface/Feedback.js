import { sidebar_menu } from "../../../../support/pages/sidebar_menu";
import { header_menu } from "../../../../support/pages/header_menu";

describe ('Feedback menu', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        sidebar_menu.sidebarMenuFeedback()
})

    it('Search by server name. Positive test', () => {
        header_menu.searchInputAndButton('da111')
        cy.xpath('//table//tr/td[2]/a').should('have.attr', 'href', '/server/view/DA111').should('contain', 'DA111')
        // cy.get('[id="table"]').should('not.be.visible')
    })

    it('Search by server name. Negative test', () => {
        header_menu.searchInputAndButton('da007')
        cy.wait(3000)
        cy.xpath('//table//tr/td[2]/a').should('not.exist')
    })

    it('Sorting by ID for da111 server', () => {
        header_menu.searchInputAndButton('da111')
        cy.get('[data-alias="Feedback id"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[3]/td[1]').should('contain', '3')
        cy.xpath('//table//tr[3]/td[3]').should('contain', 'eehh')
        cy.xpath('//table//tr[2]/td[5]').should('contain', 'Linux')
        cy.xpath('//table//tr[3]/td[6]').should('contain', 'ES')
        cy.xpath('//table//tr[3]/td[7]').should('contain', '5.3.7')

    })

    it('Sorting by Feedback for da111 server', () => {
        header_menu.searchInputAndButton('da111')
        cy.get('[data-alias="Body"]').click()
        cy.wait(1500)
        cy.get('[data-alias="Body"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[5]/td[3]').should('contain', 'bad')
        //Поскольку звездочки это иконки в списке, то мы просто ищем 2-й элемент в списке.
        cy.xpath('//table//tr[5]/td[4]/i[2]').should('not.exist')
        cy.xpath('//table//tr[5]/td[7]').should('contain', '7.3.4')
    })

    it('Sorting by Estimation for da111 server', () => {
        header_menu.searchInputAndButton('da111')
        cy.wait(1500)
        cy.get('[data-alias="Estimation"]').click()
        cy.wait(1500)
        cy.get('[data-alias="Estimation"]').click()
        cy.xpath('//table//tr[1]/td[3]').should('contain', 'good')
        //Поскольку звездочки это иконки в списке, то мы просто ищем 5-й элемент в списке.
        cy.xpath('//table//tr[1]/td[4]/i[5]').should('exist')
    })

    it('Sorting by OS for da111 server', () => {
        header_menu.searchInputAndButton('da111')
        cy.wait(1500)
        cy.get('[data-alias="Os name"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[3]').should('contain', 'not bad')
        cy.xpath('//table//tr[1]/td[4]/i[5]').should('not.exist')
        cy.xpath('//table//tr[2]/td[5]').should('contain', 'MacOS')
        cy.xpath('//table//tr[1]/td[6]').should('contain', 'EN')
        cy.xpath('//table//tr[5]/td[7]').should('contain', '7.3.7')
    })

    it('Sorting by App locale for da111 server', () => {
        header_menu.searchInputAndButton('da111')
        cy.wait(1500)
        cy.get('[data-alias="App locale"]').click()
        cy.wait(1500)
        cy.get('[data-alias="App locale"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[6]').should('contain', 'RU')
        cy.xpath('//table//tr[2]/td[6]').should('contain', 'RU')
        cy.xpath('//table//tr[3]/td[6]').should('contain', 'RU')
        cy.xpath('//table//tr[4]/td[6]').should('contain', 'ES')
        cy.xpath('//table//tr[5]/td[6]').should('contain', 'EN')
        cy.xpath('//table//tr[2]/td[5]').should('contain', 'Windows')
        cy.xpath('//table//tr[4]/td[5]').should('contain', 'MacOS')
        cy.xpath('//table//tr[1]/td[7]').should('contain', '7.7.7')
        cy.xpath('//table//tr[2]/td[4]/i[3]').should('not.exist')
    })

    it('Sorting by App version for da111 server', () => {
        header_menu.searchInputAndButton('da111')
        cy.wait(1500)
        cy.get('[data-alias="App version"]').click()
        cy.wait(1500)
        cy.get('[data-alias="App version"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[7]').should('contain', '7.7.7')
        cy.xpath('//table//tr[2]/td[7]').should('contain', '7.3.7')
        cy.xpath('//table//tr[3]/td[7]').should('contain', '7.3.4')
        cy.xpath('//table//tr[4]/td[7]').should('contain', '5.4.7')
        cy.xpath('//table//tr[5]/td[7]').should('contain', '5.3.7')
        cy.xpath('//table//tr[4]/td[5]').should('contain', 'Linux')
        cy.xpath('//table//tr[3]/td[3]').should('contain', 'bad')
        cy.xpath('//table//tr[2]/td[1]').should('contain', '4')

    })

    it('Sorting by Star filter for da111 server', () => {
        header_menu.searchInputAndButton('da111')
        cy.wait(1500)
        cy.get('[data-alias="Feedback id"]').click()
        cy.wait(1500)
        cy.get('[class="button-group-item setvalue estimation-1"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[4]/i[1]').should('exist')
        cy.xpath('//table//tr[1]/td[4]/i[2]').should('not.exist')

        cy.get('[class="button-group-item setvalue estimation-2"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[4]/i[2]').should('exist')
        cy.xpath('//table//tr[1]/td[4]/i[3]').should('not.exist')

        cy.get('[class="button-group-item setvalue estimation-3"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[4]/i[3]').should('exist')
        cy.xpath('//table//tr[1]/td[4]/i[4]').should('not.exist')

        cy.get('[class="button-group-item setvalue estimation-4"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[4]/i[4]').should('exist')
        cy.xpath('//table//tr[1]/td[4]/i[5]').should('not.exist')

        cy.get('[class*="button-group-item setvalue estimation-4"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[4]/i[4]').should('not.exist')
        cy.xpath('//table//tr[1]/td[4]/i[5]').should('not.exist')
        cy.xpath('//table//tr[1]/td[4]/i[3]').should('exist')

        cy.get('[class="button-group-item setvalue estimation-5"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[4]/i[5]').should('exist')
        cy.xpath('//table//tr[1]/td[4]/i[6]').should('not.exist')

        cy.get('[data-alias="Feedback id"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[4]/i[2]').should('not.exist')
        cy.xpath('//table//tr[4]/td[4]/i[5]').should('exist')
    })

    it('Date filter exist data', () => {
        //Позитивная фильтрация по датам
        header_menu.searchInputAndButton('da111')
        // Выбираем дату начала выборки
        cy.get('[class="btn btn-default btn-sm button-group-item subject-select-toggle"]').contains('Дата создания').click();
        cy.get('[data-input="date_from"]').click();
        // Нажимаем на текущий месяц, чтобы перейти к выбору по месяцам
        cy.get('[class="datepicker--nav-title"]').first().click();
        // Выбираем 7-ой месяц - июль. Для селектора data-month подсчет начинается с нуля.
        cy.get('[class="datepicker--cell datepicker--cell-month"][data-month="6"]').click();
        // Выбираем дату
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="20"][@data-month="6"][@data-year="2022"])').click()
        cy.wait(1500)

        // Повторяем для даты по
        cy.get('[data-input="date_to"]').click({force: true});
        // cy.wait(1500)
        // Нажимаем на текущий месяц. Здесь пришлось переделать по относительному пути
        cy.xpath('//*[@id="datepickers-container"]/div[2]/nav/div[2]').click()
        cy.wait(1500)
        cy.get('[class*="datepicker--cell datepicker--cell-month"][data-month="6"]').last().click();
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="21"][@data-month="6"][@data-year="2022"])').last().click({force: true})
        // cy.wait(3000)
        cy.get('a[class="btn btn-sm"]').contains('Apply').click()
        cy.wait(2500)
        cy.xpath('//table//tr[5]/td[8]').should('contain', '20.07.2022 14:22')
    })
    it('Data filter non exist data', () => {
        //Позитивная фильтрация по датам
        header_menu.searchInputAndButton('da111')
        // Выбираем дату начала выборки
        cy.get('[class="btn btn-default btn-sm button-group-item subject-select-toggle"]').contains('Дата создания').click();
        cy.get('[data-input="date_from"]').click();
        // Нажимаем на текущий месяц, чтобы перейти к выбору по месяцам
        cy.get('[class="datepicker--nav-title"]').first().click();
        // Выбираем 7-ой месяц - июль. Для селектора data-month подсчет начинается с нуля.
        cy.get('[class="datepicker--cell datepicker--cell-month"][data-month="6"]').click();
        // Выбираем дату
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="21"][@data-month="6"][@data-year="2022"])').click()
        cy.wait(1500)

        // Повторяем для даты по
        cy.get('[data-input="date_to"]').click({force: true});
        // cy.wait(1500)
        // Нажимаем на текущий месяц. Здесь пришлось переделать по относительному пути
        cy.xpath('//*[@id="datepickers-container"]/div[2]/nav/div[2]').click()
        cy.wait(1500)
        cy.get('[class*="datepicker--cell datepicker--cell-month"][data-month="6"]').last().click();
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="27"][@data-month="6"][@data-year="2022"])').last().click({force: true})
        // cy.wait(3000)
        cy.get('a[class="btn btn-sm"]').contains('Apply').click()
        cy.wait(3000)
        cy.xpath('//table//tr[1]/td[8]').should('not.exist')
    })


});