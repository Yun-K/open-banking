class Bank {
    constructor(bankName, bankID, userName, password) {
        this.bankName = bankName;
        this.bankID = bankID;
        this.userName = userName;
        this.password = password;
        //
        const admin = require('firebase-admin');
        //read the private key to get the  authentation
        var serviceAccount = require("./open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        // get our db
        this.db = admin.firestore();
        // get the timestamp of firebase Server, so we can use this to do CRUD operation
        this.FieldValue = admin.firestore.FieldValue;
    }



    /**
     * push this Bank insatnce into the firebase
     * 
     */
    async addToFirebase() {
        const res = await this.db.collection('Bank').add({
            bankName: this.bankName,
            bankID: this.bankID,
            userName: this.userName,
            password: this.password,
            regdate: this.FieldValue.serverTimestamp()
        });
        console.log('Added document with ID: ', res.id);
    }






}
bank = new Bank('ANZ', '12345', 'Yun', '12345');
bank.addToFirebase();