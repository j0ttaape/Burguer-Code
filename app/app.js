import * as funcoes from './funcoes.js'
import prompt from 'prompt-sync'
let ler = prompt();
let opcao = 0;
let resp
    
    funcoes.ApresentarPrograma();
    
    while(resp!==0){
    
    await funcoes.sleep(1000);

    funcoes.MenuDoPrograma();
    
    resp = Number(ler());

    await funcoes.sleep(1000);

    if(resp==1){                
       await funcoes.cardapio(resp);
    }
    
    else if(resp==2){
        await funcoes.RegistroDeVenda(resp);
    }
    
    else if(resp==3){
        await funcoes.RemoverVenda(resp, funcoes.Cardapio);
    }
    else if(resp==4){
        await funcoes.ListarRegistros(funcoes.Cardapio)
        
    }
    else if(resp==5){
        await funcoes.SomarVendas(funcoes.Cardapio)
    }
    else if(resp==6){
        await funcoes.MediaVendas(funcoes.Cardapio)
    }
    else{console.log(`Saindo do programa...`)}
    
}