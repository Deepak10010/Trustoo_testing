/// <reference types="cypress" />


import Scenario2_Elements from "../pageelements/Scenario2_Elements";

export default class Scenario2_Actions{

    constructor(){
        globalThis.element = new Scenario2_Elements();
    }


    clickCookieBtn(){
        element.cookieBtn().click();
    }

   
    clickcategorytile(){
        element.categorytile().click()
    }

  
    clickfirstresult(){
        element.firstresult().click()
    }

    enterplace(){
        element.place().type('Tilburg')
    }


    clickverder(){
        element.verder().click({ multiple: true })
    }


    clickresultelement(){
        element.resultelement().click()
    }

}