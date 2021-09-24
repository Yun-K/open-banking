/**
 * Fire is responsibile for initializing and setting up the connection to our cloud firestore databse.
 * Other .js files within the Model layer will depend on this in order to interact with Firebase.
 * 
 * Reference:
 * https://firebase.google.com/docs/firestore/quickstart#web-version-8
 * https://firebase.google.com/docs/web/modular-upgrade
 */

//v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
// Required for side-effects
import 'firebase/compat/firestore';


class Fire {
    constructor() {
        this.init();
    }

    init = () => {

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

        // the timestamp of firebase Server, so we can use this to do CRUD operation
        this.FieldValue = firebase.firestore.FieldValue;
    }
}
Fire.shared = new Fire(); //shared Fire instance, other js within the Model layer depend on this to connect to firebase.
export default Fire;