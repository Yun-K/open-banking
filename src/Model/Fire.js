import firestore from '@react-native-firebase/firestore';


const userDocument = firestore().collection('Users').doc('');











class Fire {
    constructor() {
        this.init();
    }

    // 2.
    init = () =>
        //
        const admin = require('firebase-admin');
    //read the private key to get the  authentation
    var serviceAccount = require("./open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    // // get our db
    // this.db = admin.firestore();
    // // get the timestamp of firebase Server, so we can use this to do CRUD operation
    // this.FieldValue = admin.firestore.FieldValue;
    // this.dataBaseID = -1;







}
Fire.shared = new Fire();
export default Fire;