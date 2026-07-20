/* um laço de repetição ou loop é uma estrutura que faz um bloco de código ser executado várias vezes. */

// principais laços de repetição
/* 1 - for = utilizamos esse laço de repetição quando sabemos quantas vezes desejamos repetir algo

for(início; condição; incremento){
  // código a ser executado
}
 */

for (let i = 0; // Começa em zero
  i < 5; // funciona ENQUANTO isso for verdadeiro
  i++ // aumenta +1 a cada volta
) {
  console.log(i)
}

// exemplo de laço de repetição com tabuada
let numeroDaTabuada = 9

for (let i = 1; i <= 10; i++) {
  console.log(`${numeroDaTabuada} x ${i} = ${numeroDaTabuada * i}`)
}

// tente fazer a tabuada do 7
// em vez de mostrar de 1 até 10, mostre de 10 até 1
// mude a inicialização, a condição e o tipo de operador que atualiza a variavel. Dica: não é mais o de incremento ++

// 2 - Laço While = é um laço de repetição que executa um bloco de código ENQUANTO uma condição for verdadeira
// Utilizamos o While(enquanto) quando você não sabe quantas vezes vai precisar repetir

/* 

while(condição){ 
  // código a ser executado
}

*/

// 1 - criar variavel de controle
let i = 0

while (i < 5) {
  console.log(i)

  // 2 - atualizar a variavel de controle
  i++
}

// exemplo em um sistema de login
let senha = prompt("digite a senha:")

while (senha !== "1234") {
  senha = prompt("Senha incorreta. Tente novamente: ")
  console.log(senha)
}

// 3 - do...while - parecido com o while, mas com uma diferença importante
// no do...while o código sempre executapelo menos uma vez antes de verificar a condição

/* 

do{
  // código a ser executado
  while(condição)
}

*/

// 1 - Criando a variável de controle
let numero = 1

do {
  console.log(numero)
  // 2 - atualizando a variavel de controle
  numero++
} while (numero < 5)

// exemplo com menu de opções
let opcao

do {
  console.log("1 - Ver saldo")
  console.log("2 - Sair")

  opcao = 2
} while (opcao != 2)