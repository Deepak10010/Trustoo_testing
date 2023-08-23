/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Scenario3_Elements{

      
    cookieBtn(){
        return cy.get(or.Homepagelocator.cookieBtn)
    }


    waterleidingBtn(){
        return cy.get(or.Scenario3_locators.sce3_waterleiding)
    }


    sce3_FirstResultBtn(){
        return cy.get(or.Scenario3_locators.sce3_firstresultelement)
   }

    

    sce3_waterleidingBtn(){
        return cy.get(or.Scenario3_locators.waterleiding)
    }


    sce3_reparenBtn(){
        return cy.get(or.Scenario3_locators.sce3_Reparen)
    }


    sce3_durationBtn(){
        return cy.get(or.Scenario3_locators.sce3_duration)
    }
   

    sce3_comparePriceBtn(){
        return cy.get(or.Scenario3_locators.sce3_compareprice)
   }


   sce3_NextQuestionBtn(){
    return cy.get(or.Scenario3_locators.sce3_NextQuestion)
}


sce3_AdditionalInfo(){
    return cy.get(or.Scenario3_locators.sce3_AdditionalInfoField)
}

sce3_EmailField(){
    return cy.get(or.Scenario3_locators.sce3_Email)
}



sce3_FurtherBtn(){
    return cy.get(or.Scenario3_locators.sce3_FurtherBtn)
}

sce3_NameField(){
 return cy.get(or.Scenario3_locators.sce3_Name)
}



sce3_TelephoneField(){
 return cy.get(or.Scenario3_locators.sce3_Telephone)
}

   

}