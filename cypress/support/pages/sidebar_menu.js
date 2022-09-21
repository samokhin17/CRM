export class SidebarMenu{
    debugger; //Uncomment for debugger to work...

    // ***

    sidebarMenuFeedback(){
        cy.get('[class="sidebar-toggle-state"]').click();
        cy.xpath('//li/a[@href="/feedback/list/"]').click();
    }

    // --//--

    // Element in Menu
    sidebarMenuCA(){
        cy.get('[class="sidebar-toggle-state"]').click();
        cy.get('[class="icon-crm icon-crm-other span-align"]').click();
        cy.xpath('//li/a[@href="/ca/list/"]').click();

    }


    // userCreateFormSubmit(){
    //     cy.xpath('//*[@id="form"]/button').click();
    //     cy.wait(2500)
    //
    // }


}
export const sidebar_menu = new SidebarMenu()