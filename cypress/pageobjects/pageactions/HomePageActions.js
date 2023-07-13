
/// <reference types="cypress" />

import HomePageElements  from "../pageelements/HomePageElements"


export default class HomePageActions{

    constructor(){
        globalThis.element = new HomePageElements();
    }

    navigateToURL(){
        cy.visit('/');
    }

    clickCookieBtn(){
        element.cookieBtn().click();
    }



    enterdienstvalue(){
        element.Dienstdropdown().type('Loodgieter')
    }


    
    enterlocatievalue(){
        element.Locatiefield().type('Tilburg')
    }


    clickzoekenbtn(){
        element.zoekenButton().click()
    }
   

    clickFirstResult(){
        element.FirstResultBtn().click()
    }


    clickwaterledingBtn(){
        element.waterleidingBtn().click()
    }


    clickReparenBtn(){
        element.ReparenBtn().click()
    }
 

    clickDurationBtn(){
        element.DurationBtn().click()
    }


    clickComparePrice(){
        element.comparePriceBtn().click()
    }

    clickNextQuestionBtn(){
        element.NextQuestionBtn().click()
    }



    EnterAdditionalInfoField(){
        element.AdditionalInfo().type('Niets voor nu')
    }


    EnterEmail(){
        element.EmailField().type('dee@gmail.com')
    }


    clickFurtherBtn(){
        element.FurtherBtn().click()
    }


    EnterNameField(){
        element.NameField().type('Dee Dee')
    }


    EnterTelephoneField(){
        element.TelephoneField().type('3123123412')
    }

}