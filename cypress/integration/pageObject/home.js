class LoginPage {
    visit() {
      cy.visit('http://demo.guru99.com/V4/index.php');
    }
  
    getUid() {
      return cy.get(`input[name="uid"]`);
    }
  
    getPassword() {
      return cy.get(`input[name="password"]`);
    }

    getBtnLogin() {
        return cy.get(`input[name="password"]`);
    }
  
    fillUid(value) {
      const field = cy.get(`input[name="uid"]`);
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get(`input[name="password"]`);
      field.clear();
      field.type(value);
  
      return this;
    }
  
    submit() {
      const button = cy.get(`input[name="btnLogin"]`);
      button.click();
    }
  }
  
export default LoginPage;