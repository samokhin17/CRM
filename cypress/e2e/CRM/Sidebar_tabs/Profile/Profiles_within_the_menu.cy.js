describe('Profile Users', () => {
    beforeEach(() => {
        cy.visit('https://beta.crm.trueconf.com');
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i')
        .click();      //Перешли в меню
        cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[1]/a')
        .click({force:true});
        cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
        .click()
        .wait(5000);   
      })

      //нашел и проверил блок имя
    it('fing/chech name', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[1]/td[2]/div')
        .should('have.class', 'react-div');
    })


      //нашел и проверил блок логин
      it('fing/chech Login', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[2]/td[2]/span')
        .should('have.class', 'react-item');
    })
    

      //нашел и проверил блок почта
      it('fing/chech email', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[3]/td[2]/div')
        .should('have.class', 'react-div');
    })

   

      //нашел и проверил телефон
      it('fing/chech phone number', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[4]/td[2]/div')
        .should('have.class', 'react-div');
    })

      //нашел и проверил блок руководящий
      it('fing/chech boss', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[5]/td[2]/div')
        .should('have.class', 'react-div');
    })


      //нашел и проверил блок времени
      it('fing/chech time', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[6]/td[2]/div')
        .should('have.class', 'react-div');
    })
    

      //нашел и проверил блок языка
      it('fing/chech language', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[7]/td[2]/div')
        .should('have.class', 'react-div');
    })


      //нашел и проверил блок даты создания
      it('fing/chech data create', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form[2]/table/tbody/tr[8]/td[2]/span')
        .should('have.class', 'react-item');
    })


    //нашел и проверил кнопку добавить задачу
    it('fing/chech add task button', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[1]')
        .should('have.class', 'btn-base-item');
    })


//нашел и проверил кнопку добавить группу
    it('fing/chech add group button', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[2]')
        .should('have.class', 'btn-base-item');
    })


    //нашел и проверил кнопку деактивировать
    it('fing/chech deactivate button', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[3]')
        .should('have.class', 'btn-base-item');
    })


      //нашел и проверил кнопку просмотреть логи
      it('fing/chech download certificate', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[4]')
        .should('have.class', 'btn-base-item');
    })


      //нашел и проверил кнопку новый сертификат
      it('fing/chech new certificate', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[5]')
        .should('have.class', 'btn-base-item');
    })


      //нашел и проверил кнопку новый сертификат
      it('fing/chech download certificate', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[6]')
        .should('have.class', 'btn-base-item');
    })


      //нашел и проверил кнопку перенести таск
      it('fing/chech transfer', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[7]')
        .should('have.class', 'btn-base-item');
    })

     //нашел и проверил табу группы
     it('fing/chech group tab', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
        .click()
        .should('have.class', 'active');
        cy.xpath('//*[@id="table_groups"]/tbody/tr')
        .should('have.class', 'odd');
    })


    //нашел и проверил табу сертификаты
    it('fing/chech certificate tab', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
        .click()
        .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
        .should('have.class', '');
        cy.xpath('//*[@id="table_certificates"]/tbody/tr[2]')
        .should('have.class', 'even');
    })


    //нашел и проверил табу статистика
    it('fing/chech statistic tab', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
        .click()
        .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
        .should('have.class', '');
        cy.xpath('//*[@id="curve_chart"]')
        .should('have.id', 'curve_chart');
    })


    //нашел и проверил табу планировщик
    it('fing/chech statistic tab', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
        .click()
        .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
        .should('have.class', '');
        cy.xpath('//*[@id="schedulers"]/div/div/table/tbody')
        .should('have.class', 'vue-tbody');
    })

      //нашел и проверил табу логи
      it('fing/chech logs tab', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[5]')
        .click()
        .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
        .should('have.class', '');
        cy.xpath('//*[@id="table_log"]/tbody/tr[1]')
        .should('have.class', 'odd');
      })

      //нашел и проверил табу логи
      it('fing/chech logs tab', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[6]')
        .click()
        .should('have.class', 'active');
        cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[5]')
        .should('have.class', '');
        cy.xpath('//*[@id="rights"]/div')
        .should('have.class', 'user-right-blocks');
      })
    })



    describe('Profile Groups', () => {
        beforeEach(() => {
            cy.visit('https://beta.crm.trueconf.com');
            cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/a/p/i')
            .click();      //Перешли в меню
            cy.xpath('//*[@id="wrapper"]/aside/div[2]/ul/li[10]/ul/li[2]/a')
            .click({force:true});
            cy.xpath('//*[@id="table"]/tr[1]/td[1]/a')
            .click()
            .wait(5000);   
          })

            //нашел и проверил блок имя
      it('fing/chech name', () => {
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[1]/td[2]/div')
        .should('have.class', 'react-div');
    })


  //нашел и проверил блок создавший
  it('fing/chech name', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[2]/td[2]/a')
    .should('have.contain', 'Максим Кузубов');
})


 //нашел и проверил блок дата добавления
 it('fing/chech name', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div/form/table/tbody/tr[3]/td[2]')
})

//нашел и проверил кнопку просмотреть логи
it('fing/chech new certificate', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[1]')
    .should('have.class', 'btn-base-item');
})


//нашел и проверил кнопку удалить
it('fing/chech new certificate', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[1]/div[2]')
    .should('have.class', 'btn-base-item');
})

//нашел и проверил табу пользователи
it('fing/chech Users tab', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
    .click()
    .should('have.class', 'active');
    cy.xpath('//*[@id="table_users_wrapper"]')
    .should('have.class', 'dataTables_empty');
  })


//нашел и проверил табу страны
it('fing/chech country tab', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
    .click()
    .should('have.class', 'active');
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[1]')
    .should('have.class', '');
    cy.xpath('//*[@id="country"]/div[1]')
    .should('have.class', 'country-tags');
  })


//нашел и проверил табу Права
it('fing/chech rights tab', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
    .click()
    .should('have.class', 'active');
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[2]')
    .should('have.class', '');
    cy.xpath('//*[@id="permission"]')
    .should('have.id', 'permission');
  })

  
//нашел и проверил табу Планировщ
it('fing/chech Scheduler tab', () => {
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[4]')
    .click()
    .should('have.class', 'active');
    cy.xpath('//*[@id="wrapper"]/div/div/div[3]/div/ul/li[3]')
    .should('have.class', '');
    cy.xpath('//*[@id="schedulers"]/div/div/table/tbody/tr/td')
    .should('have.class', 'vue-tbody-empty');
  })











        })

