import BankAccount from './BankAccount.js';
import Bank from './Bank.js';
import Fire from './Fire.js';
import Payee from './Payee.js';
import BankAccountViewModel from '../ViewModel/BankAccountViewModel';
import BankViewModel from '../ViewModel/BankViewModel.js';
import PayeeViewModel from '../ViewModel/PayeeViewModel.js'

function addLog(logList) {
    for (var i = 0; i <= 1; i++) {
        const account_id = '00-00-00-0' + i;
        Fire.shared.db.collection('BankAccount')
            .doc(account_id)
            .set({
                logs: logList,
                id: account_id,
                name: 'Saving',
                balance: 5000,
                regdate: Fire.shared.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log('User added! The id:', account_id);
            });
    }
}

// addLog([])


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


// let my_id = '00-00-00-00';
// let target_id = '00-00-00-01';

// let update_my_account = BankAccountViewModel.make_payment(my_id, target_id, 100);
// update_my_account.then((res) => {
//     console.log(res)
// })




//===============================================
// for bank debug
//===============================================
let addBank = BankViewModel.addBank('ANZ', '11-11-11', 'Yun', '12345')

addBank.then((result) => {
    console.log(result)
})

// BankViewModel.getBank('11-11-11').then((result) => { console.log(result) })




// // let notExistID = 'u0u89h9'
// // let t = BankAccount.get_from_firebase(id)


//===============================================
// for payee debug
//===============================================

// let addedPayee  = PayeeViewModel.addPayee('Yun','00-00-00-00')
// addedPayee.then((payee)=>{
// 	console.log(payee)

// })