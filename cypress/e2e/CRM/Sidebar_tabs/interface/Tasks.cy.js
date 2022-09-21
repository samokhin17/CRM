describe('Tasks', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-task.span-align').click();
    })

    it('Tasks', () => {
        cy.visit('http://10.0.77.50');
        cy.get('.icon-crm-task.span-align').click();
    })

    it('Checking status filters', () => {       //Проверка фильтров

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[1]')                 //звонок вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[1]')
            .should('have.class', 'button-group-item t call active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[2]')                 //задача вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[2]')
            .should('have.class', 'button-group-item t task active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[3]')                 //письмо вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[3]')
            .should('have.class', 'button-group-item t letter active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[1]')                 //новый вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[1]')
            .should('have.class', 'button-group-item new active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[2]')                 //выполнено вкл
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[2]')
            .should('have.class', 'button-group-item done active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/div/a')                 //календарь вкл
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/div/a')
            .should('have.class', 'button-group-item active');



        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[1]')                 //звонок выкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[1]')
            .should('have.class', 'button-group-item t call');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[2]')                 //задача выкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[2]')
            .should('have.class', 'button-group-item t task');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[3]')                 //письмо выкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/a[3]')
            .should('have.class', 'button-group-item t letter');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[1]')                 //новый выкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[1]')
            .should('have.class', 'button-group-item new');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[2]')                 //выполнено выкл
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/a[2]')
            .should('have.class', 'button-group-item done');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/div/a')                 //календарь выкл
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/div/a')
            .should('have.class', 'button-group-item');
    })

    it('Checking status filters', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[2]')                 //просрочено вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[2]')
            .should('have.class', 'button-group-item selectortwo dater overdue active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[3]')                 //плангируется вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[3]')
            .should('have.class', 'button-group-item selectortwo dater planned active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[2]')
            .should('have.class', 'button-group-item selectortwo dater overdue');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[4]')                 //сегодня вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[4]')
            .should('have.class', 'button-group-item selectortwo dater today active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[3]')
            .should('have.class', 'button-group-item selectortwo dater planned');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[5]')                 //завтра вкл
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[5]')
            .should('have.class', 'button-group-item selectortwo dater tomorrow active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[4]')
            .should('have.class', 'button-group-item selectortwo dater today');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[6]')                 //на этой неделе вкл
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[6]')
            .should('have.class', 'button-group-item selectortwo dater thisweek active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[5]')
            .should('have.class', 'button-group-item selectortwo dater tomorrow');

        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[7]')                 //на следующей неделе вкл
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[7]')
            .should('have.class', 'button-group-item selectortwo dater nextweek active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[2]/a[6]')
            .should('have.class', 'button-group-item selectortwo dater thisweek');
    })

    it('checking the search box inside the tab', () => {        //поле поиска(стандартную таску, любую)
        cy.xpath('//*[@id="search"]')
            .click()
            .type('111');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/form/span/button')
            .click();
    })

    it('checking the search', () => {
        cy.xpath('//*[@id="search"]')
        .click()
        .type('autotest')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/form/span/button')
        .click()
        .wait(3000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
        .should('have.contain', 'autotest')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[5]')
        .should('have.contain', 'autotest')
    })

    it('all groups selection', () => {      //проверка групп
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/div/button')
            .click({ force: true });
    })


    it('group selection', () => {        //группа определенная
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/button')
            .click();
        cy.xpath('//*[@id="group-button"]')
            .click({ force: true })
            .clear()
            .type('Admins').should('have.value', 'Admins')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Admins');
    })


    it('all managers selection', () => {     //выбор менеджеров
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click({ force: true });
    })


    it('only me', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div/a[1]')
            .click();
    })


    it('manager selection', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[3]/button')
            .click();
        cy.xpath('//*[@id="manager-button"]')
            .clear()
            .type('Максим Кузубов')
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Максим Кузубов')
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[7]')
            .should('have.contain', 'Максим Кузубов');
    })


    it('all countrys selection', () => {        //все страны
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[2]/button')
            .click()
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/div[1]/div[2]/div/button')
            .click();
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

    it('cancel adding a task', () => {
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
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000)
            .type('{esc}')
            .wait(2000);
    })

})
