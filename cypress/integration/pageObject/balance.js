class Balance{
    visit(){
        cy.visit('http://demo.guru99.com/v4/manager/BalEnqInput.php')
    }
    fillAccountNo(value) {
        cy.get('input[name="accountno"]').clear().type(value);
    }
    submit() {
        const button = cy.get(`input[name="AccSubmit"]`);
        button.click();
    }
}

export default Balance;