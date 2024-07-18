describe('tipos de asserts', () => {
    it('coincide el atributo y el valor del atributo', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get('#firstName').should('be.visible').should('have.attr','placeholder','First Name')
    })

    it('expect concat', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get('#firstName').then(objeto=>{
            expect(objeto).to.be.visible
            expect(objeto).to.have.attr('placeholder','First Name')
        })
    })
})
