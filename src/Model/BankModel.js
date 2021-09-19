const admin = require('firebase-admin');
//read the private key to get the  authentation
var serviceAccount = require("./open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
// get our db
let db = admin.firestore();
// get the timestamp of firebase Server, so we can use this to do CRUD operation
const FieldValue = admin.firestore.FieldValue;

function add(bankToAdd) {
    const res = db.collection('Bank').add({
        bankName: bankToAdd.bankName,
        bankID: bankToAdd.bankID,
        userName: bankToAdd.userName,
        password: bankToAdd.password,
        regdate: FieldValue.serverTimestamp()
    });
    console.log('Added document with ID: ', res.id);
}



// add(new Bank('ANZ', '12345', 'Yun', '12345'));