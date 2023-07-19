/// <reference types="cypress" />

import HomePageActions from "../../pageobjects/pageactions/HomePageActions"


const allure = Cypress.Allure.reporter.getInterface();


describe("Scenario1 ",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    const firstPage = new HomePageActions()

    

    beforeEach(()=>{
      
      cy.visit("https://trustoo.nl:3000")   
        firstPage.clickCookieBtn()   

    })   


    it('Testing Scenario 1', () => {

        allure.feature("Completing the request process using the Service name and the location name from the home page")
        allure.description("Entering service name")
        cy.log('Entering service name');
        
        cy.wait(3000);

        firstPage.enterdienstvalue()

        cy.wait(10000);

        cy.get('body').click()
        cy.wait(4000);

        allure.description("Entering Location name")
        cy.log("Entering Location name")
        firstPage.enterlocatievalue()

        cy.wait(10000);

        cy.get('body').click()
        cy.wait(4000);


        allure.description("Clicking search button")
        cy.log("Clicking search button")
        firstPage.clickzoekenbtn()
        cy.wait(3000);
       
        //cy.visit("http://localhost:3000/noord-brabant/tilburg/loodgieter")

        cy.contains('Vind een top 10 Loodgieter in Tilburg').should('be.visible');
        cy.scrollTo(0, 500);



        cy.log("Clicking the first result")
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

        cy.log("Entering Additional information field")
        firstPage.EnterAdditionalInfoField()
        cy.wait(4000);


        firstPage.clickNextQuestionBtn()
        cy.wait(4000);

        cy.log("Enter Email")
        firstPage.EnterEmail()
        cy.wait(4000);


        firstPage.clickFurtherBtn()
        cy.wait(4000);

        cy.log("Enter the Name")
        firstPage.EnterNameField()
        cy.wait(4000);


        firstPage.clickFurtherBtn()
        cy.wait(4000);

        cy.log("Enter the telephone number")
        firstPage.EnterTelephoneField()
        cy.wait(4000);
        

        firstPage.clickFurtherBtn()
        cy.wait(4000);


        cy.contains('Je aanvraag is verstuurd!').should('be.visible');

        
      });
    
    

})