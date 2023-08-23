/// <reference types="cypress" />

import Scenario5_Actions from "../../pageobjects/pageactions/Scenario5_Actions";

const allure = Cypress.Allure.reporter.getInterface();


describe("Testing the Scenario 5 ",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


      const sce_5 = new Scenario5_Actions()

      beforeEach(()=>{
        
        cy.visit("http://localhost:3000/noord-brabant/tilburg/loodgieter") 
        sce_5.clickCookieBtn()   
        
        cy.wait(10000);

    })   


    it('Testing Scenario 5', () => {

          cy.wait(4000);
       
          allure.feature("Testing Scenario 5")
  
              
          cy.scrollTo(0, 1450);

          cy.contains('Vergelijk prijsopgaven').should('be.visible');

          sce_5.clickcomparepriceBtn()


          cy.wait(7000);


        sce_5.sce5_clickwaterleding()
        cy.wait(5000);


        sce_5.sce5_clickreparen()
        cy.wait(7000);



        sce_5.sce5_clickduration()
        cy.wait(7000);



        sce_5.sce5_clickNextQuestionBtn()
        cy.wait(7000);


    
        cy.log("Enter Email")
        sce_5.sce5_EnterEmail()
        cy.wait(4000);


        sce_5.sce5_clickFurtherBtn()
        cy.wait(4000);


        cy.log("Enter the Name")
        sce_5.sce5_EnterNameField()
        cy.wait(4000);


        sce_5.sce5_clickFurtherBtn()
        cy.wait(4000);


        cy.log("Enter the telephone number")
        sce_5.sce5_EnterTelephoneField()
        cy.wait(4000);
        

        sce_5.sce5_clickFurtherBtn()
        cy.wait(6000);
       
        cy.contains('Je aanvraag is verstuurd!').should('be.visible');




          
        });

})