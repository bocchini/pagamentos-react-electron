import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { v4 as uuid} from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE = path.join(__dirname, '..', 'db','payments.json');
class Payments{
  static all = async () => {  
    const read = await fs.readFile(FILE,'utf8');
    return JSON.parse(read);
  }

  static findOne = async (id)  => {
    const payments = await this.all();
    const payment = payments.find(value => value.id === id);
    return payment;
  }

  static save = async (payment) => {
    const allPayments = await this.all();
    payment.id = uuid();
    allPayments.push(payment);
    const json = JSON.stringify(allPayments, null ,2);
    await fs.writeFile(FILE, json, {flag: 'w'});
    return 'save'
  }

  static delete = async (id) => {
    try {
      const payments = await this.all();
      const paymentsFilter = payments.find(payment => payment.id !== id);
      await fs.writeFile(FILE,  JSON.stringify(paymentsFilter, '', 2), {flag: 'w'});
      return 'ok';
    } catch (error) {
      return error;
    }  
  }

  static update = (id) => {

  }
}


export default Payments;