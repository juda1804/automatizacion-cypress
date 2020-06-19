class CustomizedStatement {
    visit() {
        cy.visit('http://demo.guru99.com/V4/manager/CustomisedStatementInput.php');
    }

    getAccountNo(){return cy.get(`input[name="accountno"]`)}

    fillAccountNo(value) {
        const field = cy.get(`input[name="accountno"]`);
        field.clear();
        field.type(value);
    }

    fillFromDatePicker(year, month, day) {
        const targetDate = Cypress.moment()
        .subtract(year, 'year')
        .add(month, 'month')
        .add(day, 'day')
        .format('YYYY-MM-DD')

    cy.get(`input[name=fdate]`)
        .clear()
        .type(`${targetDate}`)
    }

    fillToDatePicker(year, month, day) {
        const targetDate = Cypress.moment()
        .subtract(year, 'year')
        .add(month, 'month')
        .add(day, 'day')
        .format('YYYY-MM-DD')

    cy.get(`input[name=tdate]`)
        .clear()
        .type(`${targetDate}`)  
    }

    fillTransactionId(value) {
        cy.get('input[name=numtransaction]')
        .clear()
        .type(value)
    }

    fillAmountlowerlimit(value) {
        cy.get('input[name=amountlowerlimit]')
        .clear()
        .type(value)
    }

    submit() {
        const button = cy.get(`input[name="AccSubmit"]`);
        button.click();
    }
}

export default CustomizedStatement