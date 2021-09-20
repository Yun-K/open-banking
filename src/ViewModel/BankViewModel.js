//https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21

// import { firestore } from "firebase-admin";
import Bank from "../Model/Bank.js"
import Fire from "../Model/Fire.js";

class BankViewModel {
    @observable bank_list = []

    constructor() {
        Fire.shared.db.collection('Bank')
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {

                    console.log(doc.id, '=>', doc.data());
                });
            })
            .catch(err => {
                console.log('error when getting the documents', err);
            });

    }

    /**
     * To be able to add a Bank, we need to first check whether the password is valid, in which query and check if there is an matched instance in our database.
     * @param {*} bankName 
     * @param {*} bankID 
     * @param {*} userName 
     * @param {*} password 
     */
    addBank(bankName, bankID, userName, password) {

        // need to query 


        const bank = new Bank()
            .set_bankID(bankID)
            .set_bankName(bankName)
            .set_userName(userName)
            .set_password(password)
            .build(); //build the associated 2 bank accounts and push to firebase

        return bank;


    }

    /**
     * Pass the Bank id to get the bank instance from firebase
     * @param {*} bankID 
     * @returns 
     */
    getBank(bankID) {
        //TODO: the api is not implemented successfuly
        const bank = Bank.getBank(bankID)
        return bank;

    }

    /**
     * 
     * @param {*} bankID 
     */
    deleteBank(bankID) {


    }


}

export default BankViewModel