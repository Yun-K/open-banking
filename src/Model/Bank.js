// import firestore from '@react-native-firebase/firestore';
// import { observable, action } from 'mobx'
// import uuid from 'uuid/v4'

import Fire from './Fire.js';
import BankAccount from './BankAccount.js';

// Fire = require('Fire')
class Bank {

    constructor() {
        this.dataBaseID = -1;

        // default we have 2 accounts
        this.saving = new BankAccount()
            .set_balance(5000)
            .set_name('Saving');
        this.streamLine = new BankAccount()
            .set_balance(500)
            .set_name('streamLine');


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
            update: Fire.shared.FieldValue.serverTimestamp()
        });
    }

    async get_from_firebase() {
        return await Fire.shared.db.collection('Bank').doc(this.dataBaseID).get();
    }
}

export default Bank


// const bank = new Bank()
// bank.set_bankID('999999')
// bank.set_bankName('ANZ')
// bank.set_userName('YunZhou')
// bank.set_password('12345')
// bank.addToFirebase();