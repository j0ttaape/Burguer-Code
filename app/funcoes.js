import prompt from 'prompt-sync'
let ler = prompt();
export let Cardapio = [
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
    console.log(`---------------------------------------------------------------\n   Olá, seja bem-vindo a BurguerCode \n   O que você deseja fazer? \n  1. Apresentar Cardapio \n   2. Registrar Venda \n   3. Cancelar Venda \n   4. Listar vendas \n   5. Soma total das vendas \n   0. Sair do programa\n---------------------------------------------------------------`)
}

//funcao do cardapio com preço
export async function cardapio() {
    await sleep(1000);
    console.log(`---------------------------------------------------------------\n   Opções: \n   0. Sandubão.......... R$12\n   1. CheeseBurgao.......... R$17,50\n   BurgaoDuplo.......... R$19\n   Coca-Cola.......... R$11\n   HamburguerVegetariano.......... R$15`)
}

// funcao de registro
export async function RegistroDeVenda(resp){
    await sleep(2000);  

    console.log(`---------------------------------------------------------------\n Boa! você escolheu registrar uma venda \n Qual a posição do lanche pedido? \n--------------------------------------------------------------- `)
    let lanche = Number(ler());

    console.log(`Qual a quantidade que você irá registrar?`)
    let qtd = Number(ler());

    if(lanche == 0){
        console.log(`Registrei a venda de um Sandubão!`)
        Cardapio[0].quantidade+= qtd;
    }
    else if(lanche==1){
        console.log(`Registrei a venda de um CheeseBurguer`)
        Cardapio[1].quantidade+= qtd;
    }
    else if(lanche==2){
        console.log(`Registrei a venda de um Coca-Cola`)
        Cardapio[2].quantidade+= qtd;
    }
    
    else if(lanche==3){
        console.log(`Registrei a venda de um HamburguerVegetariano`)
        Cardapio[3].quantidade+= qtd;
    }
    else(console.log(`Opcão Inválida, digite de novo!`))

}

//funcao de remover registro
export async function RemoverVenda(resp, Cardapio){

    await sleep(2000);

    console.log(`\n\n---------------------------------------------------------------\n Qual vai ser o registro que você deseja remover\n   0.Sandubão \n   1.CheeseBurguer \n   2.Coca-Cola \n   3.HamburguerVegetariano   ---------------------------------------------------------------?`)
    let remover = Number(ler());

    await sleep(2000);

    console.log(`Qual a quantidade?`)
    let qtd = Number(ler());

    await sleep(2000);

    if(remover>=0 && remover <= 3){
 
        if(remover === 0){
        Cardapio[0].quantidade -= qtd;
        console.log(`Removi ${qtd} de Sandubão, agora você possui ${Cardapio[0].quantidade}`)
        }
        else if(remover === 1){
            Cardapio[1].quantidade -= qtd;
            console.log(`Removi ${qtd} de CheeseBurguer, agora você possui ${Cardapio[1].quantidade}`)

        }
        
        else if(remover === 2){
            Cardapio[2].quantidade -= qtd;
            console.log(`Removi ${qtd} de Coca-Cola, agora você possui ${Cardapio[2].quantidade}`)

        }
        
        else if(remover === 3){
            Cardapio[3].quantidade -= qtd;
            console.log(`Removi ${qtd} de HamburguerVegetariano, agora você possui ${Cardapio[3].quantidade}`)

        }
    }
    else(console.log(`Opção inválida`))
}

//Listar registros dos itens 

export async function ListarRegistros(Cardapio) {
    await sleep(2000);

    console.log(`---------------------------------------------------------------\n   Quantidade de Sandubão = ${Cardapio[0].quantidade}\n   Quantidade de CheeseBurguer = ${Cardapio[1].quantidade}\n   Quantidade de Coca-Cola = ${Cardapio[2].quantidade}\n  Quantidade de HamburguerVegetariano = ${Cardapio[3].quantidade}\n         `)
}

