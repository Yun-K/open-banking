class BankAccount {

    constructor() {

    }
    set_name(accountName) {
        this.accountName = accountName;
    }

    /**
     * set the money number
     * @param {double} balance the money
     */
    set_balance(balance) {
        this.balance = balance;
    }

    add_amount(amount) {
        this.balance += amount;
    }

    subtract_amount(amount) {
        this.balance -= amount;
    }



}