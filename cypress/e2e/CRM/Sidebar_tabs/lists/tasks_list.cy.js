// let d = new Date();
// let minutes = d.getMinutes();
// let hours = d.getHours();
// let day = d.getDate();
// let month = d.getMonth() + 1;
// let year = d.getFullYear();
// let newGroupTest = (hours + "|" + minutes + "|"+ day + "|" + month + "|" + year);




describe('Tasks', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-task.span-align').click();
    })

    it('Tasks', () => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-task.span-align').click();
    })


    it('call filtr', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/a[1]')
            .should('have.class', 'button-group-item t call active').wait(4000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]/div/i')
            .should('have.class', 'glyphicon glyphicon-earphone')
    })


    it('task filtr', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/a[2]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/a[2]')
            .should('have.class', 'button-group-item t task active').wait(4000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]/div/i')
            .should('have.class', 'glyphicon glyphicon-time')
    })



    it('letter filtr', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/a[3]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/a[3]')
            .should('have.class', 'button-group-item t letter active').wait(4000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]/div/i')
            .should('have.class', 'glyphicon glyphicon-envelope')
    })


    it('new filtr', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/a[1]')
            .should('have.class', 'button-group-item new active').wait(4000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr')
            .should('have.class', 'OLD')
    })


    it('done filtr', () => {
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/a[2]')
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[1]/div[2]/a[2]')
            .should('have.class', 'button-group-item done active').wait(4000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr[1]')
            .should('have.class', 'DONE OLD')
    })
})