import Fire from "../Model/Fire.js"
import Bank from "../Model/Bank.js"
import BankAccount from "../Model/BankAccount.js"
import Payee from "../Model/Payee.js"

class BankAccountViewModel {
    /**
     * Make the payment to the target account, and then return the updated version of my account.
     * 
     * HINT: this will return a promise!!!!!!!
     * 
     * 
     * @param {*} my_id 
     * @param {*} target_id 
     * @param {*} amount amount to pay from my account to target account 
     */
    static make_payment(my_id, target_id, amount, my_name, target_name) {

        let updated_account = BankAccount.make_payment(my_id, target_id, amount, my_name, target_name);

        return updated_account //return the updated version of my account 
    }




}

export default BankAccountViewModel