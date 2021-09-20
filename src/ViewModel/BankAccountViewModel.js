import Fire from "../Model/Fire.js"
import Bank from "../Model/Bank.js"
import BankAccount from "../Model/BankAccount.js"
import Payee from "../Model/Payee.js"

class BankAccountViewModel {
    /**
     * 
     * Make the payment to the target account, and then return the updated version of my account.
     * 
     * @param {*} my_id 
     * @param {*} target_id 
     * @param {*} amount amount to pay from my account to target account 
     */
    static make_payment(my_id, target_id, amount) {

        let update_my_account = BankAccount.make_payment(my_id, target_id, amount);
        // let update_my_account = BankAccount.get_from_firebase(my_id);

        update_my_account.then(function(account) {
            console.log(account)
        })
        return update_my_account


    }







}

export default BankAccountViewModel