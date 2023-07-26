
/// <reference types="cypress" />

import Scenario4_Elements  from "../pageelements/Scenario4_Elements"


export default class Scenario3_Actions{

    constructor(){
        globalThis.element = new Scenario4_Elements();
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



    clickfirstresult(){
        element.firstresult().click()
    }
    
 
    clickgetquoteBtn(){
        element.sce4_getquoteBtn().click()
    }

   

}