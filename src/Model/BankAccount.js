import Bank from './Bank.js';
import Fire from './Fire.js';
import Payee from './Payee.js';

import BankAccountViewModel from '../ViewModel/BankAccountViewModel';
import BankViewModel from '../ViewModel/BankViewModel.js';
import PayeeViewModel from '../ViewModel/PayeeViewModel.js';

class BankAccount {



    /**
     * design to use builder design pattern, so use setter method to set fields
     * And use build() to check whether necessuary methods are assigned.
     */
    constructor() {
        // logs records the payment and transation history.
        //use push() to push to the stack,
        //and pop() to pop from the stack
        this.logs = [];
    }

    //=============================================
    // setter method are for the constructor use
    //=============================================

    set_logs(logs) {
        this.logs = logs;
    }


    /**
     * Set the account id
     * @param {*} id account id
     */
    set_id(id) {
        this.id = id;
    }
    set_name(name) {
        this.name = name;
    }

    /**
     * set the money number
     * @param {double} balance the money
     */
    set_balance(balance) {
        this.balance = balance;
    }


    /**
     * Will be invoked when a new Bank instanced is assigned.
     * To check whether all fields are met the condition, and push this new instance to firebase.
     * 
     * Also, create the associated 2 bank account instances, and push them  into firebase.
     * The associated account id default set as the Bank id+'-00' for saving and  '01' for streamLine
     */
    build() {
        if (this.id === null || this.balance === null || this.name === null) {
            throw "Can not have any null field"
        }
        this.addToFirebase();
    }


    //=============================================
    // Below are the Firebase CRUD
    //=============================================

    /**
     * This function is invoked if and only if this instance with id is not in the firebase.
     * 
     * If not exist in firebase, then push this BankAccount insatnce into the firebase
     * 
     */
    addToFirebase() {
        let upload = {
            logs: this.logs,
            id: this.id,
            name: this.name,
            balance: this.balance,
            //add more fields here:

            //
            //the register date of this entry
            regdate: Fire.shared.FieldValue.serverTimestamp()
        }


        Fire.shared.db
            .collection('BankAccount')
            .doc(this.id) //set the database document id to be the account id 
            .set(upload) //the upload dict
            .then(() => {
                console.log('Account added!  id:', this.id);
            });

    }


    /**
     * Transit the money from source(my_id) to target.
     * @param {*} target_id the unique target account id 
     * @param {*} amountToPay amount of money you want to pay to the target
     */
    static async make_payment(my_id, target_id, amountToPay, my_name, target_name) {
        if (amountToPay <= 0) {
            throw new Error('The money must be positive !');
        }

        //get the promise
        let my_account = BankAccount.get_from_firebase(my_id);
        //update my account inside the promise
        let updated_my_account = await my_account.then(async function(account) {
            if (account === null) {
                throw new Error('My id does not exist!');
            }
            if (account.amount < amountToPay) {
                throw new Error('You dont have enough money to pay!');
            }


            account.balance -= amountToPay;

            let current_log = {
                date: new Date(),
                balance: amountToPay * -1, //record 
                target: target_id,
                name: target_name
            }

            //concat old and new  logs together 
            let old = account.logs;
            let concatLogs = old.concat(current_log);

            account.logs = concatLogs
            return await account.update_to_firebase()


        })

        //get the target and update
        let target_bankAccount = BankAccount.get_from_firebase(target_id);
        target_bankAccount.then(function(account) {
            if (account === null) {
                throw new Error('Target id does not exist!');
            }

            account.balance = account.balance + amountToPay;

            let target_log = {
                date: new Date(),
                balance: Math.abs(amountToPay),
                target: my_id,
                name: my_name

            }

            //concat old and new  logs together 
            let old = account.logs
            let concatLogs = old.concat(target_log);
            account.logs = concatLogs;

            return account.update_to_firebase()
        })

        // setTimeout(() => {}, 5000);


        return updated_my_account;

    }


    /**
     * 
     * Be invoked whenever balance is changed. Also,new log will be appended and update to firebase as well.
     * 
     * This will update new logs and balance changed.
     * @returns the updated instance from database as the promise type
     * 
     */
    async update_to_firebase() {
        const accountRef = await Fire.shared.db.collection('BankAccount').doc(this.id);
        let res = await accountRef.update({
            balance: this.balance,
            logs: this.logs,
            //add more fields here:

            //the update time stamp
            update: Fire.shared.FieldValue.serverTimestamp()
        });
        return BankAccount.get_from_firebase(this.id)
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
     * @returns the specificied instance with id_in from database as the promise type
     * 
     */
    static async get_from_firebase(id) {
        // Firestore data converter
        var accountConverter = {
            toFirestore: function(account) {
                return {
                    logs: account.logs,
                    id: account.id,
                    name: account.name,
                    balance: account.balance,
                    //add more fields here:
                    regdate: account.regdate,
                    update: account.update

                };
            },
            fromFirestore: function(snapshot, options) {
                const data = snapshot.data(options);
                let bankAccount = new BankAccount()
                bankAccount.set_id(data.id)
                bankAccount.set_name(data.name)
                bankAccount.set_balance(data.balance)
                bankAccount.set_logs(data.logs)
                bankAccount.regdate = data.regdate
                bankAccount.update = data.update

                return bankAccount;
            }
        };
        let output =
            await Fire.shared.db.collection('BankAccount').doc(id)
            .withConverter(accountConverter)
            .get().then((doc) => {
                if (doc.exists) {
                    // Convert to account object
                    var account = doc.data();
                    // console.log(account.balance)
                    return account;

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


export default BankAccount