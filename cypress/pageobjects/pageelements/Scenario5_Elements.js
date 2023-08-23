/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Scenario5_Elements{

      
    cookieBtn(){
        return cy.get(or.Homepagelocator.cookieBtn)
    }


    comparepriceBtn(){
        return cy.xpath(or.Scenario5_locators.compareprice)
    }


    waterleidingBtn(){
        return cy.get(or.Scenario5_locators.sce5_waterleiding)
    }


    sce5_FirstResultBtn(){
        return cy.get(or.Scenario5_locators.sce5_firstresultelement)
   }

    

    sce5_waterleidingBtn(){
        return cy.get(or.Scenario5_locators.waterleiding)
    }


    sce5_reparenBtn(){
        return cy.get(or.Scenario5_locators.sce5_Reparen)
    }


    sce5_durationBtn(){
        return cy.get(or.Scenario5_locators.sce5_duration)
    }
   

    sce5_comparePriceBtn(){
        return cy.get(or.Scenario5_locators.sce5_compareprice)
   }


   sce5_NextQuestionBtn(){
    return cy.get(or.Scenario5_locators.sce5_NextQuestion)
}


sce5_AdditionalInfo(){
    return cy.get(or.Scenario5_locators.sce5_AdditionalInfoField)
}

sce5_EmailField(){
    return cy.get(or.Scenario5_locators.sce5_Email)
}



sce5_FurtherBtn(){
    return cy.get(or.Scenario5_locators.sce5_FurtherBtn)
}

sce5_NameField(){
 return cy.get(or.Scenario5_locators.sce5_Name)
}



sce5_TelephoneField(){
 return cy.get(or.Scenario5_locators.sce5_Telephone)
}

   

}