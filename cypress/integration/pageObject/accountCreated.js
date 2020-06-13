class AccountCreated {
    
    customerId = '';
    constructor() {
        this.customerId = '';
      }
    
    getAccountId() {
        cy.get('table[name=customer]>tbody>tr td:nth-child(2)').each(($e,index,$list)=>{
            if(index == 0){
                this.customerId = $e.text()
                this.continue()
                this.fillCusId(this.customerId)
            }
        })
    }

    makeDeposit() {

    }

    fillDeposit(value) {
        cy.get('input[name="inideposit"]').type(value)
    }

    continue() {
        cy.visit('http://demo.guru99.com/V4/manager/addAccount.php')
    }

    fillCusId(value) {
        let field = cy.get(`input[name="cusid"]`);
        field.clear();
        field.type(value);

        return this;
    }
    submit() {
        const button = cy.get(`input[name="button2"]`);
        button.click();
    }
}

export default AccountCreated;