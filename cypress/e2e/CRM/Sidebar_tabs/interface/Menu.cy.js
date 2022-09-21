import {header_menu, header_menu_user} from "../../../../support/pages/header_menu";
// const dayjs = require("dayjs");

describe('Users', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('[class="icon-crm icon-crm-other span-align"]')
        .click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li[1]/a[@href="/user/list/"]').click()
      })
    
    // it('Users', () => {
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i')
    //     .click();      //Перешли в меню
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[1]/a')
    //     .click({force:true});
    // })

    it('checking the search box inside the tab', () => {        //поле поиска
        header_menu.searchInputAndButton('Максим')
        cy.xpath('//table/tbody/tr/td[1]')
            .should('have.contain', 'Максим Пода');
    })


    it('Show deleted users', () => {
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div/div[2]/a').click();
        // cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li[1]/a[@href="/user/list/"]').click()
        cy.get('[class^="button-group-item deleted"]').click()
        cy.wait(3000)
        header_menu.searchInputAndButton('artem')
        cy.wait(3000)
        cy.xpath('//table/tbody').find('tr').should('have.length', 2)
        // Вариант ниже для просмотра количества найденных элементов
        // cy.xpath(selector).find('tr').its('length').then((code) => {
        //     cy.log(`**  count of string is ${code}  **`)
        // });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div/div[2]/a')
            .should('have.class', 'button-group-item deleted active');
        cy.get('[class^="button-group-item deleted"]').click()
        cy.wait(2000)
        cy.get('[class="table-count"]').should('have.text', 'Total: 0')
    })


    it('create a user', () => {
        const dayjs = require('dayjs');
        let currentTime = dayjs().format('DDMMYY_HHMM');
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div/div[1]/button')
        cy.get('[id="modal"]').should('not.be.visible')
        cy.get('[data-href="/user/registration/"]')
            .click()
            .wait(3000);
        // cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input')
        cy.get('[id="modal"]').should('be.visible')
        cy.get('[id="name"]').first()
            .type('AT user name')
            .should('have.value', 'AT user name');
        // cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[2]/div/input')
        cy.get('[id="email"]').click()
            .type('autotest+%@trueconf.com'.replace('%', currentTime));
        cy.xpath('//*[@id="login"]')
            .type('at_login_%'.replace('%', currentTime))
        cy.xpath('//*[@id="company"]')
            .click()
            .type('Кузубов')
            .wait(2000)
            .should('have.value', 'Кузубов')
            .wait(2000);
        cy.xpath('//*[@id="password"]')
            .click()
            .type('11111111').should('have.value', '11111111');
        cy.xpath('//*[@id="rePassword"]')
            .click()
            .type('11111111').should('have.value', '11111111');
        cy.xpath('//*[@id="form"]/button').click();
        cy.wait(2000)
        cy.get('[id="modal"]').should('not.be.visible')
    })


    it('cancel create a user', () => {
        const dayjs = require('dayjs');
        let currentTime = dayjs().format('DDMMYY_HHMM');
        header_menu_user.userCreateFormButton()
        header_menu_user.userCreateFormName('AT user name')
        header_menu_user.userCreateFormMail('autotest+%@trueconf.com'.replace('%', currentTime))
        header_menu_user.userCreateFormLogin('at_login_%'.replace('%', currentTime))
        header_menu_user.userCreateFormCompany('Кузубов')
        header_menu_user.userCreateFormPassword('11111111')
        header_menu_user.userCreateFormRePassword('*1111111')
        header_menu_user.userCreateFormSubmit()
        // Проверяем вывод ошибки "Пароли не совпадают"
        header_menu_user.userCreateFormPasswordError()

    })
});


describe('groups', () => {
    beforeEach(() => {
      //   cy.visit('https://beta.crm.trueconf.com');
      //   cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i')
      //   .click();      //Перешли в меню
      //   cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[2]/a')
      //   .click({force:true});
      // })
      //
        cy.visit('http://10.0.77.50');
        cy.get('[class="icon-crm icon-crm-other span-align"]')
        .click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/group/list/"]').click()
      })


    it('checking the search box inside the tab', () => {        //поле поиска
        cy.xpath('//*[@id="search"]')
        .click()
        .type('autotest')
        .should('have.value', 'autotest');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
        .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]')
        .should('have.contain', 'autotest')
    })


    it('added group', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div/button')
        .click()
        .wait(3000);
        cy.xpath('//*[@id="form"]/div/div[1]/div/label')
        .click()
        .type('autotest');
        cy.xpath('//*[@id="form"]/div/div[2]/div[2]/input[1]')
        .click()
        .type('all')
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}')
        .wait(2000)
        cy.xpath('//*[@id="form"]/button').click({force:true});
    })
    it('cancel added group', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div/button').click()
        .wait(3000)
        cy.xpath('//*[@id="form"]/div/div[1]/div/label')
        .click()
        .type('autotest')
        cy.xpath('//*[@id="form"]/div/div[2]/div[2]/input[1]')
        .click()
        .type('all')
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}')
        .wait(2000)
        cy.xpath('//*[@id="form"]/a').click({force:true});
    })


describe('note', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('[class="icon-crm icon-crm-other span-align"]')
        .click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/note/list/"]').click()
      })

    
    it('checking the search box inside the tab', () => {        //поле поиска
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        cy.wait(1000)
        cy.xpath('//*[@id="search"]').click()
        .type('autotest');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
        .click();
        cy.wait(2000);
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[1]')
        .should('have.contain', 'autotest')

    })


    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломи', 'Виталий Коломиец')
    })

    it('select only my entries', () => {        //только мои
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
    })
})


