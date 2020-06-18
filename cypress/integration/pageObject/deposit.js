class Deposit{

    visit(){
        cy.visit('http://demo.guru99.com/v4/manager/DepositInput.php')
    }

    fillDeposit(value) {
        cy.get('input[name="ammount"]').type(value)
    }
    fillAccountNo(value) {
        cy.get('input[name="accountno"]').type(value)
    }
    fillDescription(value) {
        cy.get('input[name="desc"]').type(value)
    }
    submit() {
        const button = cy.get(`input[name="AccSubmit"]`);
        button.click();
    }
}

export default Deposit;