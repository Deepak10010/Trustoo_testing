
/// <reference types="cypress" />

import Scenario5_Elements  from "../pageelements/Scenario5_Elements"


export default class Scenario4_Actions{

    constructor(){
        globalThis.element = new Scenario5_Elements();
    }


   
    clickCookieBtn(){
        element.cookieBtn().click();
    }


    clickcomparepriceBtn(){
        element.comparepriceBtn().click()
    }

    clickwaterleidingBtn(){
        element.waterleidingBtn().click()
    }


    sce5_clickFirstResult(){
        element.sce5_FirstResultBtn().click()
    }


    sce5_clickwaterleding(){
        element.sce5_waterleidingBtn().click()
    }


    sce5_clickreparen(){
        element.sce5_reparenBtn().click()
    }


    sce5_clickduration(){
        element.sce5_durationBtn().click()
    }


    sce5_clickComparePrice(){
        element.sce5_comparePriceBtn().click()
    }


    sce5_clickNextQuestionBtn(){
        element.sce5_NextQuestionBtn().click()
    }


    sce5_EnterAdditionalInfoField(){
        element.sce5_AdditionalInfo().type('Niets voor nu')
    }



    sce5_EnterEmail(){
        element.sce5_EmailField().type('dee@gmail.com')
    }


    sce5_clickFurtherBtn(){
        element.sce5_FurtherBtn().click()
    }


    sce5_EnterNameField(){
        element.sce5_NameField().type('Dee Dee')
    }


    sce5_EnterTelephoneField(){
        element.sce5_TelephoneField().type('3123123412')
    }

}