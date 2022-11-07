describe('Create TCS', () => {
    it('creating server', () => {       //создаем сервер
        cy.visit('https://beta.crm.trueconf.com');
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/a/p/i')
            .click();
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[1]/a')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[2]').click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input')
            .click()
            .type('UA')
            .should('have.value', 'UA');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[3]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div[2]/button')
            .click();
    })
})

describe('TCS', () => {
    //Перешли в продукты
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/a/p/i')
            .click();
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[1]/a')
            .click({ force: true })
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click({force:true})
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click()
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click()
            .wait(4000)
    })





    //нашел и проверил сервер ID

    it('find/check server ID', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.class', 'react-div');
    })


    //нашел и изменил имя сервера
    it('find/change server name', () => {
        function getRandomTIN(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let name = String(getRandomTIN(1111, 9999));
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/input')
            .clear()
            .type(name);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
            .type('12345');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.contain', name);
    })


    //наличие блока кода регистрации 
    it('find/check register code', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/span')
            .should('have.class', 'react-item');
    })


    //изменение компании сервера
    it('find/change company', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div')
            .should('have.class', 'react-div')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/input[1]')
            .clear()
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
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST')
    })


    //изменение типа  сервера
    it('find/change type server', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.class', 'react-div');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/select')
            .select('unlocked');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[1]')
            .type('12345');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/div/input[2]')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/select')
            .should('have.contain', 'unlocked')
    })


    //наличие блока состояния 
    it('find/check register code', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]')
            .should('have.contain', 'offline');
    })




    //наличие блока кода регистрации 
    it('find/check register code', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[8]/td[2]/span')
            .should('have.class', 'react-item');
    })


    // //бан/разбан сервера
    // it('find/check/ban server', () => { 
    // cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[4]/a')
    // .should('have.contain', 'Забанить сервер')
    // .click()
    // .wait(4000); 
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[4]/a')
    //     .should('have.contain', 'Разбанить сервер')
    //     .click()
    //     .wait(4000);
    //     cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[4]/a')
    // .should('have.contain', 'Забанить сервер')
    // })


    //добавил лицензию
    it('find/add License server', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[5]/button')
            .click({force:true})
            .wait(3000);
        cy.xpath('//*[@id="form"]/div[3]/button')
            .click({force:true})
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]/a')
            .click();
        cy.xpath('//*[@id="license"]/div/div/table/tbody')
            .should('have.class', 'vue-tbody');
    })



    //добавил поддержку
    it('find/add support License server', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[5]/button')
            .click()
            .wait(3000);
        cy.xpath('//*[@id="form"]/div/div[3]/div/input')
            .click({ force: true })
            .clear()
            .type('10.08.2025', { force: true });
        cy.xpath('//*[@id="form"]/div[3]/button')
            .click({ force: true })
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]/a')
            .click();
        cy.xpath('//*[@id="license"]/div/div/table/tbody/tr[1]/td[4]/span')
            .should('have.contain', '10.08.2025');
    })


    // энтерпрайз мастер
    it('find/add Master License server', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[7]/button')
            .click()
            .wait(3000);
        cy.xpath('//*[@id="form"]/div[2]/div[2]/label')
            .click({force:true})
        cy.xpath('//*[@id="form"]/div[3]/button')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]/a')
            .click();
        cy.xpath('//*[@id="license"]/div/div/table/tbody/tr[1]/td[2]')
            .should('have.contain', 'DATES Master');
    })



    // энтерпрайз slave
    it('find/add slave License server', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[7]/button')
            .click()
            .wait(3000);
        cy.xpath('//*[@id="form"]/div[2]/div[3]/label/input')
            .click({ force: true })
        cy.xpath('//*[@id="form"]/div[3]/button')
            .click()
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]/a')
            .click();
        cy.xpath('//*[@id="license"]/div/div/table/tbody/tr[1]/td[2]')
            .should('have.contain', 'DATES Slave');
    })


    it('check tab', () => {                      //проверил табы
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[5]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[6]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[5]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[6]')
            .should('have.class', '');
    })
})




//MCU


describe('Create MCU', () => {
    it('creating server', () => {       //создаем сервер
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[2]/a')
            .click({ force: true })
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click({ force: true })
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/button')
            .click();
    })
})


