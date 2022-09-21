import { calendar_task } from "../../../../support/pages/calendar_task";
import { manager_choise_in_calendar } from "../../../../support/pages/manager_choise_in_calendar";

describe('Calendar', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.glyphicon-calendar.span-align').click();
    })
    it('Calendar', () => {
        cy.visit('http://10.0.77.50');      //Перешли на календарь
        cy.get('.glyphicon-calendar.span-align').click();
        cy.get('title').should('have.contain', 'Calendar | regCRM');
    })


    it('checking the checkbox of a task(on)', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[1]/span')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[1]/input')
            .should('be.checked')
    })


    it('checking the checkbox of a task(off)', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[1]/span')
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[1]/input')
            .should('not.be.checked')
    })

    it('checking the checkbox of a meeting(on)', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[2]/span')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[2]/input')
            .should('be.checked')
    })


    it('checking the checkbox of a meeting(off)', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[2]/span')
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[1]/label[2]/input')
            .should('not.be.checked')
    })

    it('create a call', () => {     //Создание задачи(call)
        calendar_task.calendarFutureDayCell('fri')
        calendar_task.calendarTaskFormOpen()
        calendar_task.calendarTaskFormName('AT for CALL')
        calendar_task.calendarTaskFormType('CALL')
        calendar_task.calendarTaskFormDescription('autotest description')
        calendar_task.calendarTaskFormDealValue('1250')
        calendar_task.calendarTaskFormContact('Kolomiets AUTOTEST')
        calendar_task.calendarTaskFormCompany('QA Kolom', 'QA Kolomiets')
        calendar_task.calendarTaskFormButtonAddtask()
    })


    it('create a task', () => {        //Создание задачи(Task)
        calendar_task.calendarFutureDayCell('wed')
        calendar_task.calendarTaskFormOpen()
        calendar_task.calendarTaskFormName('AT for Task')
        calendar_task.calendarTaskFormType('TASK')
        calendar_task.calendarTaskFormDescription('autotest description')
        calendar_task.calendarTaskFormDealValue('1250')
        calendar_task.calendarTaskFormContact('Kolomiets AUTOTEST')
        calendar_task.calendarTaskFormCompany('QA Kolom', 'QA Kolomiets')
        calendar_task.calendarTaskFormButtonAddtask()
    })

    it('create a letter', () => {             //Создание задачи(Letter)
        calendar_task.calendarFutureDayCell('thu')
        calendar_task.calendarTaskFormOpen()
        calendar_task.calendarTaskFormName('AT for Letter')
        calendar_task.calendarTaskFormType('LETTER')
        calendar_task.calendarTaskFormDescription('autotest description')
        calendar_task.calendarTaskFormDealValue('1250')
        calendar_task.calendarTaskFormContact('Kolomiets AUTOTEST')
        calendar_task.calendarTaskFormCompany('QA Kolom', 'QA Kolomiets')
        calendar_task.calendarTaskFormButtonAddtask()
    })


    it('create a meeting', () => {               // создание встречи
        calendar_task.calendarFutureDayCell('fri')
        calendar_task.calendarMeetingFormOpen()
        calendar_task.calendarMeetingFormName('AT meeting')
        calendar_task.calendarMeetingFormCompanyName('QA Kolom', 'QA Kolomiets')
        calendar_task.calendarMeetingFormAddress('AT Ростов, ул.ВКС д.005 строение 12');
        calendar_task.calendarMeetingFormAim('AT passed')
        calendar_task.calendarMeetingFormButtonSave()
        cy.wait(3000)
        // Проверяем, что нас перебрасывает на страницу встречи
        cy.url().should('include', '/meeting/view/')

    })


    it('cancel appointment creation', () => {   //Отмена создания встречи
        calendar_task.calendarFutureDayCell('fri')
        calendar_task.calendarMeetingFormOpen()
        calendar_task.calendarMeetingFormName('AT meeting')
        calendar_task.calendarMeetingFormCompanyName('QA Kolom', 'QA Kolomiets')
        calendar_task.calendarMeetingFormAddress('AT Ростов, ул.ВКС д.005 строение 12');
        calendar_task.calendarMeetingFormAim('AT passed')
        calendar_task.calendarMeetingFormButtonCancel()
        // Проверяем, что мы остались на странице календаря
        cy.url().should('include', '/calendar/')
        calendar_task.calendarFutureDayCell('thu')
    })


    it('choice of all managers', () => {      //при выборе всех менеджеров
        manager_choise_in_calendar.mangerChoiseButton()
        manager_choise_in_calendar.managerChoiseAll()
    })


    it('managers choice ', () => {        //выбор определенного пользователя
        manager_choise_in_calendar.mangerChoiseButton()
        manager_choise_in_calendar.managerChoiseByName('Коломиец','Виталий Коломиец')
    })


    it('select only my entries', () => {        //выбор только моих записей
        manager_choise_in_calendar.mangerChoiseButton()
        manager_choise_in_calendar.managerChoiseMe('Виталий Коломиец')
    })


    it('choice of all groups', () => {        //всех групп
        cy.get('[id="subject-name"]').last()
            .click();
        cy.get('[class="btn btn-sm show-all-button"]').click()
        cy.get('[id="subject-name"]').last()
            .contains('Выбрать группу')
    })


    it ('groups choice', () => {        //выбор определенной группы
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[1]/div[2]/div[2]/div/button').click();
        cy.get('[id="subject-name"]').last()
            .click();
        cy.get('[class="subject-button form-control border-input small-input subject-input ui-autocomplete-input"]').last()
            .type('Admin')
            .wait(2000)
            .type('{downarrow}{downarrow}')
            .type('{enter}')
            .should('have.value', 'Admins');
        cy.get('[id="subject-name"]').last()
            .contains('Admins')
    })


    it('Checking the "ПРЕД" button', () => {    //ПРед
        cy.get('[class="fc-prev-button fc-button fc-button-primary"]').click()
        // Добавить проверку по смене месяца
    })


    it('Checking the "СЛЕД" button', () => {        //След
        cy.get('[class="fc-next-button fc-button fc-button-primary"]').click()
        // Добавить проверку по смене месяца
    })


    it('Checking the "СЕГОДНЯ" button', () => {        //Сегодня
        cy.get('[class="fc-today-button fc-button fc-button-primary"]').should('be.disabled')
        cy.get('[class="fc-prev-button fc-button fc-button-primary"]').click()
        cy.get('[class="fc-today-button fc-button fc-button-primary"]').should('not.be.disabled').click()
        // Добавить проверку по смене месяца
    })

})
