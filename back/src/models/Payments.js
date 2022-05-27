import fs  from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { v4 as uuid} from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE = path.join(__dirname, '..', 'db','payments.json');
class Payments{
  static all = async () => {
    try {
      const read = await fs.readFile(FILE,'utf8');
      return JSON.parse(read);
    } catch (error) {
      await this.savePayment([ ]);
      return await fs.readFile(FILE, 'utf-8');
    }    
  }

  static findOne = async (id)  => {
    const payments = await this.all();
    const payment = payments.find(value => value.id === id );
    return payment;
  }

  static save = async (payment) => {
    const allPayments = await this.all();
    payment.id = uuid();
    allPayments.push(payment);
    if(await this.savePayment(allPayments)){
      return payment;
    }
    return 'Error to save';
  }

  static delete = async (id) => {
    try {
      const payments = await this.all();
      const paymentsFilter = await  payments.filter(payment => payment.id !== id);
      await this.savePayment(paymentsFilter);
      return true;
    } catch (error) {
      return error;
    }  
  }

  static update = async (id, payment) => {
    try {
      let payments = await this.all();
      const paymentsFilter = await this.findOne(id); 
      if(Object.keys(paymentsFilter).length > 0){
        if(await this.delete(id)){
          payments = await this.all();
          payment.id = id;
          payments.push(payment);
          await this.savePayment(payments);          
          return payment;
        }
        return 'Error to update';
      }
      return paymentsFilter;
    } catch (error) {
      return error;
    }  
  }

  static savePayment = async(payments) => {
    try {
      await fs.writeFile(FILE,  JSON.stringify(payments, null, 2), {flag: 'w'});      
      return 'Ok'
    } catch (error) {
      return error;
    }
  }
}


export default Payments;