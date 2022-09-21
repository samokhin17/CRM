export class CalendarTask{
    debugger; //Uncomment for debugger to work...
    calendarFutureDayCell(dayOfWeek){
        // dayOfWeek == mon / tue / wed / thu / fri / sat / sun
        cy.xpath('//td[@class="fc-day fc-widget-content fc-% fc-future"]'.replace('%', dayOfWeek)).first()
            .click({ force: true })
        }
    calendarTaskFormOpen() {
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div[2]/button[1]')
        cy.get('[data-target="#taskModal"]')
            .click()
        cy.wait(2000)
        }
    calendarTaskFormName(name) {
        cy.xpath('//*[@id="name"]')
            .click().type(name)
            .should('have.value', name);
        }
    calendarTaskFormType(type) {
        // type == CALL / TASK / LETTER
        cy.xpath('//*[@id="type"]')
            .select(type)
        }
    calendarTaskFormDescription(description) {
        cy.xpath('//*[@id="description"]')
            .click()
            .type(description)
            .should('have.value', description);
        }
    calendarTaskFormDealValue(deal) {
        cy.xpath('//*[@id="deal_name"]')
            .click()
            .type(deal)
            .should('have.value', deal);
        }
    calendarTaskFormContact(contact_name) {
        cy.xpath('//*[@id="contact_name"]')
            .clear()
            .type(contact_name)
            .should('have.value', contact_name);
        }
    calendarTaskFormCompany(part_of_company_name, full_company_name){
        cy.get('[id="company_name"]')
            .clear()
            .type(part_of_company_name)
            .wait(2000)
            .type('{downarrow}');
        cy.get('[id="contact_name"]').click();
        cy.get('[id="company_name"]').should('have.value', full_company_name);
        }
    calendarTaskFormButtonAddtask(){
        // cy.xpath('//*[@id="taskForm"]/button').click();
        cy.get('[class="btn btn-default btnAdd"]').contains('Add task').click({ force: true });
        cy.wait(2500);
    }

    // Meeting
    calendarMeetingFormOpen() {
        cy.get('[data-target="#myModal"]').click()
        cy.wait(2000);
    }
    calendarMeetingFormName(meetingName){
        cy.xpath('//input[@id="name"]').first()
            .type(meetingName).should('have.value', meetingName)
    }
    calendarMeetingFormCompanyName(part_of_company_name, full_company_name){
        // cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
        cy.get('[name="company_name"]').first()
            .clear()
            .type(part_of_company_name)
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
        cy.xpath('//input[@id="name"]').first().click();
        cy.get('[name="company_name"]').first()
            .should('have.value', full_company_name);
    }
    calendarMeetingFormAddress(address){
        cy.get('[id="address"]').type(address)
            .should('have.value', address);
    }
    calendarMeetingFormAim(purpose) {
        cy.get('[id="purpose"]').type(purpose)
            .should('have.value', purpose);
    }
    calendarMeetingFormButtonSave(){
        cy.get('[class="btn btn-default btnAdd"]').first().click();
        cy.wait(2000);
    }
    calendarMeetingFormButtonCancel(){
        cy.xpath('//*[@id="form"]/div[2]/a').click();
        cy.wait(2000);
    }
}

export const calendar_task = new CalendarTask()