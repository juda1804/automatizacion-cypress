describe('Test suit', function() {
    it('Test Case 1',function() {
        cy.visit('http://demo.guru99.com/V4/index.php')
        cy.get('input[name="uid"]').type('mngr264622') 
        cy.get('input[name="password"]').type('UvegabU') 
        cy.get('input[name="btnLogin"]').click()
        cy.contains('mngr26462')
    })


    it.only('Test Case 2',function() {
        cy.visit('http://demo.guru99.com/V4/index.php')
        cy.get('input[name="uid"]').type('mngr264622') 
        cy.get('input[name="password"]').type('UvegabU') 
        cy.get('input[name="btnLogin"]').click()
        

        //Crear account
        cy.visit('http://demo.guru99.com/V4/manager/addcustomerpage.php')
        cy.get('input[name="name"]').type('Juan') 
        
        cy.get('textarea[name="addr"]').type('Lopez')
        cy.get('input[name="city"]').type('Medellin ')  
        cy.get('input[name="state"]').type('Juan') 
        cy.get('input[name="pinno"]').type('000') 

        const targetDate = Cypress.moment()
        .add(1, 'year')
        .add(1, 'month')
        .add(1, 'day')
        .format('MM/DD/YYYY') 

        cy.get('input[name="dob"]')
        .clear()
        .type(`${targetDate}{enter}`)

        cy.get('input[name="telephoneno"]').type('000000')
        cy.get('input[name="emailid"]').type('juan_david@u.com') 
        cy.get('input[name="password"]').type('asd123') 
        cy.get('input[name="submit"]').click()

        

        
    })
}) 