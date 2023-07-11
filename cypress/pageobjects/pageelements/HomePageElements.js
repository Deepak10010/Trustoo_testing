/// <reference types="cypress" />


const or = require("../../locators.json")

export default class HomePageElements{

    cookieBtn(){
        return cy.get(or.Homepagelocator.cookieBtn)
    }


   Dienstdropdown(){
        return cy.get(or.Homepagelocator.dienst)
   }


   Locatiefield(){
        return cy.get(or.Homepagelocator.locatie)
   }



   zoekenButton(){
        return cy.get(or.Homepagelocator.zoeken)
   }

   
   FirstResultBtn(){
        return cy.get(or.Homepagelocator.FirstResultElement)
   }

 
   waterleidingBtn(){
        return cy.get(or.Homepagelocator.waterleiding)
   }


   ReparenBtn(){
        return cy.get(or.Homepagelocator.Reparen)
   }


   DurationBtn(){
        return cy.get(or.Homepagelocator.duration)
   }


   comparePriceBtn(){
        return cy.get(or.Homepagelocator.compareprice)
   }


   NextQuestionBtn(){
        return cy.get(or.Homepagelocator.NextQuestion)
   }


   AdditionalInfo(){
        return cy.get(or.Homepagelocator.AdditionalInfoField)
   }


   EmailField(){
        return cy.get(or.Homepagelocator.Email)
   }


   FurtherBtn(){
        return cy.get(or.Homepagelocator.FurtherBtn)
   }


}