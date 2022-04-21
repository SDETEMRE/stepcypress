

it('login test',function(){

//login test
cy.visit('http://localhost:8080/#/root/plans/list')
//username and password is already entered so just click the Login button
cy.get('.btn').click()

//assert that if in the login page check admin button is visible
cy.get('#sessionDropdown').should('be.visible')

//click keywords tab
cy.get('[ng-class="{ active: isViewActive(\'functions\') }"] > a').click()

//assert that New Keyword tab is visible
cy.get(':nth-child(3) > .btn').should('be.visible')

//click Parameters button
cy.get('[ng-class="{ active: isViewActive(\'parameters\') }"] > a').click()

//assert that New parameter button is visible
cy.get(':nth-child(3) > .btn').should('be.visible')
})