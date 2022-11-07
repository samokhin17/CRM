//создал встречу
const meeting_name = String('Samokhin_Test_Meeting' + String(Math.random()))
describe('Создание встречи', () => {
    it('СОздание встречи', () => {
        cy.log('Заходим на сайт');
        cy.visit('https://beta.crm.trueconf.com');
        cy.log('Открываем карточку "Встречи"');
        cy.get('.glyphicon-glass.span-align')
            .click();
        cy.log('Нажимаем "Добавить встречу"')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(5000);
        cy.log('Вводим название встречи')
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
            .type(meeting_name);
        cy.log('Выбираем компанию');
        cy.xpath('//*[@id="form"]/div[1]/div[2]/div/input[1]')
            .type('Samokhin_Test_Company')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Samokhin_Test_Company')
            .wait(2000);
        cy.log('Вводим адрес');
        cy.xpath('//*[@id="address"]')
            .type('Тестилище');
        cy.log('Вводим ыель встречи');
        cy.xpath('//*[@id="purpose"]')
            .type('Желание переехать');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="form"]/div[2]/button')
            .click()
            .wait(5000);
            })
})


describe('Профили встречь', () => {
    beforeEach(() => {
        cy.log('Заходим на сайт');
        cy.visit('https://beta.crm.trueconf.com');
        cy.log('Открываем карточку "Встречи"');
        cy.get('.glyphicon-glass.span-align')
            .click()
            .wait(2000);
    })

//нашел и изменил имя
    it('Найти и изменить название встречи', () => {
        cy.log('Открываем встречу');
        cy.contains(meeting_name)
            .click()
            .wait(5000);  
        cy.log('Проверяем наличие названия встречи');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.class', 'react-div')
            .should('have.contain', meeting_name)
        cy.log('Нажимаем "Редактировать" название');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div/i')
            .click({force:true});
        cy.log('Вводим новое название')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div/input')
            .click()
            .clear()
            .type(meeting_name);
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
            .type('12345');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.log('Проверяем, что название изменилось');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.contain', meeting_name);
    })


//нашел и изменил цель
    it('find/change goal', () => {
        cy.log('Открываем встречу');
        cy.contains(meeting_name)
            .click()
            .wait(5000);
        cy.log('Проверяем наличие цели');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.class', 'react-div');
        cy.log('Нажимаем "Редактировать" цель');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/i')
            .click({force:true});
        cy.log('Вводим новую цель');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/textarea')
            .click()
            .clear()
            .type('Новая цель');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
            .type('12345');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.log('Проверяем, что wtkm изменилась');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.contain', 'Новая цель')
        })  
        
        

//нашел и изменил статус
it('find/change status', () => {
    cy.log('Открываем встречу');
    cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click();
    cy.log('Проверяем наличие поля выбора статуса');
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div')
        .should('have.class', 'react-div');
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div/span')
        .click({force:true});
    cy.xpath('/html/body/div[1]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div/select')
        .select('accepted')
        .should('have.contain', 'accepted')
        .wait(3000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
        .type('12345');
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
        .click()
        .wait(5000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div')
        .should('have.contain', 'accepted')
    });  




//нашел и изменил адрес
it('find/change adresses', () => {
    cy.log('Открываем встречу');
    cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click();
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div')
        .should('have.class', 'react-div')
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/i')
        .click({force:true});
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/input')
        .click()
        .clear()
        .type('55555')
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
        .type('12345');
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
        .click()
        .wait(5000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div')
        .should('have.contain', '55555')
        }) 


        //нашел и изменил результат
it('find/change result', () => {
    cy.log('Открываем встречу');
    cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click();
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div')
        .should('have.class', 'react-div')
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/i')
        .click({force:true});
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/textarea')
        .click()
        .type('55555')
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
        .type('12345');
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
        .click()
        .wait(5000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div')
        .should('have.contain', '55555')
        }) 


       //нашел и изменил компанию
       it('find/change company', () => {
        cy.log('Открываем встречу');
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.class', 'react-div')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/i')
            .click({force:true});
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/input[1]')
            .clear({force: true})
            .type('Kuzubov AUTOTEST')
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
            .type('12345');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST')
            })


             //нашел и изменил дату назначения
       it('find/change appointment date', () => {
        cy.log('Открываем встречу');
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
            .click();
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div')
            .should('have.class', 'react-div')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div/i')
            .click({force:true});
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div/input[1]')
            .clear({force: true})
            .type('10.10.2222 10:10', {force:true})
            .wait(3000)
            .should('have.value', '10.10.2222 10:10');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
            .type('12345');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div')
            .should('have.contain', '10.10.2222 10:10')
            })



//добавил заметку
it('add note', () => {
    cy.log('Открываем встречу');
    cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click();
    cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[1]/button')
        .click()
        .wait(3000);
    cy.xpath('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div/textarea')
        .click()
        .type('11111');
    cy.xpath('//*[@id="form"]/button')
        .click()
        .wait(3000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
        .click();
    cy.xpath('//*[@id="notes"]/div/ul/li/div')
        .should('have.class', 'note');
})


//добавил пользователя
it('add user', () => {
    cy.log('Открываем встречу');
    cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click();
    cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[2]/button')
        .click()
        .wait(3000);
    cy.xpath('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
        .click()
        .type('Maksim Kuzubov')
        .wait(3000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', 'Maksim Kuzubov');
    cy.xpath('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div/input') 
        .click()
        .type('Maksim Kuzubov')
        .wait(3000); 
    cy.xpath('//*[@id="form"]/div[2]/button')
        .click()
    .wait(3000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
        .click();
    cy.xpath('//*[@id="user"]/tbody/tr[1]')
        .should('have.contain', 'Maksim Kuzubov');
    })


    //добавил контакт
it('add contact', () => {
    cy.log('Открываем встречу');
    cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click();
    cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[3]/button')
        .click()
        .wait(3000);
    cy.xpath('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
        .click()
        .type('Максим Кузубов')
        .wait(3000)
        .type('{downarrow}')
        .type('{enter}')
        .should('have.value', 'Максим Кузубов');
    cy.xpath('/html/body/div[3]/div/div/div/div[2]/form/div[1]/div[2]/div/input') 
        .click()
        .type('Максим Кузубов')
        .wait(3000); 
    cy.xpath('//*[@id="form"]/div[2]/button')
        .click()
        .wait(3000);
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
        .click();
    cy.xpath('//*[@id="user"]/tbody/tr[1]')
        .should('have.contain', 'Максим Кузубов');
    })


})
