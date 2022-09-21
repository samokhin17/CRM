// describe('Contact_profile', () => { 
//     it.only('create_a_new_contact', () => {    //Создаем тестовую компанию
//         cy.log('Заходим на сайт')
//         cy.visit('https://beta.crm.trueconf.com'); //Заходим на сайт
//         cy.log('Открываем карточку "Компании"')
//         cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[3]/a/p/i') //Открываем карточку "Компании"
//             .click()
//             .wait(3000);
//         cy.log('Нажимаем "Добавить компанию"');
//         cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]') //Нажимаем "Добавить компанию"
//             .click({force:true})
//             .wait(2000);
//         cy.log('Вводим название компании');
//         cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input') //Вводим название компании
//             .click({force:true})
//             .type('Samokhin_Test_Company')
//             .wait(1000);
//         cy.log('Вводим и выбираем город');
//         cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[2]/div/input') //Вводим и выбираем город
//             .click({force:true})
//             .type('Moscow')
//             .type('{downarrow}')
//             .type('{enter}')
//             .wait(1000);
//         cy.log('Вводим и выбираем страну');
//         cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[5]/div/input[1]') //Вводим и выбираем страну
//             .click({force:true})
//             .type('Russia')
//             .wait(1000)
//             .type('{downarrow}')
//             .type('{enter}')
//             .wait(1000);
//         cy.log('Нажимаем "Сохранить"');
//         cy.xpath('//*[@id="form"]/button') //Нажимаем "Сохранить"
//             .click({force:true})
//             .wait(3000);
//         cy.log('Проверяем, что компания создана');
//         cy.xpath('//*[@id="table"]/tr[1]/td[2]/a') //Проверяем, что компания создана
//             .should('have.contain', 'Samokhin_Test_Company')
        
//     })
// })

const { should, expect } = require("chai");

