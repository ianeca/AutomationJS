describe('Login', () => {
  it('Login sucessfull', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get("#action-canvas").click('topLeft')
    cy.get("#action-canvas").click('top')
    cy.get("#action-canvas").click('topRight')
    cy.get("#action-canvas").click('left')
    cy.get("#action-canvas").click('right')
    cy.get("#action-canvas").click('bottomLeft')
    cy.get("#action-canvas").click('bottom')
    cy.get("#action-canvas").click('bottomRight')
    cy.get("#action-canvas").click(80,75)
    cy.get("#action-canvas").click(170,75)
    cy.get(".action-labels > span:nth-of-type(3)").click()
    cy.get(".action-labels > .label").click({multiple : true})
    cy.get(".action-opacity").click({multiple : true})
    /*
    cy.get("input[type='password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get("input[placeholder='Search']").type("My Info")
    cy.get("a[class='oxd-main-menu-item']").click()
    cy.get("input[name='firstName']").clear().type("Janeth")
    cy.get("input[name='middleName']").clear().type("Rosario")
    cy.get("input[name='lastName']").clear().type("Huamantinco")
    */
    
  })
})

