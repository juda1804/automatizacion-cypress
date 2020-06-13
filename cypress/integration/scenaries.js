import LoginPage from "./pageObject/home"
import CreateAccount from "./pageObject/createAccount"
import AccountCreated from "./pageObject/accountCreated"
import Withdrawal from "./pageObject/withdrawal"

describe('Test suit', function() {
    const urlBase = 'http://demo.guru99.com/V4/index.php'
    var myNumeroAleatorio = Math.floor(Math.random()*(1000000+1))
    var emailid = myNumeroAleatorio+"1" + "@poli.edu.co"
    var accountNo = "";
    const userid = 'mngr264622'
    const password = 'UvegabU'
    const pinno = '264622'
    const deposit = 1000
    

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
        cy.get('table:nth-child(2)>tbody>tr:nth-child(3)>td').should('contain',userid)
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
        accountCreated.fillDeposit(deposit);
        accountCreated.submit();
        cy.get('#account > tbody > tr:nth-child(4) > td:nth-child(2)').each(
            ($e, index, $list) => {
            if (index == 0) {
                accountNo = $e.text()
            }
        })

        cy.get('table[id=account]>tbody>tr:nth-child(10)>td:nth-child(2)').should('contain', deposit)
        
    })

    it.only('Test Case 3',function() {
        let loginPage =  new LoginPage();
        let withdrawal = new Withdrawal();

        loginPage.visit();
        loginPage.fillUid(userid);
        loginPage.fillPassword(password);
        loginPage.submit();

        withdrawal.visit();
        withdrawal.fillAccountNo(accountNo);
        withdrawal.fillAmmount(deposit);
        withdrawal.fillDescription('N/A');
        withdrawal.submit();

        cy.get('#withdraw > tbody > tr:nth-child(23) > td:nth-child(1)').should('contain','Current Balance')
        

    })
}) 