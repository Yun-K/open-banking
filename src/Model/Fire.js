class Fire {
    constructor() {
        this.init();
    }

    // 2.Initialize our Firebase app using the keys we get in our app
    init = () => {
        //firebase stuff
        const admin = require('firebase-admin');
        //read the private key to get the  authentation
        var serviceAccount = require("./open-banking-76572-firebase-adminsdk-ys3u7-905da816f3.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        //set our db
        this.db = admin.firestore();


        // the timestamp of firebase Server, so we can use this to do CRUD operation
        this.FieldValue = admin.firestore.FieldValue;
    }


}
Fire.shared = new Fire();
export default Fire;