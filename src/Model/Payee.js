import Fire from './Fire.js';
import BankAccount from './BankAccount.js';

class Payee {

    constructor(name, accountID) {
        this.name = name;
        this.accountID = accountID;
    }

    get_BankAccount_from_firebase() {
        const bankAccount = BankAccount.get_BankAccount_from_firebase(this.accountID);

        return bankAccount;
    }

}
export default Payee