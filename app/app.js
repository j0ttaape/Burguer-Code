import * as funcoes from './funcoes.js'
import prompt from 'prompt-sync'
let ler = prompt();
let opcao = 0;
let resp;


while(resp!==0){
    await funcoes.sleep(2000);
funcoes.ApresentarPrograma();
    
    await funcoes.sleep(2000);

console.log(`\n\n---------------------------------------------------------------\n O que iremos fazer? \n---------------------------------------------------------------\n`)
    resp = Number(ler());

    await funcoes.sleep(2000);

    if(resp==1){
        funcoes.RegistroDeVenda(resp);
    }
    
    else if(resp==2){
        funcoes.RemoverVenda(resp);
    }
    
}