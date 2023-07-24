/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Scenario6_Elements{

      
    cookieBtn(){
        return cy.get(or.Homepagelocator.cookieBtn)
    }


    sce6_categorytile(){
        return cy.get(or.Scenario6_locators.sce6_category)
    }


    sce6_getquote(){
        return cy.get(or.Scenario6_locators.sce6_getquote)
    }


    sce6_place(){
        return cy.xpath(or.Scenario6_locators.sce6_place)
    }


    sce6_verder(){
        return cy.get(or.Scenario6_locators.sce6_Further)
    }

    sce6_waterleiding(){
        return cy.get(or.Scenario6_locators.sce6_waterleiding)
    }

  

    sce6_Reparen(){
        return cy.get(or.Scenario6_locators.sce6_Reparen)
    }

    sce6_duration(){
        return cy.get(or.Scenario6_locators.sce6_duration)
    }


    sce6_minderdan(){
        return cy.get(or.Scenario6_locators.sce6_minder_dan_20m)
    }


    jaBtn(){
        return cy.get(or.Scenario6_locators.ja)
    }


   sce6_Nextquestion(){
    return cy.get(or.Scenario6_locators.sce6_NextQuestion)
   }


    sce6_additionalInfo(){
        return cy.get(or.Scenario6_locators.sce6_AdditionalInfoField)
    }


   
    sce6_emailfield(){
        return cy.get(or.Scenario6_locators.sce6_Email)
    }


    verderBtn(){
        return cy.get(or.Scenario6_locators.verder)
    }


    sce6_namefield(){
        return cy.get(or.Scenario6_locators.sce6_Name)
    }


    sce6_telefoonfield(){
        return cy.get(or.Scenario6_locators.sce6_Telephone)
    }

}