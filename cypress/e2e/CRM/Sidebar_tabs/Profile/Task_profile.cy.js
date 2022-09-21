describe('Tasks', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-task.span-align')
            .click()
            .wait(5000);
    })

    it('Adding a task', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/button[2]')
            .click()
            .wait(5000)
        cy.xpath('//*[@id="name"]')
            .click()
            .type('autotest')
            .should('have.value', 'autotest');
        cy.xpath('//*[@id="description"]')
            .click()
            .type('autotest')
            .should('have.value', 'autotest');
        cy.xpath('//*[@id="deal_name"]')
            .click()
            .type('1000')
            .should('have.value', '1000');
        cy.xpath('//*[@id="contact_name"]')
            .clear();
        cy.xpath('//*[@id="contact_name"]')
            .should('be.empty')
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.xpath('//*[@id="company_name"]')
            .clear().should('be.empty')
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.xpath('//*[@id="taskForm"]/button')
            .click();
        cy.wait(3000);
    })


    it('open profile', () => {       // открыл профиль таска
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[4]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
    })


    it('find/change name', () => {       // нашел/изменил название таска
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[4]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="name"]')
            .should('have.value', 'autotest')
            .click()
            .type('1')
        cy.xpath('//*[@id="note"]')
            .click()
            .type('12345');
        cy.xpath('//*[@id="taskForm"]/button').click()
            .wait(5000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a').click().wait(3000);
        cy.xpath('//*[@id="name"]')
            .should('have.value', 'autotest1')
    })


    it('find/change type', () => {       // нашел/изменил тип таска
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[4]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="taskForm"]/div[1]/div[2]').click({ force: true });
        cy.xpath('//*[@id="type"]')
            .select('TASK');
        cy.xpath('//*[@id="note"]')
            .click()
            .type('12345');
        cy.xpath('//*[@id="taskForm"]/button').click()
            .wait(5000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a').click().wait(3000);
        cy.xpath('//*[@id="type"]')
            .should('have.value', 'TASK')
    })


    it('find/change owner', () => {       // нашел/изменил владельца таска
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[4]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="manager"]')
            .should('have.value', 'Максим Кузубов')
            .clear()
            .type('Maksim Kuzubov')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Maksim Kuzubov');
        cy.xpath('//*[@id="note"]')
            .click()
            .type('12345');
        cy.xpath('//*[@id="taskForm"]/button').click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click().wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click().wait(3000);
        cy.xpath('//*[@id="table"]/tr[1]/td[7]')
            .should('have.contain', 'Maksim Kuzubov');
    })


    it('find/change description', () => {       // нашел/изменил описание таска

        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="description"]')
            .clear()
            .type('autotest12345')
            .wait(2000)
        cy.xpath('//*[@id="note"]')
            .click()
            .type('12345');
        cy.xpath('//*[@id="taskForm"]/button').click()
            .wait(5000);

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click().wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click().wait(3000);
        cy.xpath('//*[@id="table"]/tr[1]/td[5]')
            .should('have.contain', 'autotest12345')
    })


    it('find/change deal', () => {       // нашел/изменил сделку таска

        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="deal_name"]')
            .clear()
            .type('1autotest')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', '1autotest');
        cy.xpath('//*[@id="note"]')
            .click()
            .type('12345');
        cy.xpath('//*[@id="taskForm"]/button').click()
            .wait(5000);

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click().wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click().wait(3000);
        cy.xpath('//*[@id="table"]/tr[1]/td[3]')
            .should('have.contain', '1autotest')
    })


    it('find/change contact', () => {       // нашел/изменил контакт таска
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="contact_name"]')
            .clear()
            .type('TEST TC')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'TEST TC');
        cy.xpath('//*[@id="note"]')
            .click()
            .type('12345');
        cy.xpath('//*[@id="taskForm"]/button').click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click().wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click().wait(3000);
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="contact_name"]')
            .should('have.value', 'TEST TC')
    })

    it('find/change company', () => {       // нашел/изменил компанию таска
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.xpath('//*[@id="company_name"]')
            .clear()
            .type('test tc')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'test tc');
        cy.xpath('//*[@id="note"]')
            .click()
            .type('12345');
        cy.xpath('//*[@id="taskForm"]/button').click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click().wait(2000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click().wait(3000);
        cy.xpath('//*[@id="table"]/tr[1]/td[4]')
            .should('have.contain', 'test tc')
    })

})
