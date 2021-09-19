import Fire from './Fire.js';



class BankAccount {

    constructor() {

    }

    set_id(id) {
        this.id = id;
    }
    set_name(accountName) {
        this.accountName = accountName;
    }

    /**
     * set the money number
     * @param {double} balance the money
     */
    set_balance(balance) {
        this.balance = balance;
    }

    add_amount(amount) {
        this.balance += amount;
        this.update_balance();
    }

    subtract_amount(amount) {
        this.balance -= amount;
        this.update_balance();
    }

    /**
     * push this BankAccount insatnce into the firebase
     * 
     */
    async addToFirebase() {
        const res = await Fire.shared.db.collection('BankAccount').add({
            id: this.id,
            balance: this.balance,
            accountName = this.accountName,
            //add more fields here:

            //
            regdate: Fire.shared.FieldValue.serverTimestamp()
        });
        this.dataBaseID = res.id; //update the document id 
        console.log('Added BankAccount with name ', this.accountName, '\n\t\t with ID: ', this.dataBaseID);
    }

    build() {
        if (this.id === null || this.balance === null || this.accountName === null) {
            throw errors.ArgumentNull("Can not have any null field")
        }
        this.addToFirebase();
    }

    /**
     * Be invoked whenever balance is changed.
     */
    update_balance() {
        const accountRef = Fire.shared.db.collection('BankAccount').doc(this.dataBaseID);
        const res = await bankRef.update({
            balance: this.balance,
            //add more fields here:


            //the time stamp
            update: Fire.shared.FieldValue.serverTimestamp()
        });
    }

    /**
     * 
     * @param {*} targetAccountId the unique target account id 
     * @param {*} amount amount of money you want to pay to the target
     */
    make_payment(targetAccountId, amount) {
        if (amount <= 0) {
            throw new Error('The money must be positive !');
        }
        //get the Bank account
        const target_bankAccount = get_BankAccount_from_firebase(targetAccountId);

        this.subtract_amount(amount);
        target_bankAccount.add_amount(amount);


        //TODO: Need to implement associate the log history 


    }


    /**
     * TODO: 
     * @param {*} accountID 
     */
    static async get_BankAccount_from_firebase(accountID) {


    }



}


export default BankAccount