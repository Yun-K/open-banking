// get our db 
let db = admin.firestore();
// get the timestamp of firebase Server, so we can use this to do CRUD operation
const FieldValue = admin.firestore.FieldValue;



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

// addData()
async function addData() {
    for (i = 1; i <= 5; i++) {
        const res = await db.collection('users').add({
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