/// <reference types="cypress" />

import HomePageActions from "../../pageobjects/pageactions/HomePageActions"



describe("Click on one of the Loodgieters",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    const firstPage = new HomePageActions()
    

    beforeEach(()=>{
        firstPage.navigateToURL()    
        firstPage.clickCookieBtn()   

    })   


    it('Scenario 1', () => {

        
        // cy.wait(3000);

        // firstPage.enterdienstvalue()

        // cy.wait(7000);

        // cy.get('body').click()
        // cy.wait(4000);


        // firstPage.enterlocatievalue()

        // cy.wait(7000);

        // cy.get('body').click()
        // cy.wait(4000);

        // firstPage.clickzoekenbtn()
        // cy.wait(3000);
       
        cy.visit("http://localhost:3000/noord-brabant/tilburg/loodgieter")

        cy.contains('Vind een top 10 Loodgieter in Tilburg').should('be.visible');
        cy.scrollTo(0, 500);

        firstPage.clickFirstResult()

        cy.wait(3000);


        firstPage.clickwaterledingBtn()
        cy.wait(5000);

        firstPage.clickReparenBtn()
        cy.wait(7000);

        firstPage.clickDurationBtn()
        cy.wait(7000);


        firstPage.clickComparePrice()
        cy.wait(7000);


        firstPage.clickNextQuestionBtn()
        cy.wait(7000);


        firstPage.EnterAdditionalInfoField()
        cy.wait(4000);


        firstPage.clickNextQuestionBtn()
        cy.wait(4000);

        firstPage.EnterEmail()
        cy.wait(4000);


        firstPage.clickNextQuestionBtn()
        cy.wait(4000);


        cy.get('body').click()



      });
    
    

})