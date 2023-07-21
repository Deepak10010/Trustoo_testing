/// <reference types="cypress" />


import Scenario6_Elements from "../pageelements/Scenario6_Elements";

export default class Scenario6_Actions{

    constructor(){
        globalThis.element = new Scenario6_Elements();
    }


    clickCookieBtn(){
        element.cookieBtn().click();
    }

   
    sce6_clickcategorytile(){
        element.sce6_categorytile().click()
    }

  
    sce6_clickgetquote(){
        element.sce6_getquote().click()
    }

    sce6_enterplace(){
        element.sce6_place().type('Tilburg')
    }


    sce6_clickverder(){
        element.sce6_verder().click()
    }


    sce6_clickwaterleiding(){
        element.sce6_waterleiding().click()
    }


    sce6_click_Reparen(){
        element.sce6_Reparen().click()
    }


    sce6_clickduration(){
        element.sce6_duration().click()
    }


    sce6_clickminderdan(){
        element.sce6_minderdan().click()
    }


    sce6_clickouderdan(){
        element.sce6_ouderdanbBtn().click()
    }


    sce6_clickwanneerBtn(){
        element.sce6_wanneerBtn().click()
    }


    sce6_clickfotosnee(){
        element.sce6_fotosneeBtn().click()
    }


    sce6_enterAdditionalInfo(){
        element.sce6_additionalInfo().type('Niets voor nu')
    }


    
    sce6_enteremailfield(){
        element.sce6_emailfield().type('dee@gmail.com')
    }
    

    sce6_enternamefield(){
        element.sce6_namefield().type('Dee')
    }


    sce6_entertelefoonfield(){
        element.sce6_telefoonfield().type('31212353123')
    }

}