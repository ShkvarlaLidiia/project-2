describe('Log in', () => {
    it('Sign in', () => {
        try {
            cy.visit('http://localhost:5173/');

            cy.get('.nav-link').contains('Users').click();

            cy.wait(5000);
            
            cy.get('.nav-link').contains('Products').click();

            cy.get('input').type('samsung');

        } catch (e) {
            console.log(e.message);
        }
    });
});
