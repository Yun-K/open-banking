// import firestore from '@react-native-firebase/firestore';
// import { observable, action } from 'mobx'
// import uuid from 'uuid/v4'

import Fire from './Fire.js';
import BankAccount from './BankAccount.js';

// Fire = require('Fire')
class Bank {

    constructor() {
        this.dataBaseID = -1;
    }



    set_bankName(bankName) {
        this.bankName = bankName;
    }

    set_bankID(bankID) {
        this.bankID = bankID;
    }

    set_userName(userName) {
        this.userName = userName;
    }
    set_password(password) {
        this.password = password;
    }



    /**
     * push this Bank insatnce into the firebase
     * 
     */
    async addToFirebase() {
        const res = await Fire.shared.db.collection('Bank').add({
            bankName: this.bankName,
            bankID: this.bankID,
            userName: this.userName,
            password: this.password,
            regdate: Fire.shared.FieldValue.serverTimestamp()
        });
        this.dataBaseID = res.id; //update the document id 
        console.log('Added Bank with ID: ', this.dataBaseID);

    }


    /**
     * create the associated 2 account instances
     */
    build() {
        if (this.password === null || this.bankID === null || this.bankName === null || this.userName === null) {
            throw errors.ArgumentNull("Can not have any null field")
        }
        //set  up the account id
        saving_id = this.bankID + '-00';
        streamLine_id = this.bankID + '01';

        // default we have 2 accounts
        this.saving = new BankAccount()
            .set_id(saving_id)
            .set_balance(5000)
            .set_name('Saving');
        this.streamLine = new BankAccount()
            .set_id(streamLine_id)
            .set_balance(500)
            .set_name('streamLine');

        this.addToFirebase();
    }

    async delete_from_database() {
        if (this.dataBaseID === -1) {
            var message = this.dataBaseID;
            throw Error('This Bank instance is not in firebase: ' + (message || ''));
        }

        let deleteDoc = await Fire.shared.db.collection('Bank').doc(this.dataBaseID).delete();
        console.log(deleteDoc);
        console.log('delete this Bank instance from Firebase successfully!')

        this.dataBaseID = -1;
    }

    async update_to_firebase() {
        const bankRef = Fire.shared.db.collection('Bank').doc(this.dataBaseID);
        const res = await bankRef.update({
            bankName: this.bankName,
            bankID: this.bankID,
            userName: this.userName,
            password: this.password,
            //add more fields here:

            //
            update: Fire.shared.FieldValue.serverTimestamp()
        });
    }

    /**
     * TODO: not successfully 
     * @param {*} bankID 
     * @returns 
     */
    static get_from_firebase(bankID) {
        var matchedEntry = null;
        Fire.shared.db.collection('Bank').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    // if (doc.data.bankID === bankID) {
                    //     matchedEntry = doc.data();
                    //     break;
                    // }
                    console.log(doc.id, '=>', doc.data());
                    matchedEntry = doc.data();

                });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
        if (matchedEntry === null) {
            return null; //no ENtry found
        }
        console.log('', matchedEntry.bankName);
        return matchedEntry;


        // return Fire.shared.db.collection('Bank').doc(this.dataBaseID).get();
    }
}

export default Bank

// const bank = new Bank()
//     .set_bankID(bankID)
//     .set_bankName(bankName)
//     .set_userName(userName)
//     .set_password(password)
//     .build();