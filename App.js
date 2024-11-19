import {sqlite3} from 'sqlite3';
import {open} from 'slite' ;

async function receberDadosClientes(username, email, password) {
const db = await open ({
filename: './Banco.db',
driver: sqlite3.driver,


})




}