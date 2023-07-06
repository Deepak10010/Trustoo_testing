
/// <reference types="cypress" />

import loodgieterPageElements  from "../pageelements/loodgieterPageElements"


export default class loodgieterPageActions{

    constructor(){
        globalThis.element = new loodgieterPageElements();
    }

    navigateToURL(){
        cy.visit('/');
    }

    clickCookieBtn(){
        element.cookieBtn().click();
    }

    
    
    enterDiensttextfield(){
        element.dienstfield().type("loodgieter");
    }


    enterLocatietextfield(){
        element.locatiefield().type("Tilburg");
    }


    clickInitialWaterleidingBtn1(){
        
        element.FirstWaterleidingBtn().click();
    }


    clickResultBtn(){
        element.ResultBtn().click();
    }


    clickWaterleidingBtn(){
        element.WaterleidingBtn().click();
    }


    clickReparenBtn(){
        element.ReparenBtn().click();
    }


    clickInOverlayBtn(){
        element.InOverlayBtn().click();
    }


    clickComparePriceBtn(){
        element.ComparePriceOptionBtn().click();
    }


    clickNextQuestionBtn1(){
        element.NextQuestionBtn1().click();
    }


    EnterTextIntoMoreInfoField(){
        element.MoreInforTextField().type("niets voor nu");
    }


    EnterEmail(){
        element.EmailField().type("dee@gmail.com");
    }

    ClickOnTheNextBtn_EmailPage(){
        element.NextBtnEmailPage().click();
    }



    EnterTheName(){
        element.NameTextField().type("Deepak");
    }


    EnterTheTelephone(){
        element.TelephoneField().type(31345231456);
    }


    clickOnReceiveQuoteBtn(){
        element.ReceiveQuoteBtn().click();
    }
 

}