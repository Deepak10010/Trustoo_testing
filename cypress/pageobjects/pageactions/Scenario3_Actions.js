
/// <reference types="cypress" />

import Scenario3_Elements  from "../pageelements/Scenario3_Elements"


export default class Scenario3_Actions{

    constructor(){
        globalThis.element = new Scenario3_Elements();
    }


    

    navigateToURL(){
        cy.visit('/');
    }

    clickCookieBtn(){
        element.cookieBtn().click();
    }


    clickwaterleidingBtn(){
        element.waterleidingBtn().click()
    }


    sce3_clickFirstResult(){
        element.sce3_FirstResultBtn().click()
    }


    sce3_clickwaterleding(){
        element.sce3_waterleidingBtn().click()
    }


    sce3_clickreparen(){
        element.sce3_reparenBtn().click()
    }


    sce3_clickduration(){
        element.sce3_durationBtn().click()
    }


    sce3_clickComparePrice(){
        element.sce3_comparePriceBtn().click()
    }


    sce3_clickNextQuestionBtn(){
        element.sce3_NextQuestionBtn().click()
    }


    sce3_EnterAdditionalInfoField(){
        element.sce3_AdditionalInfo().type('Niets voor nu')
    }



    sce3_EnterEmail(){
        element.sce3_EmailField().type('dee@gmail.com')
    }


    sce3_clickFurtherBtn(){
        element.sce3_FurtherBtn().click()
    }


    sce3_EnterNameField(){
        element.sce3_NameField().type('Dee Dee')
    }


    sce3_EnterTelephoneField(){
        element.sce3_TelephoneField().type('3123123412')
    }

}