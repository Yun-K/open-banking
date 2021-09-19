class Bank {
    static admin = require('firebase-admin');
    //read the private key to get the  authentation
    static serviceAccount = require("myfirebase-483d9-firebase-adminsdk-hthhq-c8397c40c8.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    // get our db 
    static db = admin.firestore();
    // get the timestamp of firebase Server, so we can use this to do CRUD operation
    static FieldValue = admin.firestore.FieldValue;

    constructor(bankName, bankID, userName, password) {
        this.bankName = bankName;
        this.bankID = bankID;
        this.userName = this.userName;
        this.password = password;
    }



    /**
     * add a new Bank insatnce into firebase
     */
    async function add(Bank bank) {
        const res = await db.collection('Bank').add({
            bankName: bank.bankName,
            bankID: bank.bankID,
            regdate: FieldValue.serverTimestamp()
        });
        console.log('Added document with ID: ', res.id);
    }

}

export default Bank