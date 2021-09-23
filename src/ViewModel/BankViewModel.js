//https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21


import Bank from "../Model/Bank.js"
import Fire from "../Model/Fire.js";
import BankAccount from "../Model/BankAccount.js"
import Payee from "../Model/Payee.js"


class BankViewModel {

    /**
     * To be able to add a Bank, we need to first check whether the password is valid, in which query and check if there is an matched instance in our database.
     * 
     * If the password is incorrect, then throw exception 
     * otherwise  Return the instance from firebase 
     * 
     * @param {*} bankName 
     * @param {*} bankID 
     * @param {*} userName 
     * @param {*} password 
     * @returns null if password is incorrect, 
     *          otherwise return Bank object from firebase
     */
    static async addBank(bankName, bankID, userName, password) {

        // need to query 
        let firebase_obj = Bank.get_from_firebase(bankID);
        return await firebase_obj.then(async function(bank) {
            if (bank === null) {
                // add the bank into firebase
                let bankToAdd = new Bank()

                bankToAdd.set_bankName(bankName)
                bankToAdd.set_bankID(bankID)
                bankToAdd.set_userName(userName)
                bankToAdd.set_password(password)
                await bankToAdd.build(); //build the associated 2 bank accounts and push to firebase
                return await bankToAdd.update_to_firebase()

            } else {
                //need to chech if the password is correct
                if (password === bank.password) {
                    return bank;
                }
                return null; // 'Password incorrect!'
            }
        });


    }

    /**
     * Pass the Bank id to get the bank instance from firebase
     * @param {*} bankID 
     * @returns Bank obj from firebase and fields can be assessed via map/dict 
     */
    static async getBank(bankID) {
        return await Bank.get_from_firebase(bankID)
    }

    /**
     * Pass a list of Bank ids to get bank instances from firebase
     * @param {*} bankID_list 
     * @returns Bank obj from firebase and fields can be assessed via map/dict
     */
    static async getBanks(bankID_list) {
        let list = [];
        for (var i = 0; i < bankID_list.length; i++) {
            list.push(await BankViewModel.getBank(bankID_list[i]))
        }
        return list;
    }

    //=================================================================
    //better to use BankAccountViewModel.getAccount(id)
    //=================================================================

    /**
     * Pass in the BankID, return the saving account from firebase
     * @param {*} bankID 
     * @returns 
     */
    static async getSavingAccount(bankID) {
        let savingID = bankID + '-00'
        return await BankAccount.get_from_firebase(savingID)
    }


    static async getStreamLineAccount(bankID) {
        let streamLine_id = bankID + '-01'
        return await BankAccount.get_from_firebase(streamLine_id)
    }



    // /**
    //  * 
    //  * @param {*} bankID 
    //  */
    // deleteBank(bankID) {
    // }


}

export default BankViewModel