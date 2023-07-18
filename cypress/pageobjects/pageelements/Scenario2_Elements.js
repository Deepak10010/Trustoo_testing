/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Scenario2_Elements{

      
    cookieBtn(){
        return cy.get(or.Homepagelocator.cookieBtn)
    }


    categorytile(){
        return cy.get(or.Scenario2_locators.category)
    }


    firstresult(){
        return cy.get(or.Scenario2_locators.FirstResultElement)
    }


    place(){
        return cy.xpath(or.Scenario2_locators.place)
    }


    verder(){
        return cy.get(or.Scenario2_locators.Further)
    }

    resultelement(){
        return cy.get(or.Scenario2_locators.PageResult)
    }

}