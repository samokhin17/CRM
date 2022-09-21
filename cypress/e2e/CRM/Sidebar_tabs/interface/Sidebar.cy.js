describe('Sidebar', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Sidebar', () => {
        cy.visit('http://10.0.77.50');

        //Переход на дашборд. Далее прогон кнопок сайдбара
        cy.xpath('//*[@id="wrapper"]/aside/div[1]/i').click()        //сайдбар
        .should('be.visible');

        cy.get('.glyphicon-calendar.span-align').click()      //календарь
        cy.get('title').should('have.contain', 'Calendar | regCRM');
      
        cy.get('.icon-crm-deal.span-align').click()        //сделк
        cy.get('title').should('have.contain', 'Список сделок | regCRM');
        
        cy.get('.icon-crm-company.span-align').click()     //компания
        cy.get('title').should('have.contain', ' Company listing | regCRM ');
        
        cy.get('.icon-crm-task.span-align').click()        //задачи
        cy.get('title').should('have.contain', ' Список задач | regCRM ');
        
        cy.get('.icon-crm-contact.span-align').click()     //контакт
        cy.get('title').should('have.contain', ' Contact listing | regCRM ');

        cy.get('.icon-crm-servers.span-align').click()     //продукты

        //В выпадающем списке продуктов выбрал 'TCS'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[1]/a').click()       
        cy.get('title').should('have.contain', ' Список серверов | regCRM ');
        
        //В выпадающем списке продуктов выбрал 'MCU'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[2]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список MCU серверов | regCRM ');

        //В выпадающем списке продуктов выбрал 'Weathervane'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[3]/a').click({force:true})
        cy.get('title').should('have.contain', 'Weathervane ');

        //В выпадающем списке продуктов выбрал 'Room'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[4]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список Room | regCRM ');

        //В выпадающем списке продуктов выбрал 'Integrit'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[5]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список Integrit серверов | regCRM ');


        cy.get('.glyphicon-list-alt.span-align').click()       //заявки
        cy.get('title').should('have.contain', ' Request listing | regCRM ');

        cy.get('.glyphicon-glass.span-align').click()     //встречи
        cy.get('title').should('have.contain', ' Список встреч | regCRM ');

        cy.get('.glyphicon-folder-close.span-align').click()       //проекты
        cy.get('title').should('have.contain', ' Project listing | regCRM ');

        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click()       //меню
        

        //В выпадающем списке меню выбрал 'Пользователи'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[1]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список пользователей | regCRM ');

        //В выпадающем списке меню выбрал 'Группа'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[2]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список групп | regCRM ');

        //В выпадающем списке меню выбрал 'Заметки'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[3]/a').click({force:true})
        cy.get('title').should('have.contain', ' Note listing | regCRM ');

        //В выпадающем списке меню выбрал 'Забаненные сервера'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[4]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список забаненных серверов | regCRM ');

        //В выпадающем списке меню выбрал 'Прикрепленные'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[5]/a').click({force:true})
        cy.get('title').should('have.contain', ' Attachment listing | regCRM ');

        //В выпадающем списке меню выбрал 'Сертификаты пользователей'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[6]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список пользовательских сертификатов | regCRM ');

        //В выпадающем списке меню выбрал 'Планировщик'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[7]/a').click({force:true})
        cy.get('title').should('have.contain', ' Планировщик заданий | regCRM ');

        //В выпадающем списке меню выбрал 'Рассылка'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[8]/a').click({force:true})
        cy.get('title').should('have.contain', ' Mailing | regCRM ');

        //В выпадающем списке меню выбрал 'лог'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[9]/a').click({force:true})
        cy.get('title').should('have.contain', ' Список логов | regCRM ');

        //В выпадающем списке меню выбрал 'CallCfgCorrectorLua'
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[10]/a').click({force:true})
        cy.get('title').should('have.contain', ' CallCfgCorrectorLua | regCRM ');

        cy.get('.icon-crm-about.span-align').click()       //Обратная связь
        cy.get('title').should('have.contain', ' About | regCRM ');

})

})
