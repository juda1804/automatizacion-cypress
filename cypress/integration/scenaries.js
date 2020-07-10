import LoginPage from "./pageObject/home"
import CreateAccount from "./pageObject/createAccount"
import AccountCreated from "./pageObject/accountCreated"
import Withdrawal from "./pageObject/withdrawal"
import Deposit from "./pageObject/deposit"
import Balance from "./pageObject/balance"
import CustomizedStatement from "./pageObject/customizedStatemen"

describe('Test suit', function() {
    const urlBase = 'http://demo.guru99.com/V4/index.php'
    var myNumeroAleatorio = Math.floor(Math.random()*(1000000+1))
    var emailid = myNumeroAleatorio + "@poli.edu.co"
    var accountNo = "";
    var transaccionId = "";
    const userid = ''
    const password = 'UvegabU'
    const pinno = '264622'
    const deposit = 1000
    let   retiro  = 1000
    

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

    
    it('Test Case 3',function() {
        let loginPage =  new LoginPage();
        let withdrawal = new Withdrawal();

        loginPage.visit();
        loginPage.fillUid(userid);
        loginPage.fillPassword(password);
        loginPage.submit();

        withdrawal.visit();
        withdrawal.fillAccountNo(accountNo);
        withdrawal.fillAmmount(deposit);
        withdrawal.fillDescription('Deposito');
        withdrawal.submit();

        cy.get('#balenquiry > tbody > tr:nth-child(16) > td:nth-child(2)').should('contain','0')
        

    })

    //Deposito y valida y valida
    it('Deposito y validacion Balance',function() {
        let loginPage =  new LoginPage();
        let depositPage = new Deposit();
        let createAccount = new CreateAccount();
        let accountCreated = new AccountCreated();
        let balance = new Balance();

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

                //Llenado del valor del deposito
                depositPage.visit();
                depositPage.fillAccountNo(accountNo);
                depositPage.fillDeposit(deposit);
                depositPage.fillDescription('Depósito');
                depositPage.submit();

                //validacion del nuevo monto
                balance.visit()
                balance.fillAccountNo(accountNo)
                balance.submit();


            }
        })
        cy.get('#balenquiry > tbody > tr:nth-child(16) > td:nth-child(2)').should('contain','2000')
    })

    //Retiro y valida
    it('Retiro y validacion balance',function() {
        let loginPage =  new LoginPage();
        let createAccount = new CreateAccount();
        let accountCreated = new AccountCreated();
        let withdrawal = new Withdrawal();
        let balance = new Balance();
        
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
                withdrawal.visit();
                withdrawal.fillAccountNo(accountNo);
                withdrawal.fillAmmount(retiro);
                withdrawal.fillDescription('Retiro');
                withdrawal.submit();
                
                //validacion del nuevo monto
                balance.visit()
                balance.fillAccountNo(accountNo)
                balance.submit();
   
            }
        })
        cy.get('#balenquiry > tbody > tr:nth-child(16) > td:nth-child(2)').should('contain','0')
    })

    it.only('Depositar y validar transaccion en customized statement', function(){
        cy.clock();
        let loginPage =  new LoginPage();
        let depositPage = new Deposit();
        let createAccount = new CreateAccount();
        let accountCreated = new AccountCreated();
        let customizedStatement = new CustomizedStatement();
        let amountMinimumTransaction = 50000;

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
                depositPage.visit();
                depositPage.fillAccountNo(accountNo);
                depositPage.fillDeposit(amountMinimumTransaction);
                depositPage.fillDescription('Susten 2');
                depositPage.submit();
                cy.get('#deposit > tbody > tr:nth-child(6) > td:nth-child(2)').each(
                    ($a, index, $list) =>    {
                        console.log($a.text())
                    }
                );
            }
        });

        cy.tick(1000);

        cy.get('#deposit > tbody > tr:nth-child(6) > td:nth-child(2)').each(
            ($a, index, $list) =>    {
                if (index==0) {
                    transaccionId = $a.text();
                    customizedStatement.visit();
                    customizedStatement.fillFromDatePicker(2020,1,1);
                    customizedStatement.fillToDatePicker(2020,12,1);
                    customizedStatement.fillAmountlowerlimit(amountMinimumTransaction); 
                    customizedStatement.fillTransactionId(transaccionId);
                    customizedStatement.submit();
                }
            }
        );
    })

}) 