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


        //need to use async/await or then to get the updated_account,
        //or otherwist, it may rpeort {promise{pending}}!

        //Below are the correct example of how to get the updated account
        // let addBank = BankViewModel.addBank('ANZ', '11-11-11', 'Yun', '12345')
        // addBank.then((result) => {
        //     console.log(result)
        // })

    }

    static async getAccount(id) {
        return await BankAccount.get_from_firebase(id);
    }



}

export default BankAccountViewModel