describe.only('MCU', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[2]/a')
            .click({ force: true })
            .wait(5000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click({force:true})
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click()
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click()
            .wait(4000);
    })


    //нашел проверил сервер ИД
    it('find/check server ID', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока кода регистрации 
    it('find/check register code', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока Bios ID 
    it('find/check Bios ID', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока MAC адрес 
    it('find/check MAC адрес', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/span')
            .should('have.class', 'react-item');
    })



    //наличие блока Домен
    it('find/check Домен', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/span')
            .should('have.class', 'react-item');
    })



    //изменение компании сервера
    it('find/change company', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.class', 'react-div')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/input[1]')
            .clear()
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
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST')
    })


    //наличие блока Дата создания
    it('find/check Дата создания', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[8]/td[2]/span')
            .should('have.class', 'react-item');
    })



    //Добавление лицензии
    it('add license', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[2]/button')
            .click()
            .wait(4000);
        cy.xpath('//*[@id="form"]/div/div[1]/div[4]/div/input')
            .click()
            .type('1')
        cy.xpath('//*[@id="form"]/div/div[1]/div[5]/div/input')
            .click()
            .type('1')
        cy.xpath('//*[@id="form"]/div/div[2]/div[2]/button')
            .click()
            .wait(4000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click();
        cy.xpath('//*[@id="licenses"]/div/div/table/tbody')
            .should('have.class', 'vue-tbody')
    })


    it('check tab', () => {                      //проверил табы
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
            .should('have.class', '');
    })
})


//WV
describe('Create Weathervane', () => {
    it('creating server', () => {       //создаем сервер
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-servers.span-align')
            .click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[3]/a')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click()
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/button')
            .click()
            .wait(4000);
    })
})


describe('Weathervane', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-servers.span-align')
            .click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[3]/a')
            .click({ force: true })
            .wait(3000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click({force:true})
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click()
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
            .click()
            .wait(5000);
    })

    //нашел проверил сервер ИД
    it('find/check server ID', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока кода регистрации 
    it('find/check register code', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока Bios ID 
    it('find/check Bios ID', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока MAC адрес 
    it('find/check MAC адрес', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/span')
            .should('have.class', 'react-item');
    })



    //изменение компании сервера
    it('find/change company', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div')
            .should('have.class', 'react-div')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/input[1]')
            .clear()
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
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div/a')
            .should('have.contain', 'Kuzubov AUTOTEST')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/div/a')
            .should('have.contain', 'Kuzubov AUTOTEST')
    })


    //наличие блока Дата создания
    it('find/check Дата создания', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[8]/td[2]/span')
            .should('have.class', 'react-item');
    })



    //Добавление лицензии
    it('add license', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div/button')
            .click()
            .wait(4000);
        cy.xpath('//*[@id="form"]/div/div[2]/div[2]/button')
            .click()
            .wait(4000)
        cy.xpath('//*[@id="form"]/div/div[1]/div[4]/div/input')
            .click()
            .type('1');
        cy.xpath('//*[@id="form"]/div/div[1]/div[5]/div/input')
            .click()
            .type('1');
        cy.xpath('//*[@id="form"]/div/div[2]/div[2]/button')
            .click();
        cy.xpath('//*[@id="licenses"]/div/div/table/tbody')
            .should('have.class', 'vue-tbody');
    })


    it('check tab', () => {                      //проверил табы
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .should('have.class', '');

    })
})




//Room
describe('Create Room', () => {
    it('creating server', () => {       //создаем сервер
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[4]/a')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button')
            .click()
            .wait(3000)
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input[1]')
            .click()
            .type('Kuzubov AUTOTEST')
            .wait(4000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
        cy.xpath('//*[@id="form"]/div/div[3]/button')
            .click()
            .wait(4000);
    })
})


describe('Room', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.get('.icon-crm-servers.span-align').click();      //Перешли в продукты
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[6]/ul/li[4]/a')
            .click({ force: true })
            .wait(3000);
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/button')
            .click({force:true})
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[1]/div/div/a[1]')
            .click()
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
            .click()
            .wait(5000);
    })

    //нашел проверил сервер ИД
    it('find/check server ID', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.class', 'react-div');
    })


    //наличие блока кода регистрации 
    it('find/check register code', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока Bios ID 
    it('find/check Bios ID ', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]/div/span')
            .should('have.class', 'react-item');
    })


    //наличие блока MAC адрес 
    it('find/check MAC адрес ', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[4]/td[2]/div/span')
            .should('have.class', 'react-item');
    })



    //изменение компании сервера
    it('find/change company', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div')
            .should('have.class', 'react-div')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/i')
            .click({ force: true });
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div/input[1]')
            .clear()
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
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[5]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST')
    })


    //наличие блока Дата создания
    it('find/check Дата создания', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[7]/td[2]/span')
            .should('have.class', 'react-item');
    })



    //Добавление лицензии
    it('add license', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div/button')
            .click()
            .wait(4000);
        cy.xpath('//*[@id="form"]/div/div[4]/button')
            .click()
            .wait(4000)
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click();
        cy.xpath('//*[@id="licenses"]/div/div/table/tbody')
            .should('have.class', 'vue-tbody')
    })


    it('check tab', () => {                      //проверил табы
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .should('have.class', '');

    })
})