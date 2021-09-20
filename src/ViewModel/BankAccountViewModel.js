import Fire from "../Model/Fire.js"
import Bank from "../Model/Bank.js"
import BankAccount from "../Model/BankAccount.js"
import Payee from "../Model/Payee.js"

class BankAccountViewModel {
    /**
     * 
     * @param {*} my_id 
     * @param {*} target_id 
     * @param {*} amount amount to pay from my account to target account 
     */
    static pay_to_target_account(my_id, target_id, amount) {
        BankAccount.make_payment(my_id, target_id, amount);


    }







}

export default BankAccountViewModel