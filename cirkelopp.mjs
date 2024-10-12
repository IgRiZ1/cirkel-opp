import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});



function oppervlaktecirkel(straal1, straal2){
    let oppervlakte = Math.PI*straal1*straal2;
    return oppervlakte
}

console.log(oppervlaktecirkel(4,2));

exit()
