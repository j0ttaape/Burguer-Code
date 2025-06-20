import * as funcoes from './funcoes.js'
import prompt from 'prompt-sync'
let ler = prompt();
let opcao = 0;
let resp;


while(resp!==0){
        
funcoes.ApresentarPrograma();
    
    await funcoes.sleep(2000);

console.log(`\n\n---------------------------------------------------------------\n O que iremos fazer? \n---------------------------------------------------------------\n`)
    await funcoes.sleep(3000);    

    resp = Number(ler());

    await funcoes.sleep(2000);

    if(resp==1){
        funcoes.cardapio();
    }

    else if(resp==2){
        funcoes.RegistroDeVenda(resp);
    }
    
    else if(resp==3){
        funcoes.RemoverVenda(resp);
    }
    else if(resp==4){
        funcoes.ListarRegistros()
    }
    
}