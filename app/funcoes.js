import prompt from 'prompt-sync'
let ler = prompt();
let Cardapio = [
    {Sandubão : 12, quantidade: 0 },
    {CheeseBurgao :17.5, quantidade : 0},
    {BurgaoDuplo: 19, quantidade: 0},
    {CocaCola: 11, quantidade: 0},
    {HamburguerVegetariano: 15, quantidade:0}
]


//funcao sleep
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Apresentacao do programa
export function ApresentarPrograma (){
    console.log(`---------------------------------------------------------------\n      Olá, seja bem-vindo a BurguerCode \n   O que você deseja fazer? \n   1. Registrar Venda \n   2. Cancelar Venda \n   3. Listar vendas \n   4. Listar vendas de um periodo \n   5. Apresentar Cardapio \n   0. Sair do programa\n---------------------------------------------------------------`)
}

// funcao de registro
export function RegistroDeVenda(resp){
    console.log(`---------------------------------------------------------------\n Boa! você escolheu registrar uma venda \n Qual a posição do lanche pedido? \n--------------------------------------------------------------- `)
    let lanche = Number(ler());

    if(lanche == 0){
        console.log(`Registrei a venda de um Sandubão!`)
        Cardapio[0].quantidade+= 1;
    }
    else if(lanche==1){
        console.log(`Registrei a venda de um CheeseBurguer`)
        Cardapio[1].quantidade+= 1;
    }
    else if(lanche==2){
        console.log(`Registrei a venda de um Coca-Cola`)
        Cardapio[2].quantidade+= 1;
    }
    
    else if(lanche==3){
        console.log(`Registrei a venda de um HamburguerVegetariano`)
        Cardapio[3].quantidade+= 1;
    }
    else(console.log(`Opcão Inválida, digite de novo!`))

}

//funcao de remover registro
export function RemoverVenda(resp){

    console.log(`\n\n---------------------------------------------------------------\n Qual a posição `)
    
}
