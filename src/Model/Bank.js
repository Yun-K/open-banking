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
        this.dataBaseID = -1;
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
        this.dataBaseID = res.id; //update the document id 
        console.log('Added document with ID: ', this.dataBaseID);
    }

    async delete_from_database() {
        if (this.dataBaseID === -1) {
            var message = this.dataBaseID;
            throw Error('This Bank instance is not in firebase: ' + (message || ''));
        }

        let deleteDoc = await this.db.collection('Bank').doc(this.dataBaseID).delete();
        console.log(deleteDoc);
        console.log('delete this Bank instance from Firebase successfully!')

        this.dataBaseID = -1;
    }

    async update_to_firebase(bankName, bankID, userName, password) {
        const bankRef = this.db.collection('users').doc(this.dataBaseID);
        const res = await bankRef.update({
            bankName: bankName,
            bankID: bankID,
            userName: userName,
            password: password,
            upddate: FieldValue.serverTimestamp()
        });
    }


    async update_to_firebase() {
        const bankRef = this.db.collection('users').doc(this.dataBaseID);
        const res = await bankRef.update({

            upddate: FieldValue.serverTimestamp()
        });
    }

    async get_from_firebase() {
        return await this.db.collection('Bank').doc(this.dataBaseID).get();
    }






}
bank = new Bank('ANZ', '12345', 'zhou', '12345');
// bank.addToFirebase();
// bank.delete_from_database();
// bank.printDocumentID();