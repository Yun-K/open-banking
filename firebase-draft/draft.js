/**
 * this file is a draft for testing whether firebase-admin (i.e. firebase SDK) is working or not.
 * If no error after run it, then it means the firebase sdk package is installed successfully and the code which is require
 * ('firebase-admin') is quoted successfully.
 *Then, I try to add a draft database, and add several entries to see whether this script can read these entries successfully.
 *
 * Of course, we use node js to test this, which means, we run: `node firebase-draft/draft.js`
 *
 * Reference: https://github.com/komavideo/LearnFirebase
 */

//  read the private key , and then use the firebase package to do the initialization
// if no error , then our project is initialized correctly and successfully
var admin = require('firebase-admin');
var serviceAccount = require('../open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json'); //private key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// var default_project_management = admin.projectManagement();
// console.log(default_project_management); //debug to see the basic info of our project

// try to connect to our database
let db = admin.firestore();
//draft is a database that i create for testing the below code
db.collection('draft')
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch(err => {
        console.log('error when getting the documents', err);
    });

// output: print entries from draft db.
// sytnx is: entryID => {field:'value'}
// DziqKJxsAKuv4EoYzlP4 => { title: 'swen325' } //entry 1 
// bbST19GJQPXg2DFPIFHP => { name: 'Yun' }