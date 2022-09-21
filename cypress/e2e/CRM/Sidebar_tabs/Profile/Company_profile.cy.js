describe('Company', () => {
    beforeEach(() => {
        cy.log('Открываем сайт');
        cy.visit('https://beta.crm.trueconf.com');      //переходим на вкладку Компания
        cy.log('Раскрываем левое меню')
        cy.get('.sidebar-toggle-state')
            .click();
        cy.log('Открываем карточку "Компании"');
        cy.get('.icon-crm-company.span-align')
            .click()
            .wait(5000);
    })

    it('adding a company', () => {       //Добавление компании
        cy.log('Нажимаем "Добавить компанию"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/button[3]')
            .click()
            .wait(3000);
        cy.log('Вводим и проверяем название компании');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[1]/div/input')
            .type('SamokhinAutotest')
            .should('have.value', 'SamokhinAutotest');
        cy.log('Вводим и проверяем город');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[2]/div/input')
            .type('Харьков')
            .should('have.value', 'Харьков');
        cy.log('Вводим и проверяем сайт');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[4]/div/input')
            .type('www.www.com')
            .should('have.value', 'www.www.com');
        cy.log('Выбираем и проверяем страну');
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div/div[5]/div/input[1]')
            .click({ force: true })
            .type('Russian Federation')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Russian Federation');
        cy.xpath('//*[@id="form"]/button').click();
    })


    it('open profile', () => {       // открыл профиль компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
    })


    it('find/change name', () => {       // нашел и изменил имя компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем название компании');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.contain', 'SamokhinAutotest');
        cy.log('Запускаем редактирование названия компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div/i')
            .click({ force: true });
        cy.log('Добавляем текст к назвнаию компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div/input')
            .type('11112222');
        cy.log('Вводим "Примечание" перед сохранением')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что название изменилось');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[1]/td[2]/div')
            .should('have.contain', '11112222SamokhinAutotest');
    })


    it('find/change description', () => {       // нашел и изменил описание компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "Описание"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.class', 'react-div');
        cy.log('Запускаем редактирвоание "Описания"');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим новое описание');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div/textarea')
            .type('ttttt');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что описание изменилось')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[2]/td[2]/div')
            .should('have.contain', 'ttttt');
    })


    it('find/change owner', () => {       // нашел и изменил владельца компании
        // Генерируем случайного "Владельца"
        const owners = ['Александр Самохин', 'Сара Мислимова', 'Семен Самойлов', 'Артур Глушенко']
        let getRandomOwner = Math.floor(Math.random() * owners.length)
        var owner = owners[getRandomOwner];
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        // let currentOwner = document.querySelector('#wrapper > div > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(3) > a > p').textContent
        cy.log('Проверияем текущего "Владельца"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div')
            .should('have.contain', 'Тестовый сертификат');
        cy.log('Нажимаем "Редактировть" "Владельца"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div/i')
            .click({ force: true });
        cy.log('Нажимаем на поле ввода, вводим и проверяем нового владельца ');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div/input[1]')
            .click({ force: true })
            .clear()
            .type(owner)
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', owner);

            //Генерируем цисло для TIN
        function getRandomTIN(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let tin = String(getRandomTIN(1111, 9999));

        cy.log('Нажимаем "Редактировать" "TIN"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[4]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим "TIN"');
        cy.xpath('//*[@id="tin"]')
            .clear()
            .type(tin)
            .wait(3000)
            .type('{enter}');
        cy.log('Проверяем "TIN"');
        cy.xpath('//*[@id="tin"]')
            .should('have.value', tin);
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .clear()
            .type('note_text')
            .wait(3000)
        cy.log('Нажимаем "Сохранить"');
        cy.get('input[type="submit"]')
            .click({ force: true })
            .wait(6000);
        cy.log('Проверяем, что "Владелец" изменился');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[3]/td[2]/div/a')
            .should('have.contain', owner);
    })

    it('find/change country', () => {       // нашел и изменил страну компании
        cy.log('Нажимаем "Выбираем менеджера"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/button')
            .click({force:true})
        cy.log('Нажимаем "Все"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/div/div/a[1]')
            .click({force:true})
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем страну');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div/span')
            .should('have.contain', 'Russian Federation')
        cy.log('Нажимаем "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим новую страну и проверяем');
        cy.xpath('//*[@id="country"]')
            .clear()
            .type('Ukraine')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Ukraine');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что страна изменилась');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div')
            .should('have.contain', 'Ukraine')
    })


    it('find/change subject', () => {       // нашел и изменил субъект компании
        cy.log('Отрываем профиль "Компании"');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "Субьект"')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.class', 'react-div')
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[6]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим новый суьекст и проверяем');
        cy.xpath('//*[@id="area"]')
            .clear()
            .type('Краснодарский край')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Краснодарский край');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что субъект изменился');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[6]/td[2]/div')
            .should('have.contain', 'Краснодарский край')
    })


    it('find/change town', () => {       // нашел и изменил город компании
        cy.log('Нажимаем "Выбираем менеджера"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/button')
            .click({force:true});
        cy.log('Нажимаем "Все"'); 
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/div/div/a[1]')
            .click({force:true});
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем "Город"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[7]/td[2]/div')
            .should('have.contain', 'Харьков');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[6]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим новый город');
        cy.xpath('//*[@id="area"]')
            .clear()
            .type('Ашхабад')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Ашхабад');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что город изменился');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[5]/td[2]/div')
            .should('have.contain', 'Ашхабад')
    })



    it('find/change parent', () => {       // нашел и изменил родителя компании
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличия поля "Родитель"');
        cy.xpath('//*//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[8]/td[2]/div')
            .should('have.class', 'react-div');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[8]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим родителя и проверяем');
        cy.xpath('//*[@id="parent"]')
            .click({ force: true })
            .clear()
            .type('Kuzubov AUTOTEST')
            .wait(3000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что родитель поменялся');
        cy.xpath('//*//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[8]/td[2]/div')
            .should('have.contain', 'Kuzubov AUTOTEST');
    })


    it('find data field', () => {       // нашел дату компании
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем, что есть поле с "Датой');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[9]/td[2]/span')
            .should('have.class', 'react-item');
    })


    it('find tag field', () => {       // нашел тег компании
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем, что есть поле "Тег"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[10]/td[2]/span/div/div')
            .should('have.class', 'tag-inline');
    })


    it('find/change website', () => {       // нашел и изменил сайт компании
        cy.log('Нажимаем "Выбираем менеджера"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/button')
            .click({force:true});
        cy.log('Нажимаем "Все"'); 
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[1]/div[4]/div/div/a[1]')
            .click({force:true});
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем сайт компании');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[11]/td[2]/div')
            .should('have.contain', 'www.www.com');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[11]/td[2]/div/i')
            .click({ force: true });
        cy.log('Добавляем текст к адресу сайта');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[11]/td[2]/div/input')
            .type('1');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что адрес сайта поменялся');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[11]/td[2]/div')
            .should('have.contain', '1www.www.com');
    })


    it('find/change country', () => {       // нашел и изменил страну компании
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "Страна"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[12]/td[2]/div')
            .should('have.class', 'react-div')
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[12]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим город и проверяем');
        cy.xpath('//*[@id="registered_office"]')
            .clear()
            .type('г Москва')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'г Москва');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что город изменился');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[12]/td[2]/div')
            .should('have.contain', 'г Москва')
    })


    it('find/change general manager', () => {       // нашел и изменил ген дира компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "Гн дира"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[13]/td[2]/div/span')
            .should('have.class', 'react-item');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[13]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим ген дира');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[13]/td[2]/div/input')
            .type('Maksim kuzubov');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что ген дир изменен');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[13]/td[2]/div/span')
            .should('have.contain', 'Maksim kuzubov');
    })


    it('find/change taxation system', () => {       // нашел и изменил система налогообложения компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "Система налогообложения"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[14]/td[2]/div')
            .should('have.class', 'react-div');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[14]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим текст');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[14]/td[2]/div/input')
            .type('11111');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что система налогообложения изменена');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[14]/td[2]/div')
            .should('have.contain', '11111');
    })


    it('find/change income', () => {       // нашел и изменил доходы компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "Доходы"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[15]/td[2]/div')
            .should('have.class', 'react-div');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[15]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим текст');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[15]/td[2]/div/input')
            .type('11111');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что доходы изменились');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[15]/td[2]/div')
            .should('have.contain', '11111');
    })


    it('find/change capital', () => {       // нашел и изменил капитал компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click()
            .wait(3000);
        cy.log('Проверяем наличие поля "Капитал"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[16]/td[2]/div')
            .should('have.class', 'react-div');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[16]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим текст');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[16]/td[2]/div/input')
            .type('11111');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что капитал изменились');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[16]/td[2]/div')
            .should('have.contain', '11111');
    })


    it('find/change ОКВЕД', () => {       // нашел и изменил Оквэд компании
        cy.log('Открываем профиль компании');
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "ОКВЭД"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[17]/td[2]/div')
            .should('have.class', 'react-div');
        cy.log('Нажимаем кнопку "Редактировать"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[17]/td[2]/div/i')
            .click({ force: true });
        cy.log('Вводим текст');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[17]/td[2]/div/input')
            .type('11111');
        cy.log('Вводим "Примечание" перед сохранением');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[1]')
            .click({ force: true })
            .type('1234');
        cy.log('Нажимаем "Сохранить"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/div/input[2]')
            .click({ force: true })
            .wait(5000);
        cy.log('Проверяем, что капитал изменились');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[17]/td[2]/div')
            .should('have.contain', '11111');
    })


    it('find registered field', () => {       // нашел тег компании
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем наличие поля "ТЭГ"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/div/form/table/tbody/tr[10]/td[2]/span')
            .should('have.class', 'react-item company-tag');
    })



    //далее проверяю табы(Сервера, MCU, Weathervane и тд)


    it('check tab', () => {                      //проверил табы
        cy.log('Открываем профиль компании');
        cy.xpath('//*[@id="table"]/tr[1]/td[2]/a')
            .click().wait(3000);
        cy.log('Проверяем "Табы"');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[5]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[6]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[5]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[7]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[6]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[8]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[7]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[9]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[8]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[10]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[9]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[11]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[10]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[12]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[11]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[13]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[12]')
            .wait(2000)
            .should('have.class', '');

        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
            .click()
            .wait(2000)
            .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[13]')
            .wait(2000)
            .should('have.class', '');
    })

})