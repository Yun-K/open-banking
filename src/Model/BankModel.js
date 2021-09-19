const admin = require('firebase-admin');
//read the private key to get the  authentation
var serviceAccount = require("./myfirebase-483d9-firebase-adminsdk-hthhq-c8397c40c8.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
// get our db
let db = admin.firestore();
// get the timestamp of firebase Server, so we can use this to do CRUD operation
const FieldValue = admin.firestore.FieldValue;


async function add(Bank bankToAdd) {
    const res = await db.collection('Bank').add({
        bankName: bankToAdd.bankName,
        bankID: bankToAdd.bankID,
        userName: bankToAdd.userName,
        password: bankToAdd.password,
        regdate: FieldValue.serverTimestamp()
    });
    console.log('Added document with ID: ', res.id);
}
export default BankModel