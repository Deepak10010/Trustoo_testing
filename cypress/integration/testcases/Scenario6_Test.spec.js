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
       

        sce_6.clickjaBtn()


        sce_6.sce6_clicknextquestion()


         sce_6.sce6_enterAdditionalInfo()
         cy.wait(6000)


         sce_6.sce6_clicknextquestion()
         cy.wait(6000)

         sce_6.sce6_enteremailfield()
         cy.wait(6000)


         sce_6.clickverderBtn()
         cy.wait(6000)


         sce_6.sce6_enternamefield()

         sce_6.clickverderBtn()
         cy.wait(6000)


         sce_6.sce6_entertelefoonfield()
         cy.wait(2000)

         sce_6.clickverderBtn()
         cy.wait(6000)


         cy.contains('Je aanvraag is verstuurd!').should('be.visible');

       
       
          
        });

})