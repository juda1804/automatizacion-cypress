import LoginPage from "./pageObject/home"
import CreateAccount from "./pageObject/createAccount"
import AccountCreated from "./pageObject/accountCreated"

describe('Test suit', function() {
    const urlBase = 'http://demo.guru99.com/V4/index.php'
    var myNumeroAleatorio = Math.floor(Math.random()*(1000000+1))
    var emailid = myNumeroAleatorio + "@poli.edu.co"
    const userid = 'mngr264622'
    const password = 'UvegabU'
    const pinno = '264622'
    let customerId = ''

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Test Case 1',function() {
        let loginPage =  new LoginPage();
        loginPage.visit();
        loginPage.fillUid(userid);
        loginPage.fillPassword(password);
        loginPage.submit();
        cy.contains(userid)
    })


    it.only('Test Case 2',function() {
        let loginPage =  new LoginPage();
        let createAccount = new CreateAccount();
        let accountCreated = new AccountCreated();
        
        loginPage.visit();
        loginPage.fillUid(userid);
        loginPage.fillPassword(password);
        loginPage.submit();
        

        //Crear account
        createAccount.visit();
        createAccount.fillName('Juan')
        createAccount.fillDatePicker(1990,12,12)
        createAccount.fillAddr('Lopez')
        createAccount.fillCity('Medellin')
        createAccount.fillState('Colombia')
        createAccount.fillPinno(pinno)
        createAccount.fillTelephoneno('000000')
        createAccount.fillEmailId(emailid)
        createAccount.fillPassword('123asd')
        createAccount.submit();
    
        accountCreated.getAccountId();
        cy.contains('Customer ID')
        //cy.visit('http://demo.guru99.com/V4/manager/addAccount.php')

        //cy.get('input[name="cusid"]').type(customerId)
    

    })

    it('Test Case 3',function() {
    })
}) 