import Fire from './Fire.js';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

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
    //Below are the local  CRUD operation
    //=============================================

    add_amount(amount) {
        this.balance += amount;
        this.update_balance();
    }

    subtract_amount(amount) {
        this.balance -= amount;
        this.update_balance();
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
    update_to_firebase() {
        const accountRef = Fire.shared.db.collection('BankAccount').doc(this.id);
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
     * @param {*} targetAccountId the unique target account id 
     * @param {*} amount amount of money you want to pay to the target
     */
    make_payment(targetAccountId, amount) {
        if (amount <= 0) {
            throw new Error('The money must be positive !');
        }
        //get the Bank account
        let target_bankAccount = get_BankAccount_from_firebase(targetAccountId);
        //do the real add/ subtract 
        this.subtract_amount(amount);
        target_bankAccount.add_amount(amount);


        //TODO: Need to implement associate the log history 
        let my_log = {
            Date: new Date(),
            Balance: amount * -1,
            Target: target_bankAccount.id
        }

        let target_log = {
            Date: new Date(),
            Balance: Math.abs(amount),
            Target: target_bankAccount.id
        }

        //append log into the database





    }


    //=============================================================
    // Static method for getting the instance from the firebase
    //=============================================================



    /**
     * TODO: https://github.dev/firebase/snippets-web/blob/81fcf30888909936d4898421e858da809f8cf595/firestore/test.firestore.js#L251-L263
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
        var output =
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
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        // await delay(3000);
        // console.log(output);
        // output.then(function(result) {
        //     console.log(result) // "Some User token"
        // })

        return output;

        //bankPromise.then(function(result) {
        // console.log(result) // "Some User token"
        // })


    }



}


export default BankAccount