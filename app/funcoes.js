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
    console.log(`---------------------------------------------------------------\n   Olá, seja bem-vindo a BurguerCode \n ---------------------------------------------------------------`)
}

//funcao do menu
export function MenuDoPrograma(){
        console.log(`---------------------------------------------------------------\nO que você deseja fazer? \n  1. Apresentar Cardapio \n   2. Registrar Venda \n   3. Cancelar Venda \n   4. Listar vendas \n   5. Soma total das vendas \n   6. Média das vendas \n   0. Sair do programa\n---------------------------------------------------------------`)
}

//funcao do cardapio com preço
export async function cardapio() {
    await sleep(1000);
    console.log(`---------------------------------------------------------------\n   Opções: \n   0. Sandubão.......... R$12\n   1. CheeseBurgao.......... R$17,50\n   2. BurgaoDuplo.......... R$19\n   3. Coca-Cola.......... R$11\n   4. HamburguerVegetariano.......... R$15`)
}

// funcao de registro
export async function RegistroDeVenda(resp){
    await sleep(1000);  

    console.log(`---------------------------------------------------------------\n Boa! você escolheu registrar uma venda \n Qual a posição do lanche pedido? \n--------------------------------------------------------------- `)
    let lanche = Number(ler());

    console.log(`Qual a quantidade que você irá registrar?`)
    let qtd = Number(ler());
    
    await sleep(1000);
    
    if(lanche == 0){
        console.log(`Registrei ${qtd} Sandubão!`)
        Cardapio[0].quantidade+= qtd;
    }
    else if(lanche==1){
        console.log(`Registrei ${qtd} CheeseBurguer`)
        Cardapio[1].quantidade+= qtd;
    }
    else if(lanche==2){
        console.log(`Registrei ${qtd} Coca-Cola`)
        Cardapio[2].quantidade+= qtd;
    }
    
    else if(lanche==3){
        console.log(`Registrei ${qtd} HamburguerVegetariano`)
        Cardapio[3].quantidade+= qtd;
    }
    else(console.log(`Opcão Inválida, digite de novo!`))



}

//funcao de remover registro
export async function RemoverVenda(Cardapio){

    await sleep(1000);

    console.log(`\n\n---------------------------------------------------------------\n Qual vai ser o registro que você deseja remover\n   0.Sandubão \n   1.CheeseBurguer \n   2.BurgaoDuplo \n   3.Coca-Cola \n   4.HamburguerVegetariano   \n---------------------------------------------------------------`)
    let remover = Number(ler());

    await sleep(1000);

    console.log(`Qual a quantidade?`)
    let qtd = Number(ler());

    await sleep(1000);


    if(remover>=0 && remover <= 4){
 
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
            console.log(`Removi ${qtd} de BurgaoDuplo, agora você possui ${Cardapio[2].quantidade}`)

        }
        
        
        else if(remover === 3){
            Cardapio[2].quantidade -= qtd;
            console.log(`Removi ${qtd} de Coca-Cola, agora você possui ${Cardapio[3].quantidade}`)

        }
        
        else if(remover === 4){
            Cardapio[3].quantidade -= qtd;
            console.log(`Removi ${qtd} de HamburguerVegetariano, agora você possui ${Cardapio[4].quantidade}`)

        }
    }
    else(console.log(`Opção inválida`))
}

//Listar registros dos itens 

export async function ListarRegistros(Cardapio) {
    await sleep(1000);

    console.log(`---------------------------------------------------------------\n   Quantidade de Sandubão = ${Cardapio[0].quantidade}\n   Quantidade de CheeseBurguer = ${Cardapio[1].quantidade}\n   QUantidade de BurgaoDuplo = ${Cardapio[2].quantidade}\n   Quantidade de Coca-Cola = ${Cardapio[3].quantidade}\n  Quantidade de HamburguerVegetariano = ${Cardapio[4].quantidade}\n`)
}

//FUncao somar tudo

export async function SomarVendas(Cardapio) {
    await sleep(1000)
    let SomarVendas = (Cardapio[0].Sandubão * Cardapio[0].quantidade) + (Cardapio[1].CheeseBurgao * Cardapio[1].quantidade) + (Cardapio[2].BurgaoDuplo * Cardapio[2].quantidade) + (Cardapio[3].CocaCola * Cardapio[3].quantidade) + (Cardapio[4].HamburguerVegetariano * Cardapio[4].quantidade) ;
    console.log(`A quantidade de venda total é de: R$ ${SomarVendas}`)
}

//Funcao da media de vendas
export async function MediaVendas(Cardapio) {
    let MediadsVendas = ((Cardapio[0].Sandubão * Cardapio[0].quantidade) + (Cardapio[1].CheeseBurgao * Cardapio[1].quantidade) + (Cardapio[2].BurgaoDuplo * Cardapio[2].quantidade) + (Cardapio[3].CocaCola * Cardapio[3].quantidade) + (Cardapio[4].HamburguerVegetariano * Cardapio[4].quantidade))/5 ;
    console.log(`A média total de vendas é de ${MediadsVendas}`)
}