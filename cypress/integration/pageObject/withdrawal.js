class Withdrawal {
    visit() {
        cy.visit('http://demo.guru99.com/V4/manager/WithdrawalInput.php')
    }

    fillAccountNo(value) {
        cy.get('input[name="accountno"]').clear().type(value);
    }

    fillAmmount(value) {
        cy.get('input[name="ammount"]').clear().type(value);
    }

    fillDescription(value) {
        cy.get('input[name="desc"]').clear().type(value);
    }

    submit() {
        const button = cy.get(`input[name="AccSubmit"]`);
        button.click();
    }

}
export default Withdrawal;