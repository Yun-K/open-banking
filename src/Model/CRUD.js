import BankAccount from './BankAccount.js';
import Bank from './Bank.js';
import Fire from './Fire.js';


function addLog(logList) {
    for (var i = 0; i <= 1; i++) {
        const account_id = '00-00-00-0' + i;
        Fire.shared.db.collection('BankAccount')
            .doc(account_id)
            .set({
                id: account_id,
                balance: 5000,
                log: logList,
                regdate: Fire.shared.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log('User added! The id:', account_id);
            });
    }
}




var amount = 10
let a = {
    Date: new Date(),
    Balance: amount * -1,
    Target: 'BEN'
}

let b = {
    Date: new Date(),
    Balance: Math.abs(amount),
    Target: 'BEN'
}

var stack = []
stack.push(a)
stack.push(b)

var stack1 = []
stack1.push(b)
stack1.push(a)

var s = stack.concat(stack1)
    // console.log(s)

// addLog(stack)

// var temp = new BankAccount()
// temp.set_balance(5000)
// temp.set_id('00-00-00-00')
// temp.set_name("saving")
// temp.build();





let id = '00-00-00-00';
let bankPromise = BankAccount.get_from_firebase(id);

// var bankAccount_inst = null;

bankPromise.then(function(result) {
    console.log(result) // "Some User token"
})