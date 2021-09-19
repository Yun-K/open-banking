import BankModel from 'Model/BankModel';
import Bank from 'Model/Bank';


const bank = new Bank('ANZ', '12345', 'Yun', '12345');
BankModel.add(bank)