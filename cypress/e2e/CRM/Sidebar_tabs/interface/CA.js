import { sidebar_menu } from "../../../../support/pages/sidebar_menu";
import {header_menu} from "../../../../support/pages/header_menu";

describe('CA tess', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        // sidebar_menu.sidebarMenuFeedback()
})

    it('Sorting by ID', () => {
        sidebar_menu.sidebarMenuCA()
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')

        cy.get('[data-alias="Certificate id"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[1]').should('contain', '1')
        cy.xpath('//table//tr[1]/td[8]').should('contain', '22.07.2022 16:54')
        cy.xpath('//table//tr[9]/td[1]').should('contain', '9')
        cy.xpath('//table//tr[17]/td[1]').should('contain', '17')

    })

    it('Sorting by Issuer', () => {
        sidebar_menu.sidebarMenuCA()
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')

        cy.get('[data-alias="Issuer name"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[1]').should('contain', '21')
        cy.xpath('//table//tr[1]/td[8]').should('contain', '01.08.2022 13:48')
        cy.xpath('//table//tr[1]/td[5]').should('contain', '31.07.2022 00:00')

    })

    it('Filter by date and Sorting', () => {
        sidebar_menu.sidebarMenuCA()
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')

        //    ---//---
        // Делаем выборку по ДАТЕ СОЗДАНИЯ
        cy.get('[class="btn btn-default btn-sm button-group-item subject-select-toggle"]').contains('Дата создания').click();
        cy.get('[data-input="date_from"]').first().click();
        // Нажимаем на текущий месяц, чтобы перейти к выбору по месяцам
        cy.get('[class="datepicker--nav-title"]').first().click();
        // Выбираем 7-ой месяц - июль. Для селектора data-month подсчет начинается с нуля.
        cy.get('[class^="datepicker--cell datepicker--cell-month"][data-month="6"]').click();
        // Выбираем дату
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="28"][@data-month="6"][@data-year="2022"])').click({force: true})
        cy.wait(1500)

        // Повторяем для даты по
        cy.get('[data-input="date_to"]').first().click({force: true});
        // Нажимаем на текущий месяц. Здесь пришлось переделать по относительному пути
        cy.xpath('//*[@id="datepickers-container"]/div[2]/nav/div[2]').click()
        cy.wait(1500)
        // cy.get('[class*="datepicker--cell datepicker--cell-month"][data-month="6"]').click();
        cy.xpath('//*[@id="datepickers-container"]/div[2]/div[1]/div[2]/div/div[@data-month="6"]').last().click();
        cy.wait(1500)
        // cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="28"][@data-month="6"][@data-year="2022"]').click({force: true})
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="29"][@data-month="6"][@data-year="2022"])').last().click({force: true})
        cy.get('a[class="btn btn-sm"]').contains('Apply').click()
        cy.wait(2500)
        // Закончили выборку по ДАТЕ СОЗДАНИЯ
        //    ---//---

        //    ---//---
        // Делаем выборку по ВРЕМЕНИ ДЕЙСТВИЯ (ВАЛИДНОСТИ)
        cy.xpath('//button[@class="btn btn-default btn-sm button-group-item subject-select-toggle"]').contains('Valid at').click()
        cy.get('[data-input="date_from"]').last().click();
        // Нажимаем на текущий месяц, чтобы перейти к выбору по месяцам
        cy.xpath('(//nav[@class="datepicker--nav"])[3]/div[@class="datepicker--nav-title"]').click();
        // Выбираем 7-ой месяц - июль. Для селектора data-month подсчет начинается с нуля.
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-month"][@data-month="6"])[3]').click();
        // Выбираем дату
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="27"][@data-month="6"][@data-year="2022"])').last().click({force: true})
        cy.wait(1500)

        cy.get('[data-input="date_to"]').last().click();
        // Нажимаем на текущий месяц, чтобы перейти к выбору по месяцам и повторно нажимаем на этот элемент, чтобы перейти к выбору года
        cy.xpath('(//nav[@class="datepicker--nav"])[4]/div[@class="datepicker--nav-title"]').click();
        cy.xpath('(//nav[@class="datepicker--nav"])[4]/div[@class="datepicker--nav-title"]').click();
        cy.get('[class="datepicker--cell datepicker--cell-year"][data-year="2023"]').last().click()
        // Выбираем 7-ой месяц - июль. Для селектора data-month подсчет начинается с нуля.
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-month"][@data-month="6"])[4]').click();
        // Выбираем дату
        cy.xpath('(//*[@class="datepicker--cell datepicker--cell-day"][@data-date="28"][@data-month="6"][@data-year="2023"])').last().click({force: true})
        cy.wait(1500)
        cy.get('a[class="btn btn-sm"]').last().click()
        // Делаем выборку по ВРЕМЕНИ ДЕЙСТВИЯ (ВАЛИДНОСТИ)
        //    ---//---

        cy.xpath('//table//tr[1]/td[1]').should('contain', '13')
        cy.get('[data-alias="Certificate id"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[1]').should('contain', '3')
        cy.xpath('//table//tr[1]/td[8]').should('contain', '28.07.2022 11:18')
        cy.xpath('//table//tr[9]/td[5]').should('contain', '28.07.2022 00:00')
        cy.xpath('//table//tr[6]/td[4]').should('contain', 'license (106300)')


        cy.get('[data-alias="Valid from"]').click()
        cy.get('[data-alias="Valid from"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[1]').should('contain', '12')
        cy.xpath('//table//tr[3]/td[6]').should('contain', '27.07.2023 23:59')
        cy.xpath('//table//tr[8]/td[8]').should('contain', '29.07.2022 11:53')
        cy.xpath('//table//tr[10]/td[4]').should('contain', 'license (106293)')

        cy.get('[data-alias="Valid until"]').click()
        cy.wait(1500)
        cy.xpath('//table//tr[1]/td[6]').should('contain', '28.07.2022 23:59')
        cy.xpath('//table//tr[10]/td[6]').should('contain', '28.07.2023 23:59')
        cy.xpath('//table//tr[2]/td[1]').should('contain', '11')
        cy.xpath('//table//tr[2]/td[2]').should('contain', 'АО «ТКС»')
        cy.xpath('//table//tr[3]/td[8]').should('contain', '28.07.2022 13:07')

    })


})