export class ManagerChoise{
    debugger; //Uncomment for debugger to work...
    mangerChoiseButton(){
        cy.get('[id="subject-name"]').first()
            .click({ force: true });
    }
    managerChoiseAll(){
        cy.get('[class*="btn btn-sm"]').contains('All')
            .click();
    }
    managerChoiseByName(part_name, full_name){
        cy.get('[class="subject-button form-control border-input small-input subject-input ui-autocomplete-input"]').first()
            .type(part_name)
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', full_name);
    }
    managerChoiseMe(full_name){
        cy.get('[class="btn btn-sm"]').contains('My')
            .click();
        cy.wait(2000)
        cy.get('[id="subject-name"]').first()
            .contains(full_name)
    }
}

export const manager_choise_in_calendar = new ManagerChoise()