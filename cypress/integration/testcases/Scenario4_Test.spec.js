/// <reference types="cypress" />

import Scenario4_Actions from "../../pageobjects/pageactions/Scenario4_Actions";

const allure = Cypress.Allure.reporter.getInterface();


describe("Testing the Scenario 4 ",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


      const sce_4 = new Scenario4_Actions()

      beforeEach(()=>{
        
        cy.visit("http://localhost:3000/noord-brabant/tilburg/loodgieter") 
        sce_4.clickCookieBtn()   
        
        cy.wait(10000);

    })   


    it('Testing Scenario 4', () => {

        
        cy.wait(4000);
          allure.feature("Testing Scenario 4")


          sce_4.clickwaterleidingBtn()


        //  sce_4.clickfirstresult()
  
          

        //     // Click the link and handle new tab
        // cy.get('a[href="/noord-brabant/tilburg/loodgieter/smeets-installatietechniek?filters=eyJzZXJ2aWNlVXJsIjoibG9vZGdpZXRlciIsInBhZ2UiOjEsInJlZ2lvblVybCI6Im5vb3JkLWJyYWJhbnQiLCJsb2NhdGlvbiI6InRpbGJ1cmciLCJfc2ltdWxhdGVNYXRjaGVzIjp0cnVlLCJhbnN3ZXJzIjpbeyJxdWVzdGlvbklkIjoyNDIsIm9wdGlvbnMiOlsxNTIyXX1dfQ%3D%3D&fromProviderId=smeets-installatietechniek&fromResults=1&originCity=tilburg&originRegion=noord-brabant&top10page=1"]')
        // .should('have.attr', 'target', '_blank') // Check if the link opens in a new tab
        // .invoke('removeAttr', 'target') // Remove the target attribute to prevent new tab opening
        // .invoke('attr', 'rel', 'noopener') // Add rel="noopener" to the link
        // .click(); // Click the link

        cy.xpath('//h3[contains(text(), "Smeets Installatietechniek")]')
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .invoke('attr', 'rel', 'noopener')
        .click()
 

        cy.wait(5000)
      
        sce_4.clickgetquoteBtn()




     
     
          
        });

})