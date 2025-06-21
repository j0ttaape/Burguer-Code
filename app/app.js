import * as funcoes from './funcoes.js'
import prompt from 'prompt-sync'
let ler = prompt();
let opcao = 0;
let resp = -1;




while(resp == -1){
    
    funcoes.ApresentarPrograma();
    
    while(resp!==0){
    
    await funcoes.sleep(1000);

    resp = Number(ler());

    await funcoes.sleep(1000);

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
        funcoes.ListarRegistros(funcoes.Cardapio)
        
    }
    else if(resp==5){

    }
    else if(resp==6){

    }
    else{console.log(`Òpção inválida`)}
    
}
}