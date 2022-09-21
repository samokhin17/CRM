export class HeaderMenu{
    debugger; //Uncomment for debugger to work...

    // ***
    //Search Field
    searchInputAndButton(input_text){
        cy.get('[id="search"]').type(input_text)
            .should('have.value', input_text);
        cy.get('[class="btn btn-default search"]').click();
    }
    //End Search Field
    // --//--


    // ***
    // Date choice
    dateChoice(start_date='0', end_date='0'){
    // date format is: '10.08.2021'
        cy.xpath('//*[@id="perpopover"]').click({force:true});
        if (start_date === '0'){
            cy.xpath('//*[@id="date_from"]')
                .type('08.03.2022', {force:true})

        }else{
            cy.xpath('//*[@id="date_from"]').type(start_date, {force:true});
        }
        if (end_date === '0'){
            cy.xpath('//*[@id="date_to"]')
                .type('09.05.2022', {force:true})
            // cy.get('[class="core border selected"]').click()
        }else{
            cy.xpath('//*[@id="date_to"]').type(end_date, {force:true});
        }
    }

    dateChoiceSubmitButton(){
        cy.xpath('//*[@id="perpop"]/div/a[1]').click({force:true});
    }
    // End Date choice
    // --//--


    // ***
    // ManagerChoise
    mangerChoiseButton(){
        cy.get('[id="manager-name"]')
            .click({ force: true });
    }
    managerChoiseAll(){
        cy.get('[class*="btn btn-sm showallmanager"]').contains('Все')
            .click();
    }
    managerChoiseByName(part_name, full_name){
        cy.get('[id="manager-button"]').first()
            .type(part_name)
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', full_name);
    }
    managerChoiseMe(full_displaed_name){
        cy.get('[class="btn btn-sm showmy"]').contains('Мои')
            .click();
        cy.wait(2000)
        cy.get('[id="manager-name"]')
            .contains(full_displaed_name)
    }
    // End ManagerChoise
    // --//--

    // ***
    // Contact Choise

    contactChoiseByName(part_name, full_name){
        cy.get('[class="btn btn-default btn-sm contact-select-toggle"]')
            .click({ force: true });
        cy.get('[id="contact-button"]').type(part_name)
            .wait(3500)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', full_name);
    }

}

export const header_menu = new HeaderMenu()

export class HeaderMenuUser {
    userCreateFormButton() {
        cy.get('[id="modal"]').should('not.be.visible')
        cy.get('[data-href="/user/registration/"]')
            .click()
            .wait(3000);
        // cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input')
        cy.get('[id="modal"]').should('be.visible')
    }

    userCreateFormName(user_name = 'AT user name') {
        cy.get('[id="name"]').first()
            .type(user_name)
            .should('have.value', user_name);
    }

    userCreateFormMail(email) {
        cy.get('[id="email"]').click()
            .type(email)
            .should('have.value', email);
    }

    userCreateFormLogin(login) {
        cy.xpath('//*[@id="login"]')
            .type(login)
            .should('have.value', login);
    }

    userCreateFormCompany(company_name) {
        cy.xpath('//*[@id="company"]').click()
            .type(company_name)
            .wait(1000)
            .should('have.value', company_name)
    }

    userCreateFormPassword(user_password) {
        cy.xpath('//*[@id="password"]').click()
            .type(user_password)
            .wait(1000)
            .should('have.value', user_password)
    }

    userCreateFormRePassword(user_password) {
        cy.xpath('//*[@id="rePassword"]').click()
            .type(user_password)
            .wait(1000)
            .should('have.value', user_password)
    }

    userCreateFormPasswordError() {
        cy.xpath('//*[@id="password"]//following-sibling::span')
            .click()
            .contains('Пароли не совпадают')
    }
    userCreateFormSubmit(){
        cy.xpath('//*[@id="form"]/button').click();
        cy.wait(2500)

    }


}
export const header_menu_user = new HeaderMenuUser()