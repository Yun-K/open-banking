//https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21

import Bank from "../Model/Bank"

class BankViewModel {


    /**
     * 
     * @param {*} BankStore Bank instance which holds every Banks
     */
    constructor(BankStore) {
        this.store = BankStore
    }

    /**
     * To be able to add a Bank, we need to first check whether the password is valid, in which query and check if there is an matched instance in our database.
     * @param {*} bankName 
     * @param {*} bankID 
     * @param {*} userName 
     * @param {*} password 
     */
    addBank(bankName, bankID, userName, password) {
        //
        const bank = new Bank()
            .set_bankID(bankID)
            .set_bankName(bankName)
            .set_userName(userName)
            .set_password(password);
        bank.addToFirebase();

    }

    /**
     * Delete a Bank from
     * @param {*} bankID 
     */
    deleteBank(bankID) {


    }


}

export default AddBankScreenViewModel