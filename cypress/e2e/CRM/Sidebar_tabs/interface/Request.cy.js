describe('Request', () => {
    beforeEach(() => {
        cy.visit('http://10.0.77.50');
        cy.get('.glyphicon-list-alt.span-align').click();;   
      })
    
    it('Request tab', () => {
        cy.visit('http://10.0.77.50');
        cy.get('.glyphicon-list-alt.span-align').click();;   
      })

    it('checking the search box inside the tab', () => {        //поле поиска
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/form/input')
        .click()
        .type('111')
        .should('have.value', '111')
        cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
        .click();
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr')
        .should('have.contain', '111')
        })


it('data check', () => {
    cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
    .click({force:true});
    cy.xpath('//*[@id="date_from"]')
    .type('03.09.2021', {force:true});
    cy.xpath('//*[@id="date_to"]')
    .type('03.09.2021', {force:true});
    cy.xpath('//*[@id="perpop"]/div/a[1]')
    .click({force:true});
    cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/form/span/button')
    .click()
    .wait(5000);
    cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[6]')
    .should('have.contain', '03.09.2021');
})

it('data check cancel', () => {
    cy.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div[3]/a[1]')
    .click({force:true});
    cy.xpath('//*[@id="date_from"]')
    .type('15.08.2021', {force:true});
    cy.xpath('//*[@id="date_to"]')
    .type('15.08.2021', {force:true});
    cy.xpath('//*[@id="perpop"]/div/a[2]')
    .click({force:true});
})



        it('Checking status filters server', () => {       //Проверка фильтров
            cy.xpath('//*[@id="statuses"]/a[2]')
            .click();                                                        //server_test_on
            cy.xpath('//*[@id="statuses"]/a[2]')
            .should('have.class', 'button-group-item settype server_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'server_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[2]')
            .click();                                                            //server_test_off
            cy.xpath('//*[@id="statuses"]/a[2]')
            .should('have.class', 'button-group-item settype server_test');
        })


            it('Checking status filters mcu', () => {
            cy.xpath('//*[@id="statuses"]/a[3]')
            .click();                                                           //mcu_test_on
            cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item settype mcu_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'mcu_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[3]')
            .click();                                                           //mcu_test_off
            cy.xpath('//*[@id="statuses"]/a[3]')
            .should('have.class', 'button-group-item settype mcu_test');
            })





            it('Checking status filters room', () => {
            cy.xpath('//*[@id="statuses"]/a[4]')
            .click();                                                          //room_test_on
            cy.xpath('//*[@id="statuses"]/a[4]')
            .should('have.class', 'button-group-item settype room_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'room_test')
           .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[4]')
            .click();                                                           //room_test_off
            cy.xpath('//*[@id="statuses"]/a[4]')
            .should('have.class', 'button-group-item settype room_test');
        })



            it('Checking status filtersroom_pro', () => {
            cy.xpath('//*[@id="statuses"]/a[5]')
            .click();                                                            //room_pro_test_on
            cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item settype room_pro_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'room_pro_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[5]')
            .click();                                                           //room_pro_test_off
            cy.xpath('//*[@id="statuses"]/a[5]')
            .should('have.class', 'button-group-item settype room_pro_test');
        })

            it('Checking status filters terminal', () => {
            cy.xpath('//*[@id="statuses"]/a[6]')
            .click();                                                             //terminal_test_on
            cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item settype terminal_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'terminal_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[6]')
            .click();                                                           //terminal_test_off
            cy.xpath('//*[@id="statuses"]/a[6]')
            .should('have.class', 'button-group-item settype terminal_test');

        })


            it('Checking status filters kiosk', () => {
            cy.xpath('//*[@id="statuses"]/a[7]')
            .click();                                                               //kiosk_test_on
            cy.xpath('//*[@id="statuses"]/a[7]')
            .should('have.class', 'button-group-item settype kiosk_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'kiosk_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[7]')
            .click();                                                           //kiosk_test_off
            cy.xpath('//*[@id="statuses"]/a[7]')
            .should('have.class', 'button-group-item settype kiosk_test');
        })




            it('Checking status filters tracker', () => {
            cy.xpath('//*[@id="statuses"]/a[8]')
            .click();                                                              //tracker_test_on
            cy.xpath('//*[@id="statuses"]/a[8]')
            .should('have.class', 'button-group-item settype tracker_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'tracker_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[8]')
            .click();                                                           //tracker_test_off
            cy.xpath('//*[@id="statuses"]/a[8]')
            .should('have.class', 'button-group-item settype tracker_test');
        })


            it('Checking status filtersweathervane', () => {
            cy.xpath('//*[@id="statuses"]/a[9]')
            .click();                                                            //weathervane_test_on
            cy.xpath('//*[@id="statuses"]/a[9]')
            .should('have.class', 'button-group-item settype weathervane_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'weathervane_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[9]')
            .click();                                                           //weathervane_test_off
            cy.xpath('//*[@id="statuses"]/a[9]')
            .should('have.class', 'button-group-item settype weathervane_test');
        })



            it('Checking status filters integrit', () => {
            cy.xpath('//*[@id="statuses"]/a[10]')
            .click();                                                           //integrit_server_on
            cy.xpath('//*[@id="statuses"]/a[10]')
            .should('have.class', 'button-group-item settype integrit_server active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'integrit_server')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[10]')
            .click();                                                           //integrit_server_off
            cy.xpath('//*[@id="statuses"]/a[10]')
            .should('have.class', 'button-group-item settype integrit_server');
        })


            it('Checking status filters options', () => {
            cy.xpath('//*[@id="statuses"]/a[11]')
            .click();                                                           //options_test_on
            cy.xpath('//*[@id="statuses"]/a[11]')
            .should('have.class', 'button-group-item settype options_test active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'options_test')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[11]')
            .click();                                                           //options_test_off
            cy.xpath('//*[@id="statuses"]/a[11]')
            .should('have.class', 'button-group-item settype options_test');
        })



            it('Checking status filters partnership', () => {
            cy.xpath('//*[@id="statuses"]/a[12]')
            .click();                                                           //partnership_on
            cy.xpath('//*[@id="statuses"]/a[12]')
            .should('have.class', 'button-group-item settype partnership active')
            .wait(3000);
            cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div/table/tbody/tr/td[2]')
            .should('have.contain', 'partnership')
            .wait(3000);
            cy.xpath('//*[@id="statuses"]/a[12]')
            .click();                                                           //partnership_off
            cy.xpath('//*[@id="statuses"]/a[12]')
            .should('have.class', 'button-group-item settype partnership');
            })



        it('added a request', () => {
            cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/button')
            .click()
            .wait(5000);
            cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
            .click()
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
            cy.xpath('//*[@id="form"]/div[2]/button')
            .click();
        })
        

        it('cancel added a request', () => {
            cy.xpath('//*[@id="wrapper"]/div/div/div[2]/div[1]/div[2]/button')
            .click()
            .wait(5000);
            cy.xpath('/html/body/div[2]/div/div/div/div[2]/form/div[1]/div[1]/div/input[1]')
            .click()
            .type('Kuzubov AUTOTEST')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Kuzubov AUTOTEST')
            .wait(2000);
            cy.xpath('//*[@id="form"]/div[2]/a')
            .click();
        })
        
        
    })   
