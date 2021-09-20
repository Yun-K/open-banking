import Bank from './Bank.js';
import Fire from './Fire.js';
import Payee from './Payee.js';
import BankAccountViewModel from '../ViewModel/BankAccountViewModel';
import BankViewModel from '../ViewModel/BankViewModel.js';
import PayeeViewModel from '../ViewModel/PayeeViewModel.js'

class BankAccount {

    constructor() {
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

    build() {
        if (this.id === null || this.balance === null || this.name === null) {
            throw errors.ArgumentNull("Can not have any null field")
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
     * TODO:? not sure whether need async and await
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



    /**TODO:debug
     * 
     * Be invoked whenever balance is changed.
     * 
     * This will update new logs and balance changed.
     */
    async update_to_firebase() {
        const accountRef = await Fire.shared.db.collection('BankAccount').doc(this.id);
        let res = accountRef.update({
            balance: this.balance,
            //add more fields here:
            logs: this.logs,

            //the update time stamp
            update: Fire.shared.FieldValue.serverTimestamp()
        });

    }

    /**
     * 
     * @param {*} target_id the unique target account id 
     * @param {*} amountToPay amount of money you want to pay to the target
     */
    static make_payment(my_id, target_id, amountToPay) {
        if (amountToPay <= 0) {
            throw new Error('The money must be positive !');
        }

        //get the promise
        let my_account = BankAccount.get_from_firebase(my_id);
        //update my account inside the promise
        my_account.then(function(account) {
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
                target: target_id
            }

            //concat old and new  logs together 
            let old = account.logs;
            let concatLogs = old.concat(current_log);

            account.logs = concatLogs
            account.update_to_firebase()

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
                target: my_id
            }

            //concat old and new  logs together 
            let old = account.logs
            let concatLogs = old.concat(target_log);
            account.logs = concatLogs;
            account.update_to_firebase()
        })

        return BankAccount.get_from_firebase(my_id)


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
        var accountConverter = {
            toFirestore: function(account) {
                return {
                    logs: account.logs,
                    id: account.id,
                    name: account.name,
                    balance: account.balance,
                    //add more fields here:

                };
            },
            fromFirestore: function(snapshot, options) {
                const data = snapshot.data(options);
                let bankAccount = new BankAccount()
                bankAccount.set_id(data.id)
                bankAccount.set_name(data.name)
                bankAccount.set_balance(data.balance)
                bankAccount.set_logs(data.logs)

                // return new BankAccount(data.id, data.balance, data.accountName);

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