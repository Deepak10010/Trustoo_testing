/// <reference types="cypress" />


import TRUS_3983_Elements from "../pageelements/TRUS_3983_Elements";

export default class TRUS_3983_Actions{

    constructor(){
        globalThis.element = new TRUS_3983_Elements();
    }


    clickOptionsBtn(){
        element.optionsBtn().click()
    }


    clickAanvraagen(){
        element.AanvraagenBtn().click()
    }


    clickBegindeuitlegBtn(){
        element.begindeuitlegBtn().click()
    }


    clickverderBtn(){
        element.verderBtn().click()
    }


    clickaanvraagreclamerenBtn(){
        element.aanvraagreclamerenBtn().click()
    }


    clickiksnaphetBtn(){
        element.iksnaphetBtn().click()
    }

}