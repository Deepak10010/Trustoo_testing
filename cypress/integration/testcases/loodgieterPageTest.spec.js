/// <reference types="cypress" />

import loodgieterPageActions from "../../pageobjects/pageactions/loodgieterPageActions"



describe("Click on one of the Loodgieters",()=> {

    const firstPage = new loodgieterPageActions()
    

    beforeEach(()=>{
        firstPage.navigateToURL()       

    })


    


    it("Validate Title of the page",()=>{
        firstPage.validateTitle().should('eq','Top 10 Loodgieters in Voorhout | Prijzen & Reviews | Trustoo')
        
    })

    


    it('Request process automation', () => {

        firstPage.clickCookieBtn()

        // cy.contains('Vind een top 10 Loodgieter in Voorhout').should('be.visible');
        
        cy.wait(3000);

        
        firstPage.clickInitialWaterleidingBtn1()
       
        cy.wait(3000);


        firstPage.clickResultBtn()

        cy.wait(5000);

        firstPage.clickWaterleidingBtn()

        cy.wait(3000)
        firstPage.clickReparenBtn()

        cy.wait(4000)
        firstPage.clickInOverlayBtn()

        cy.wait(4000)
        firstPage.clickComparePriceBtn()

        cy.wait(4000)
        cy.contains('Op basis van').should('be.visible');

        firstPage.clickNextQuestionBtn1()

        cy.wait(4000)
        firstPage.EnterTextIntoMoreInfoField()

        cy.wait(4000)
        firstPage.clickNextQuestionBtn1()

        cy.wait(4000)
        firstPage.EnterEmail()

        cy.wait(4000)
        firstPage.ClickOnTheNextBtn_EmailPage()

        cy.wait(2000)
        firstPage.EnterTheName()

        cy.wait(4000)
        firstPage.ClickOnTheNextBtn_EmailPage()

        cy.wait(4000)
        firstPage.EnterTheTelephone()

        firstPage.clickOnReceiveQuoteBtn()

        cy.wait(7000)
        cy.contains('Je aanvraag is verstuurd!').should('be.visible');

  

      });
    
    

})