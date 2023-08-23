/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Scenario3_Elements{

      
    cookieBtn(){
        return cy.get(or.Homepagelocator.cookieBtn)
    }


    waterleidingBtn(){
        return cy.get(or.Scenario4_locators.sce4_waterleiding)
    }


    firstresult(){
        return cy.get(or.Scenario4_locators.profile)
    }


    sce4_getquoteBtn(){
        return cy.get(or.Scenario4_locators.sce4_getquote)
    }


   

}