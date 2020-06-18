class CustomizedStatement {
    visit() {
        cy.visit('http://demo.guru99.com/V4/manager/CustomisedStatementInput.php');
    }


    fillAccountNo(value) {
        const field = cy.get(`input[name="accountno"]`);
        field.clear();
        field.type(value);

        return this;
    }

    fillAccountNo(value) {
        const field = cy.get(`input[name="accountno"]`);
        field.clear();
        field.type(value);

        return this;
    }

    fillFromDatePicker(year, month, day) {
        return fillDatePicker(year,month,day,'fdate')
    }

    fillToDatePicker(year, month, day) {
        return fillDatePicker(year,month,day,'tdate')   
    }

    fillDatePicker(year, month, day,field) {
        const targetDate = Cypress.moment()
            .subtract(year, 'year')
            .add(month, 'month')
            .add(day, 'day')
            .format('YYYY-MM-DD')

        cy.get('input[name=' + field + ']')
            .clear()
            .type(`${targetDate}`)

        return this;
    }

    fillTransactionId(value) {
        cy.get('input[name=numtransaction]')
        .clear()
        .type(value)
    }

    submit() {
        const button = cy.get(`input[name="AccSubmit"]`);
        button.click();
    }
}

export default CustomizedStatement