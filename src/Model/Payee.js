import Bank from './Bank.js';
import BankAccount from './BankAccount.js';
import Fire from './Fire.js';

import BankAccountViewModel from '../ViewModel/BankAccountViewModel';
import BankViewModel from '../ViewModel/BankViewModel.js';
import PayeeViewModel from '../ViewModel/PayeeViewModel.js';
import BankAccount from './BankAccount.js';

class Payee {

    constructor(name, accountID) {
        this.id = name;
        this.accountID = accountID;
    }

    build() {
        if (this.accountID || this.id === null) {
            throw errors.ArgumentNull("Can not have any null field")
        }
        BankAccount.get_from_firebase(this.accountID).then((result) => {
            if (result === null) {
                throw 'Payee account id is not exist in our firebase database';
            }

            //it is exist , so add to firebase
            this.addToFirebase();

        })
    }

    addToFirebase() {
        let upload = {
            id: this.id,
            accountID: this.accountID,
            //add more fields here:

            //
            //the register date of this entry
            regdate: Fire.shared.FieldValue.serverTimestamp()
        }

        Fire.shared.db
            .collection('Payee')
            .doc(this.id) //set the database document id to be the account id 
            .set(upload) //the upload dict
            .then(() => {
                console.log('Payee added!  name:', this.id);
            });

    }



    /**
     * 
     * Be invoked whenever balance is changed.
     * 
     * This will update new logs and balance changed.
     */
    async update_to_firebase() {
        const ref = await Fire.shared.db.collection('Payee').doc(this.id);
        let res = await ref.update({
            id: this.id,
            accountID: this.accountID,
            //add more fields here:

            //the update time stamp
            update: Fire.shared.FieldValue.serverTimestamp()
        });
        return Payee.get_from_firebase(this.id)
    }

    //=============================================================
    // Static method for getting the instance from the firebase
    //=============================================================
    /**
     * Get and return the BankAccount instance from the firebase.
     * 
     * 
     * NOte: this is an async function, so it will return promise!!
     * You need to get and handle this returned instance by using the promise way.
     * 
     * @param {*} ID the account id 
     */
    static async get_from_firebase(id) {
        // Firestore data converter
        var converter = {
            toFirestore: function(payee) {
                return {
                    id: payee.id,
                    accountID: payee.accountID,
                    //add more fields here:
                    regdate: payee.regdate,
                    update: payee.update

                };
            },
            fromFirestore: function(snapshot, options) {
                const data = snapshot.data(options);
                let payee_temp = new Payee(data.id, data.accountID)
                payee_temp.regdate = data.regdate
                payee_temp.update = data.update

                return payee_temp;
            }
        };
        let output =
            await Fire.shared.db.collection('Payee').doc(id)
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

    static async make_payment(my_id, target_id, amountToPay, my_name, target_name) {
        return await BankAccount.make_payment(my_id, target_id, amountToPay, my_name, target_name)

    }





}
export default Payee