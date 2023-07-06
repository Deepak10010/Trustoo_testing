/// <reference types="cypress" />


const or = require("../../locators.json")

export default class loodgieterPageElements{

    cookieBtn(){
        return cy.get(or.loodgieterlocator.cookieBtn)
    }


    dienstfield(){
        return cy.get(or.loodgieterlocator.dienst)
    }


    locatiefield(){
        return cy.get(or.loodgieterlocator.locatie)
    }


    FirstWaterleidingBtn(){

        return cy.get(or.loodgieterlocator.InitialWaterleidingBtn)

    }

    ResultBtn(){
        return cy.get(or.loodgieterlocator.ResultElement)
    }


    WaterleidingBtn(){
        return cy.get(or.loodgieterlocator.waterleidingRadioBtn)
    }


    ReparenBtn(){
        return cy.get(or.loodgieterlocator.reparenElement)
    }


    InOverlayBtn(){
        return cy.get(or.loodgieterlocator.InOverlayElement)
    }

    ComparePriceOptionBtn(){
        return cy.get(or.loodgieterlocator.ComparePriceElement)
    }


    NextQuestionBtn1(){
        return cy.get(or.loodgieterlocator.NextQuestionElement1)
    }


    MoreInforTextField(){
        return cy.get(or.loodgieterlocator.MoreInforTextElement)
    }

    EmailField(){
        return cy.get(or.loodgieterlocator.EmailElement)
    }


    NextBtnEmailPage(){
        return cy.get(or.loodgieterlocator.NextQuestionElement2)
    }


    NameTextField(){
        return cy.get(or.loodgieterlocator.NameField)
    }


    TelephoneField(){
        return cy.get(or.loodgieterlocator.TelephoneField)
    }


    ReceiveQuoteBtn(){
        return cy.get(or.loodgieterlocator.ReceiveQuote)
    }

}