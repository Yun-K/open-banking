/**
 * this file is a draft for testing whether firebase-admin (i.e. firebase SDK) is working or not.
 *
 * Of course, we use node js to do this, which means, we run: `node draft.js`
 *
 * If no error after run it, then it means the firebase sdk package is installed successfully and the code which is require('firebase-admin') is quoted successfully
 */

//read the private key , and then use the firebase package to do the initialization
// if no error , then our project is initialized correctly and successfully
var admin = require('firebase-admin');
var serviceAccount = require('./open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json'); //private key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

var default_project_management = admin.projectManagement();
console.log(default_project_management); //debug to see the basic info of our project