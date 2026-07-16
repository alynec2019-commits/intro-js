/// uma função é um bloco de código reutilizável
// executa uma tarefa especifica
// funções são chamadas/invocadas 

/*

function nomeDaFuncao(){
  // código da função  
}

*/

// 1 - criando a função
function saudacao() {
    document.body.innerHTML = "Olá, bem vindo(a)"
}

// 2 - para a função funcionar/executar, precisamos cham-la/invocar
saudacao()


// função com parametros
function cumprimento(nomeDoUsuario){
    // o sinal de + está sendo usado para concatenar(unir/juntar) o texto de boas vindas com o texto de parametro nome
    document.body.innerHTML ="Olá, bem vindo(a) " + nomeDoUsuario
}

// chamndo/invocanto uma função com o parametro 
cumprimento("Anthony")


// exemplo de uma aplicação 
let user = true
if (user === true) {
  cumprimento("Anthony Gabriel")  
} else {
    document.body.innerHTML = "Credencias inválidas"
}


/* outros exemplos de funções com parametros */
function soma(a, b) {
    document.body.innerHTML = a + b
} 

soma(8, 20) // 8 + 20 = 28
soma("olá ",  "victor") // "olá" + "Victor" = "olá victor"

/* Exemplo de função com retorno e validação de dados */
function multiplicar(a, b){
  // verifica se o valor do parametro a foi informado
  if(a === undefined){
    document.body.innerHTML = "por favor, digite o valor do número A"
    return
  }
  // verifica se o valor do parametro b foi informado

  if(b === undefined) {
    document.body.innerHTML = "por favor, digite o valor do número B"
    return
  }

  // typeof = é um operador do javascript que serve para DESCOBRIR O TIPO DE UM VALOR OU UMA VARIAVEL
  // o operador !== (diferente) avalia se o elemento é diferente do tipo e valor
  if(typeof a !== "number"){
    document.body.innerHTML = "o valor de A precisa ser um número"
    return
  }

  // 
  if(typeof b !== "number"){
    document.body.innerHTML = "o valor de B precisa ser um número"
    return
  }

  // Number = é uma função usada para converter valores para números 
  // IsNaN = é uma funçãoque serve para verificar se o valor é NaN(Not a Namber = Não é um numero)
  if(Number.isNaN(a)) {
    document.body.innerHTML = "Número invalido"
    return
  }

  if(Number.isNaN(b)) {
    document.body.innerHTML = "Número invalido"
    return
  }

  /* Exemplo: 
  "o resultado da multiplicação entre" + a + "e" + b + "é igual a" + (a * b)*/
  // `` = Tamplate Literals
  // as "" = Não permite acessar os valores das variaveis
  document.body.innerHTML = `O resultado da multiplicação entre ${a} e ${b} é igual a ${a * b}` 

  
}

//multiplicar("5", "2") // 5 * 2 = 10

multiplicar(a = 8, b = 7) // 5 * 2 = 10


