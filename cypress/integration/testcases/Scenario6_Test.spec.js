/// <reference types="cypress" />

import Scenario6_Actions from "../../pageobjects/pageactions/Scenario6_Actions";

const allure = Cypress.Allure.reporter.getInterface();


describe("Testing the Scenario 6 ",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


      const sce_6 = new Scenario6_Actions()

      beforeEach(()=>{
        
        cy.visit("http://localhost:3000/noord-brabant/tilburg/loodgieter/smeets-installatietechniek") 
        sce_6.clickCookieBtn()   
        
        cy.wait(10000);

    })   


    it('Testing Scenario 6', () => {

        
       
          allure.feature("Testing Scenario 6")
  
          
        //  sce_2.clickcategorytile()

        //  cy.wait(10000);
  
        //  cy.contains('Vind een top 10').should('be.visible');

        //  cy.scrollTo(0, 700);

         sce_6.sce6_clickgetquote()

         cy.wait(7000);


         cy.contains('Waar zoek je een loodgieter?').should('be.visible');


         sce_6.sce6_enterplace()


         cy.wait(5000);

         cy.get('body').click()

         sce_6.sce6_clickverder()

         cy.wait(6000);
         
         sce_6.sce6_clickwaterleiding()

        cy.wait(5000);

         sce_6.sce6_click_Reparen()

         cy.wait(10000)

         sce_6.sce6_clickduration()

         cy.wait(5000)
        //  cy.contains('Hoe oud is de woning?').should('be.visible');


        //  sce_6.clickouderdan()
        //  cy.wait(6000)

        //  sce_6.clickwanneerBtn()
        //  cy.wait(6000)


        //  sce_6.clickwanneerBtn()
        //  cy.wait(5000)

        //  sce_6.clickfotosnee()
        //  cy.wait(6000)

        //  sce_6.enterAdditionalInfo()
        //  cy.wait(6000)


        //  sce_6.clickverderBtn()
        //  cy.wait(6000)

        //  sce_6.enteremailfield()
        //  cy.wait(6000)


        //  sce_6.clickverderBtn()
        //  cy.wait(6000)


        //  sce_6.enternamefield()

        //  sce_6.clickverderBtn()
        //  cy.wait(6000)


        //  sce_6.entertelefoonfield()
        //  cy.wait(2000)

        //  sce_6.clickverderBtn()
        //  cy.wait(6000)


        //  cy.contains('Je aanvraag is verstuurd!').should('be.visible');

        //  sce_6.clickverderBtn()
        //  cy.wait(3000)
       
          
        });

})