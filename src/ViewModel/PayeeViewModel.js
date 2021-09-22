import Bank from "../Model/Bank.js"
import Fire from "../Model/Fire.js";
import BankAccount from "../Model/BankAccount.js"
import Payee from "../Model/Payee.js"


class PayeeViewModel {

    /**
     * Add a new Payee into our firebase.
     * Then return Payee object from our database
     * @param {*} payee_name like 'Yun'
     * @param {*} payee_accountID the bankaccount id like '00-00-00-00'
     * @returns null if the payee_accountID does not exist in our BankAccount firebase
     */
    static async addPayee(payee_name, payee_accountID) {
        //first check if it alreay exist in our databse
        let firebase_obj = Payee.get_from_firebase(payee_name)
        return await firebase_obj.then(async function(payee) {
            if (payee === null) {
                // add the payee into firebase
                let payee_to_add = new Payee(payee_name, payee_accountID);
                let status = await payee_to_add.build()
                if (status === null) {
                    //return null means the payee id does not exist iin our firebase databse
                    return null
                }
                return await payee_to_add.update_to_firebase()

            }
            //already exist, so just return it 
            return payee;

        });



    }

    /**
     * Make the payment to the target account, and then return the updated version of my account.
     * 
     * HINT: this will return a promise!
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

    static async getPayee(payee_id) {
        return await Payee.get_from_firebase(payee_id);
    }


    static async getPayeeAccount(account_id) {
        return await Payee.get_from_firebase(account_id)
    }


}

export default PayeeViewModel;