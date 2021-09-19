class BankAccount {

    constructor() {
        //firebase stuff
        const admin = require('firebase-admin');
        //read the private key to get the  authentation
        var serviceAccount = require("./open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        //set our db
        this.db = admin.firestore();


        // the timestamp of firebase Server, so we can use this to do CRUD operation
        this.FieldValue = admin.firestore.FieldValue;

    }
    set_name(accountName) {
        this.accountName = accountName;
    }

    /**
     * set the money number
     * @param {double} balance the money
     */
    set_balance(balance) {
        this.balance = balance;
    }

    add_amount(amount) {
        this.balance += amount;
    }

    subtract_amount(amount) {
        this.balance -= amount;
    }



}