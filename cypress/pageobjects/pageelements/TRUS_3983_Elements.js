/// <reference types="cypress" />


const or = require("../../locators.json")

export default class TRUS_3983_Elements{

    optionsBtn(){
        return cy.get(or.TRUS_3983_locators.options)
    }

    AanvraagenBtn(){
        return cy.get(or.TRUS_3983_locators.aanvragen)
    }


    begindeuitlegBtn(){
        return cy.get(or.TRUS_3983_locators.Begindeuitleg)
    }


    verderBtn(){
        return cy.get(or.TRUS_3983_locators.verder)
    }


    aanvraagreclamerenBtn(){
        return cy.get(or.TRUS_3983_locators.aanvraag_reclameren)
    }

    iksnaphetBtn(){
        return cy.get(or.TRUS_3983_locators.Iksnaphet)
    }

}