// import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// import * as firebase from "firebase/app";
// import firebase from "firebase/compat/app"
// import firestore from 'firebase/firestore';
// import '@firebase/firestore/dist/esm/index';

// //v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// import { getDoc } from 'firebase/firestore'



class Fire {
    constructor() {
        this.init();
    }

    // //// 2. Initialize our Firebase app using the keys we get in our app
    // init = () => {

    //     const firebaseConfig = {
    //         apiKey: "AIzaSyDnu8sS8JjCTcJ8mgpn--eVhuQmJXRJXYY",
    //         authDomain: "open-banking-76572.firebaseapp.com",
    //         projectId: "open-banking-76572",
    //         storageBucket: "open-banking-76572.appspot.com",
    //         messagingSenderId: "66763043886",
    //         appId: "1:66763043886:web:5fbbbb442dce0fb6abdbbf",
    //         measurementId: "G-7X34YFBKH1"
    //     };
    //     //firebase stuff
    //     const admin = require('firebase-admin');


    //     //read the private key to get the  authentation
    //     var serviceAccount = require("./open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json");
    //     admin.initializeApp({
    //         credential: admin.credential.cert(serviceAccount),
    //     });

    //     // admin.initializeApp(firebaseConfig)

    //     //set our db
    //     this.db = admin.firestore();


    //     // the timestamp of firebase Server, so we can use this to do CRUD operation
    //     this.FieldValue = admin.firestore.FieldValue;


    // }


    init = () => {

        // const firebase = require("firebase")

        // // Required for side-effects
        // require("firebase/firestore");

        const firebaseConfig = {
            apiKey: "AIzaSyDnu8sS8JjCTcJ8mgpn--eVhuQmJXRJXYY",
            authDomain: "open-banking-76572.firebaseapp.com",
            projectId: "open-banking-76572",
            storageBucket: "open-banking-76572.appspot.com",
            messagingSenderId: "66763043886",
            appId: "1:66763043886:web:5fbbbb442dce0fb6abdbbf",
            measurementId: "G-7X34YFBKH1"
        }

        const defaultFirebaseApp = firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore()
        this.FieldValue = firebase.firestore.FieldValue;


        // this.db = getFirestore(defaultFirebaseApp);




        // the timestamp of firebase Server, so we can use this to do CRUD operation
        // this.FieldValue = app.firestore.FieldValue;
    }
}
Fire.shared = new Fire(); //shared Fire instance
export default Fire;