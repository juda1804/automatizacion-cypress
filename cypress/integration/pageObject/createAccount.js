class CreateAccount {
    visit() {
        cy.visit('http://demo.guru99.com/V4/manager/addcustomerpage.php');
    }

    getName() {
        return cy.get(`input[name="name"]`);
    }

    fillName(value) {
        const field = cy.get(`input[name="name"]`);
        field.clear();
        field.type(value);

        return this;
    }

    getDatePicker() {
        return cy.get(`input[name="dob"]`);
    }

    fillDatePicker(year, month, day) {
        const targetDate = Cypress.moment()
            .subtract(year, 'year')
            .add(month, 'month')
            .add(day, 'day')
            .format('YYYY-MM-DD')

        cy.get(`input[name="dob"]`)
            .clear()
            .type(`${targetDate}`)

        return this;
    }


    getAddr() {
        return cy.get(`textarea[name="addr"]`);
    }

    fillAddr(value) {
        const field = cy.get(`textarea[name="addr"]`);
        field.clear();
        field.type(value);

        return this;
    }


    getCity() {
        return cy.get(`input[name="city"]`);
    }

    fillCity(value) {
        const field = cy.get(`input[name="city"]`);
        field.clear();
        field.type(value);

        return this;
    }

    getState() {
        return cy.get(`input[name="state"]`);
    }

    fillState(value) {
        const field = cy.get(`input[name="state"]`);
        field.clear();
        field.type(value);
    }

    getPinno() {
        return cy.get(`input[name="pinno"]`);
    }

    fillPinno(value) {
        const field = cy.get(`input[name="pinno"]`);
        field.clear();
        field.type(value);
    }

    getTelephoneno() {
        return cy.get(`input[name="telephoneno"]`);
    }

    fillTelephoneno(value) {
        const field = cy.get(`input[name="telephoneno"]`);
        field.clear();
        field.type(value);
    }


    getEmailId() {
        return cy.get(`input[name="emailid"]`);
    }

    fillEmailId(value) {
        const field = cy.get(`input[name="emailid"]`);
        field.clear();
        field.type(value);
    }

    getPassword() {
        return cy.get(`input[name="password"]`);
    }

    fillPassword(value) {
        const field = cy.get(`input[name="password"]`);
        field.clear();
        field.type(value);

        return this;
    }

    submit() {
        const button = cy.get(`input[name="sub"]`);
        button.click();
    }
}

export default CreateAccount;