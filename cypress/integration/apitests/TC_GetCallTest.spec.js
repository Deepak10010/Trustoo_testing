/// <reference types="cypress" />




describe("Verify GET request",()=> {

    
    it("Validate GET request - Status check",()=>{

        // to validate the status code
        // cy.request('http://localhost:8080/api/users').its('status').should('eq',200)


        var response = cy.request('http://localhost:8080/api/users')
        response.its('status').should('eq',200)
        
    })



    it("Validate GET request - Data check",()=>{

        cy.request('http://localhost:8080/api/users').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body).to.have.length(10)
            expect(response.body[0]).to.have.property('email','trainer@way2automation.com')
        })
        
        
    })



})