describe('Deal', () => {
    beforeEach(() => {
        cy.log('Заходим на сайт')
        cy.visit('https://beta.crm.trueconf.com'); //Заходим на сайт
        cy.log('Открываем карточку "Сделки"')
        cy.get('.icon-crm-deal.span-align')
            .click();
        cy.log('Выбираем менеджера для отображения компаний') //Выбираем менеджера для отображения компаний
        cy.xpath('//*[@id="manager-name"]')
            .click({force: true})
            .wait(1000); 
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[2]/div/div/a[1]')
            .click({force: true})
            .wait(1000);
    })
    let new_name = String('Samokhin_Test_Deal' + Math.random())

    it.only('adding a deal', () => {      //Добавить сделку
        cy.log('Нажимаем "Добавить сделку"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click()
            .wait(5000);
        cy.log('Вводим и проверяем название сделки');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input') //Вводим и проверяем название сделки
            .click({ force: true })
            .type('Samokhin_Test_Deal')
            .should('have.value', 'Samokhin_Test_Deal');
        cy.log('Выбираем и проверяем компанию');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[3]/div/input[1]') //Выбираем и проверяем компанию
            .type('Samokhin_Test_Company')
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Samokhin_Test_Company');
        cy.log('Вводим и проверяем сумму сделки');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[5]/div/input') //Вводим и проверяем сумму сделки
            .type('9999')
            .should('have.value', '9999');
        cy.log('Вводим и проверяем описание');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[7]/div/textarea') //Вводим и проверяем описание
            .type('ffffffffffffffffffffffffffffff')
            .should('have.value', 'ffffffffffffffffffffffffffffff');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="form"]/div[2]/button') // Нажимаем "Сохранить"
            .click()
            .wait(3000);
        cy.log('Проеряем, что сделка создана')
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a') //Проверяем, что сделка создана
            .should('have.contain', 'Samokhin_Test_Deal')
    })


    it.only('open profile', () => {                           //перешли в первый профиль в списке
        cy.log('Открываем первую сделку в списке')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[1]/a')
            .click()
    })

    it.only('Find/change name', () => {                                       //нашел/изменил имя сделки
        cy.log('Открываем сделку');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[1]/a') //Открываем сделку
            .click();
        cy.log('Проверяем название сделки')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]') //Проверяем название сделки
            .should('have.contain', 'Samokhin_Test_Deal');
        cy.log('Запускаем редактирование названия');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div/span') //Запускаем редактирование названия
            .click({ force: true });
        cy.log('Меняем название')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div/input') //Добавляем "1" к названию
            .clear()
            .type(new_name);
        cy.log('Вводим "Примечание" перед сохранением')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[1]') //Вводим примечание перед сохранением
            .click({ force: true })
            .type('1234', { force: true });
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[2]') //Нажимаем "Сохранить"
            .click();
        cy.wait(5000);
        cy.log('Проверяем, что название изменилось');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]') //Проверяем, что название изменилось
            .should('have.contain', new_name);
    })


    it.only('Find/change owner', () => {                      //нашел/изменил владельца
        const owners = ['Александр Самохин', 'Сара Мислимова', 'Семен Самойлов', 'Артур Глушенко']
        let getRandomOwner = Math.floor(Math.random() * owners.length)
        var owner = owners[getRandomOwner];
        // function getOwner() {
        //     return cy.get('#wrapper > div > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(3) > a > p').invoke('text').then((text) => {
        //         expect(text).to.eq('Тестовый сертификат')
        // })
        // }
        
        // cy.get('#wrapper > div > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(3) > a > p').then(function(text){
        //     text.text() 
        // })
        cy.log('Открываем сделку');
        cy.contains(new_name) //Открываем сделку
            .click();
        cy.log('Проверяем владельца компании по текущему сертификату');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.contain', 'Тестовый сертификат')
        cy.log('Нажимаем "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим, выбираем и проверяем "Владельца"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/input[1]')
            .type(owner)
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', owner);
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[1]')
            .click({ force: true })
            .type('1234', { force: true });
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.log('Проверяем, что "Владелец" изменился');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.contain', owner);
    })


    it.only('Find/change company', () => {                      //нашел/изменил компанию
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.log('Проверяем название компании')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div')
            .should('have.contain', 'Samokhin_Test_Company');
            cy.log('Нажимаем "Редактировать"')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div/i')
            .click({ force: true });
        cy.log('Меняем и проеряем название компании')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div/input[1]')
            .clear()
            .type('Samokhin_Test_Company2')
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Samokhin_Test_Company2');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[1]')
            .click({ force: true })
            .type('1234', { force: true });
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.log('Проверяем, что название компании изменилось');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div')
            .should('have.contain', 'Samokhin_Test_Company2');
    })



    it.only('Find/change sum', () => {                      //нашел/изменил сумму
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.log('Проверяем текущую сумму сделки');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/input')
            .should('have.value', '9999')
        cy.log('Проверяем валюту сделки');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/select')
            .should('have.value', 'RUB');
        cy.log('Нажимаем "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/i')
            .click({force:true})
        cy.log('Вводим сумму');
        cy.xpath('//*[@id="sum"]')
            .click({force:true})
            .clear()
            .type('10000')
        cy.log('Выбираем валюту');
        cy.xpath('//*[@id="currency"]')
            .select('USD');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[1]')
            .click({ force: true })
            .type('1234', { force: true });
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.log('Проверяем, что сумма изменилась');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/input')
            .should('have.value', '10000');
        cy.log('Проверяем, что валюта изменилась');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/select')
            .should('have.value', 'USD');
    })


    it.only('Find/change type of transaction', () => {                      //нашел/изменил тип сделки
        cy.log('Меняем отображение валюты в сделках');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click()
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.log('Проверяем тип')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/select')
            .should('have.value', 'SOFTWARE'); 
        cy.log('Нажимаем "Редактировать"')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/i')
            .click({ force: true });
        cy.log('Меняем тип');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/select')
            .select('HARDWARE');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[1]').click({ force: true })
            .type('1234', { force: true });
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.log('Проверяем, что тип изменился')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/select')
            .should('have.value', 'HARDWARE');
    })


    it.only('Find/change description', () => {                      //нашел/изменил описание
        cy.log('Меняем отображение валюты в сделках');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click()
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.log('Проверяем "Описание"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.contain', 'ffffffffffffffffffffffffffffff');
        cy.log('Нажимаем "Редактировать"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим тест описания');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/textarea')
            .clear()
            .type('rrr');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[1]').click({ force: true })
            .type('1234', { force: true });
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[2]').click()
            .wait(5000);
        cy.log('Проверяем, что описание изменилось');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.contain', 'rrr');
    })

    it.only('Find/change status', () => {                      //нашел/изменил статус
        cy.log('Меняем отображение валюты в сделках');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click()
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.log('Проверяем статус');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div')
            .should('have.contain', 'НОВЫЙ');
        cy.log('Нажимаем "Редактировать"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div/i')
            .click({ force: true });
        cy.log('Выбираем статус');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div/select')
            .select('ПРОБНЫЙ');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[1]')
            .click({ force: true })
            .type('1234', { force: true });
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.log('Проверяем, что статус изменился');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div/span')
            .should('have.contain', 'ПРОБНЫЙ');
    })


    it.only('add note', () => {                      //нашел/изменил статус
        cy.log('Меняем отображение валюты в сделках');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.log('Запускаем редактирование описания');
        cy.xpath('/html/body/div[1]/div/div/div[1]/div[1]/button')
            .click()
            .wait(3000);
        cy.log('Вводим случайный текст в "Описание"');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div/textarea')
            .click()
            .type(Math.random());
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/button')
            .click()
            .wait(5000);
    })
    

    it.only('check data field', () => {                      //наличие поля даты
        cy.log('Меняем отображение валюты в сделках');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.log('Проверяем наличие поли "Дата"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[8]/td[2]/span')
            .should('have.class', 'react-item')
    })


    it.only('check tab', () => {                      //проверил табы
        cy.log('Меняем отображение валюты в сделках');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
            .click();
        cy.log('Открываем сделку');
        cy.contains(new_name)
            .click();
        cy.xpath('/html/body/div[1]/div/div/div[3]/div/ul/li[1]').click().wait(2000)
            .should('have.class', 'active'); 

        cy.xpath('/html/body/div[1]/div/div/div[3]/div/ul/li[2]').click().wait(2000)
            .should('have.class', 'active');
        cy.xpath('/html/body/div[1]/div/div/div[3]/div/ul/li[1]') 
            .should('have.class', '');

        cy.xpath('/html/body/div[1]/div/div/div[3]/div/ul/li[3]').click().wait(2000)
            .should('have.class', 'active');
        cy.xpath('/html/body/div[1]/div/div/div[3]/div/ul/li[2]') 
            .should('have.class', '');

        cy.xpath('/html/body/div[1]/div/div/div[3]/div/ul/li[4]').click().wait(2000)
            .should('have.class', 'active');
        cy.xpath('/html/body/div[1]/div/div/div[3]/div/ul/li[3]') 
            .should('have.class', '');
    })


    // it.only('delete deal', () => {                      //удалил сделку
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[3]/a[2]')
    //         .click()
    //     cy.contains(new_name)
    //         .click();
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[3]/a')
    //         .click()
    //     cy.on('window:alert').type('1234')
    //     cy.should('not.have.contain', new_name)


// })



    })