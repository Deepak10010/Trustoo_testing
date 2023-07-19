/// <reference types="cypress" />

import Scenario3_Actions from "../../pageobjects/pageactions/Scenario3_Actions";

const allure = Cypress.Allure.reporter.getInterface();


describe("Testing the Scenario 3 ",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


      const sce_3 = new Scenario3_Actions()

      beforeEach(()=>{
        
        cy.visit("http://localhost:3000/noord-brabant/tilburg/loodgieter") 
        sce_3.clickCookieBtn()   
        
        cy.wait(10000);

    })   


    it('Testing Scenario 3', () => {

        
        cy.wait(4000);
          allure.feature("Testing Scenario 3")
  
          
        sce_3.clickwaterleidingBtn()

        cy.wait(10000);
  
        cy.contains('Top 10 loodgieters in Tilburg').should('be.visible');

        cy.scrollTo(0, 700);

        sce_3.sce3_clickFirstResult()

        cy.wait(7000);


        sce_3.sce3_clickwaterleding()
        cy.wait(5000);


        sce_3.sce3_clickreparen()
        cy.wait(7000);



        sce_3.sce3_clickduration()
        cy.wait(7000);


        sce_3.sce3_clickComparePrice()
        cy.wait(7000);


        sce_3.sce3_clickNextQuestionBtn()
        cy.wait(7000);


        cy.log("Entering Additional information field")
        sce_3.sce3_EnterAdditionalInfoField()
        cy.wait(4000);


        sce_3.sce3_clickNextQuestionBtn()
        cy.wait(4000);


        cy.log("Enter Email")
        sce_3.sce3_EnterEmail()
        cy.wait(4000);


        sce_3.sce3_clickFurtherBtn()
        cy.wait(4000);


        cy.log("Enter the Name")
        sce_3.sce3_EnterNameField()
        cy.wait(4000);


        sce_3.sce3_clickFurtherBtn()
        cy.wait(4000);


        cy.log("Enter the telephone number")
        sce_3.sce3_EnterTelephoneField()
        cy.wait(4000);
        

        sce_3.sce3_clickFurtherBtn()
        cy.wait(6000);
       
        cy.contains('Je aanvraag is verstuurd!').should('be.visible');


          
        });

})