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

// addData()
async function addData() {
    for (i = 1; i <= 5; i++) {
        const res = await db.collection('BankAccount').add({
            name: '用户' + i,
            sex: i % 2 == 0 ? '男' : '女',
            regdate: FieldValue.serverTimestamp()
        });
        console.log('Added document with ID: ', res.id);
    }
}

// getData()
// read data
async function getData() {
    await db.collection('users').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
}

// updData()
// update  data
async function updData() {
    const userRef = db.collection('users').doc('RNd4RyaDsHE8fsQr6DV1');
    const res = await userRef.update({
        age: 25,
        upddate: FieldValue.serverTimestamp()
    });
}

// delData()
//delete it 
async function delData() {

    let deleteDoc = await db.collection('users').doc('RNd4RyaDsHE8fsQr6DV1').delete();
    console.log(deleteDoc)
}

function get_from_firebase(bankID) {
    var matchedEntry = null;
    db.collection('Bank').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                // if (doc.data.bankID === bankID) {
                //     matchedEntry = doc.data();
                //     return;
                // }
                matchedEntry = doc.data();
                console.log(doc.id, '=>', matchedEntry);
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    if (matchedEntry === null) {
        return null; //no ENtry found
    }
    console.log('', matchedEntry.bankName);
    return matchedEntry;
}

// var matched = get_from_firebase('12345');
// console.log('userName: ', matched);



let a = {
    Date: new Date(),
    Balance: -10,
    Target: 'BEN'
}

let b = {
    Date: new Date(),
    Balance: -10,
    Target: 'BEN'
}

var stack = []
stack.push(a)
stack.push(b)

addLog(stack)

function addLog(logList) {
    for (i = 0; i <= 1; i++) {
        var res = db.collection('BankAccount').add({
            id: '00-00-00-0' + i,
            balance: 5000,
            log: logList,
            regdate: FieldValue.serverTimestamp()
        });
        console.log('Added document with ID: ', res.id);
    }
}