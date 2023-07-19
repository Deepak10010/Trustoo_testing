/// <reference types="cypress" />

import TRUS_3983_Actions from "../../pageobjects/pageactions/TRUS_3983_Actions";

const allure = Cypress.Allure.reporter.getInterface();


describe("Testing the page guide ",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


      const pageguide = new TRUS_3983_Actions()

      beforeEach(()=>{
        
        cy.visit("http://l.trustoo.nl:3001/pro/?_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2ODkyNTE1MDksImp0aSI6IkNyWGtYNjhaUzdvNWY1VmNGaVJaQ1czc01cL2U2M21oYVAyNWZCXC9QN3pUZz0iLCJpc3MiOiJ0ZXN0b2ZmaWNlLnRydXN0b28ubmwiLCJuYmYiOjE2ODkyNTE1MDksImV4cCI6MTY5MTg0MzUwOSwiZGF0YSI6eyJpZCI6MTIxOTc5LCJhZG1pbkFzT3RoZXIiOnRydWV9fQ.zqf2qifBvQmR6wiXEKyiS7Gog4ivBGMJlmjd_UGfEIFlPAxTqgHiv7E6y3YJ2Rh-cMu4QjTZ78rfR7wY_FLjUA") 
        
        cy.wait(10000);

    })   


    it('Testing Page Guide', () => {

        
      cy.wait(4000);
        allure.feature("Testing whether the page guide is working fine")

        pageguide.clickOptionsBtn()
        
        pageguide.clickAanvraagen()

        cy.wait(10000);


        cy.contains('Welkom bij je aanvragen!').should('be.visible');

        cy.contains('Begin de uitleg').should('be.visible');
        cy.wait(5000);

        pageguide.clickBegindeuitlegBtn()

        cy.wait(5000);
        cy.contains('De aanvrager (Trustoo)').should('be.visible');

        pageguide.clickverderBtn()

        cy.contains('Neem contact op met de aanvrager').should('be.visible');

        cy.wait(3000);
        pageguide.clickverderBtn()

        cy.contains('Neem contact op met de aanvrager').should('be.visible');

        cy.wait(3000);
        pageguide.clickverderBtn()

        cy.contains('De aanvrager bellen').should('be.visible');


        cy.wait(3000);
        pageguide.clickverderBtn()

        cy.contains('Een aanvraag reclameren').should('be.visible');


        cy.wait(3000);
        pageguide.clickaanvraagreclamerenBtn()


        cy.contains('Een label toevoegen').should('be.visible');

        pageguide.clickverderBtn()


        cy.contains('Automatisch antwoord').should('be.visible');

        cy.contains('Ik snap het!').should('be.visible');

        


        pageguide.clickiksnaphetBtn()
  
        
      });



    })