describe('banned servers', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        // cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click();      //Перешли в меню
        // cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[4]/a').click({force:true});
        cy.get('[class="icon-crm icon-crm-other span-align"]')
        .click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/server/banned/"]').click()
        })
        
    
    // it('banned servers', () => {
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click();      //Перешли в меню
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[4]/a').click({force:true});
    // })
    

    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломие', 'Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/button').click();
        // cy.xpath('//*[@id="user-button"]').click({force:true})
        // .type('Максим')
        // .wait(2000)
        // .type('{downarrow}')
        // .type('{enter}');
    })
    
    
    it('all managers selection', () => {        //все менеджеры
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/button').click();
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]').click();
    })
    
    it('select only my entries', () => {        //только мои
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/button').click();
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/div/div/a[2]').click();
    })
})


describe('attached', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        // cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click();      //Перешли в меню
        // cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[5]/a').click({force:true});
        cy.get('[class="icon-crm icon-crm-other span-align"]')
        .click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/attachment/list/"]').click()
        })
        
    
    // it('attached', () => {
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click();      //Перешли в меню
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[5]/a').click({force:true});
    // })
    //
    
    it('checking the search box inside the tab', () => {        //поле поиска
        cy.xpath('//*[@id="search"]').click().type('1');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button').click();
    })


    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломие', 'Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/button').click();
        // cy.xpath('//*[@id="user-button"]').click({force:true})
        // .type('Максим')
        // .wait(2000)
        // .type('{downarrow}')
        // .type('{enter}');
    })
    
    
    it('all managers selection', () => {        //все менеджеры
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseAll()
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/button').click();
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/div/div/a[1]').click();
    })
    
    it('select only my entries', () => {        //только мои
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseMe('Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/button').click();
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div/div/div/a[2]').click();
    })
})



describe('certificates', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        // cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click();      //Перешли в меню
        // cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[6]/a').click({force:true});
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/certificate/user/"]').click()
        })
        
    //
    // it('certificates', () => {
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click();      //Перешли в меню
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[6]/a').click({force:true});
    // })
    
    
    it('checking the search box inside the tab', () => {        //поле поиска
        // cy.xpath('//*[@id="search"]').click().type('1');
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/div/form/span/button').click();
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/certificate/user/"]').click()
    })
})


describe('Scheduler', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/scheduler/list/"]').click();
        })
        
    
    // it('Scheduler', () => {
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i').click();      //Перешли в меню
    //     cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[7]/a').click({force:true});
    // })
    
    
    it('checking the search box inside the tab', () => {        //поле поиска
        cy.xpath('//*[@id="search"]').click().type('1');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button').click();
    })


    it('Choosing a job type', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button').click();
        cy.xpath('//*[@id="scheduler-button"]')
        .type('Заявка')
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}');
    })


    it('Choosing a all job type', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button').click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/button').click()
    })


it('manager selection', () => {       //воркер определенный
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button').click();
        // cy.xpath('//*[@id="worker-button"]').click({force:true})
        // .type('Максим')
        // .wait(2000)
        // .type('{downarrow}')
        // .type('{enter}');
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломие', 'Виталий Коломиец')
    })
    
    
    it('all managers selection', () => {        //все воркеры
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button').click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]').click();
    })
    
    it('select only my entries', () => {        //только мои
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/button').click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[2]').click();
    })


    it('manager selection', () => {       //Менеджер определенный
        header_menu.mangerChoiseButton()
        header_menu.managerChoiseByName('Коломие', 'Виталий Коломиец')
        // cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/button').click({force:true});
        // cy.xpath('//*[@id="user-button"]').click({force:true})
        // .clear()
        // .type('Максим')
        // .wait(2000)
        // .type('{downarrow}')
        // .type('{enter}');
    })
    
    
    it('all managers selection', () => {        //все менеджеры
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/button').click({force:true});
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/div/div/a[1]').click();
    })
    
    it('select only my entries', () => {        //только мои
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/button').click({force:true});
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[3]/div/div/a[2]').click();
    })

})              //ДОБАВИТЬ КЕЙСЫ С ДАТАМИ!!!

describe('Newsletter', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/mailing/list/"]').click();
        })
        
    
    it('Newsletter', () => {
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/mailing/list/"]').click();
    })
})



describe('Log', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/log/list/"]').click();
        })
        
    
    it('Log', () => {
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/log/list/"]').click();
    })
})



describe('CallCfgCorrectorLua', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/corrector/list/"]').click();
        })
        
    
    it('CallCfgCorrectorLua', () => {
        cy.get('[class="icon-crm icon-crm-other span-align"]').click({force:true});
        cy.xpath('//*[@class="sidebar-dropmenu dropdown-menu"]/li/a[@href="/corrector/list/"]').click();
    })
})



// describe('Feedback tab', () => {
//     beforeEach(() => {
//         cy.visit('https://beta.crm.trueconf.com');
//         cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i')
//         .click();      //Перешли в меню
//         cy.get('.icon-crm-about.span-align')
//         .click();
//         })
        
    
//     it('Feedback tab', () => {
//         cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i')
//         .click();      //Перешли в меню
//         cy.get('.icon-crm-about.span-align')
//         .click();   
//     })


//     it('Feedback', () => {
//         cy.xpath('//*[@id="feed"]')
//         .click()
//         .type('CRM - это топчик')
//         .should('have.value', 'CRM - это топчик');
//         cy.xpath('//*[@id="wrapper"]/div/div/div[2]/form/input')
//         .click()
//     })
// })
})
