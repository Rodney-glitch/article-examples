/// <reference types= "cypress" />

describe('How to access another super domain url in cypress', function (){
    it('should visit example1.com', function () {
        cy.visit('https://www.example1.com')
    });
    it('should visit example2.com', function () {
        cy.task('setHref', 'https://www.example2.com')
        cy.task('getHref').then((href)=> {
            cy.visit(href)
        })
    });
})