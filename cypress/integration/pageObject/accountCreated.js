class AccountCreated {
    getAccountId() {
        text =  cy.get('table.layout:nth-child(8) td:nth-child(1) table:nth-child(1) tbody:nth-child(1) tr:nth-child(4) > td:nth-child(2)').invoke('text')
        text.type('{selectall}')
    }
}

export default AccountCreated;