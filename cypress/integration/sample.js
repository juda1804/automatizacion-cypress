describe('Test suit', function() {
    const urlBase = 'http://demo.guru99.com/V4/index.php'
    const emailid = '99@poli.edu.co'
    const userid = 'mngr264622'
    const password = 'UvegabU'
    let customerId = ''

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Test Case 1',function() {
        cy.visit(urlBase)
        cy.get('input[name="uid"]').type(userid) 
        cy.get('input[name="password"]').type(password) 
        cy.get('input[name="btnLogin"]').click()
        cy.contains(password)
    })


    it.only('Test Case 2',function() {
        cy.clock()
        cy.visit(urlBase)
        cy.get('input[name="uid"]').type(userid) 
        cy.get('input[name="password"]').type(password)  
        cy.get('input[name="btnLogin"]').click()
        

        //Crear account
        cy.visit('http://demo.guru99.com/V4/manager/addcustomerpage.php')
        cy.get('input[name="name"]').type('Juan') 
        
        const targetDate = Cypress.moment()
        .subtract(30, 'year')
        .add(1, 'month')
        .add(1, 'day')
        .format('YYYY-MM-DD') 

        cy.get('input[name="dob"]')
        .type(`${targetDate}`)

        cy.get('textarea[name="addr"]').type('Lopez')
        cy.get('input[name="city"]').type('Medellin ')  
        cy.get('input[name="state"]').type('Juan') 
        cy.get('input[name="pinno"]').type('264622') 
        cy.get('input[name="telephoneno"]').type('000000')
        cy.get('input[name="emailid"]').type(emailid) 
        cy.get('input[name="password"]').type('pass') 
        cy.get('input[name="sub"]').click()   
        cy.tick(500)
        customerId = cy.get('table[name="customer"] > tbody > tr:nth-child(4) > td:nth-child(2)')

        console.log("hola munod",customerId)
        //cy.visit('http://demo.guru99.com/V4/manager/addAccount.php')

        //cy.get('input[name="cusid"]').type(customerId)
        

    })

    it('Test Case 3',function() {
        cy.visit(urlBase)
        cy.get('input[name="uid"]').type(userid) 
        cy.get('input[name="password"]').type(password)  
        cy.get('input[name="btnLogin"]').click()

        cy.visit('http://demo.guru99.com/V4/manager/addAccount.php')
        cy.get('textarea[name="cusid"]').type(customerId)
    })
}) 