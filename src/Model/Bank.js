// import Bank from './Bank.js';
import Fire from './Fire.js';
import BankAccount from './BankAccount.js';
import Payee from './Payee.js';

import BankAccountViewModel from '../ViewModel/BankAccountViewModel';
import BankViewModel from '../ViewModel/BankViewModel.js';
import PayeeViewModel from '../ViewModel/PayeeViewModel.js';


class Bank {

    constructor() {

    }



    set_bankName(bankName) {
        this.bankName = bankName;
    }

    set_bankID(id) {
        this.id = id;
    }

    set_userName(userName) {
        this.userName = userName;
    }
    set_password(password) {
        this.password = password;
    }

    /**
     * check whether all fields are met the condition, and push this new instance to firebase.
     * 
     * Also, create the associated 2 bank account instances, and push them  into firebase.
     * The associated account id default set as the Bank id+'-00' for saving and  '01' for streamLine
     */
    async build() {
        if (this.password === null || this.id === null || this.bankName === null) {
            throw errors.ArgumentNull("id, password and bankName can not be null!")
        }
        //set  up the account id
        this.saving_id = this.id + '-00';
        this.streamLine_id = this.id + '-01';
        // default we have 2 accounts
        this.saving = new BankAccount();
        this.saving.set_logs([])
        this.saving.set_id(this.saving_id)
        this.saving.set_name('saving')
        this.saving.set_balance(5000)
        this.saving.build()

        this.streamLine = new BankAccount()
        this.streamLine.set_logs([])
        this.streamLine.set_id(this.streamLine_id)
        this.streamLine.set_name('streamLine')
        this.streamLine.set_balance(5000)
        this.streamLine.build()


        await this.addToFirebase();
    }


    //=============================================
    // Below are the Firebase CRUD
    //=============================================

    /**
     * push this Bank insatnce into the firebase
     * 
     */
    addToFirebase() {
        Fire.shared.db
            .collection('Bank')
            .doc(this.id) //set the document id to be the account id 
            .set({
                bankName: this.bankName,
                id: this.id,
                userName: this.userName,
                password: this.password,
                saving_id: this.saving_id, //saving account
                streamLine_id: this.streamLine_id, //streamLine account

                //add more fields here:

                //
                //the register date of this entry
                regdate: Fire.shared.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log('Bank added!  id:', this.id);
            });
    }

    /**
     * TODO:this function most likely will not be called since dont really need it
     *
     */
    async delete_from_database() {
        if (this.dataBaseID === -1) {
            var message = this.dataBaseID;
            throw Error('This Bank instance is not in firebase: ' + (message || ''));
        }

        let deleteDoc = await Fire.shared.db.collection('Bank').doc(this.dataBaseID).delete();
        console.log(deleteDoc);
        console.log('delete this Bank instance from Firebase successfully!')


    }

    async update_to_firebase() {
        const ref = Fire.shared.db.collection('Bank').doc(this.id);
        let res = await ref.update({
            bankName: this.bankName,
            id: this.id,
            userName: this.userName,
            password: this.password,
            saving_id: this.saving_id, //saving account
            streamLine_id: this.streamLine_id, //streamLine account
            //add more fields here:

            //
            update: Fire.shared.FieldValue.serverTimestamp()
        });
        return await Bank.get_from_firebase(this.id);
    }

    /**
     * TODO: not successfully 
     * @param {*} id_in 
     * @returns 
     */
    static async get_from_firebase(id_in) {
        // Firestore data converter
        var converter = {
            toFirestore: function(bank_obj) {
                return {
                    bankName: bank_obj.bankName,
                    id: bank_obj.id,
                    userName: bank_obj.userName,
                    password: bank_obj.password,
                    saving_id: bank_obj.saving_id, //saving account
                    streamLine_id: bank_obj.streamLine_id, //streamLine account

                    //add more fields here:
                    regdate: bank_obj.regdate,
                    update: bank_obj.update

                };
            },
            fromFirestore: function(snapshot, options) {
                const data = snapshot.data(options);
                let bank = new Bank()
                bank.set_bankName(data.bankName)
                bank.set_userName(data.userName)
                bank.set_bankID(data.id)
                bank.set_password(data.password)

                bank.saving_id = data.saving_id
                bank.streamLine_id = data.streamLine_id

                bank.regdate = data.regdate
                bank.update = data.update

                return bank;
            }
        };
        let output =
            await Fire.shared.db.collection('Bank').doc(id_in)
            .withConverter(converter)
            .get().then((doc) => {
                if (doc.exists) {
                    // Convert to account object
                    return doc.data();
                    // console.log(account.balance)
                    // return account;

                } else {
                    console.log("No such document!");
                    return null;
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });


        // console.log("output:\n", output)
        return output;
    }
}

export default Bank