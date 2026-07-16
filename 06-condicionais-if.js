// condição - é uma exigência, um requisito. Algo que precisa existir pra que algo aconteça ou seja considerado como verdadeiro

// as estruturas condicionais permitem que o programa tome decisões

// 1 - if/se simples
/* 

if(condição){
  // código
} 
*/

if (false) { // troque o false por true e veja a resposta no console
  console.log("Seja bem vindo(a)")
}

console.log("Depois do if")


// 2 - if...else - se/senão

/*

if(condição){
  // código aqui 
}else{
  // código aqui  
}

*/
let idade = 18

if (idade >= 18) {
  console.log("Você é maior de idade")
} else {
  console.log("Você não é maior de idade")
}

// exemplo - login de usuáriodddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
let user = true
if (user === true) {
  console.log("Seja bem vindo(a) Cristine")
} else {
  console.log("Usuário não conectado")
}

// 3 - if...else if - se/senão se
/*
if(condição){
  //código
} else if(outra condição){
  //código
} else if(mais uma outra condição){
  // código
} else{
  // código
}

*/

// serve para testar várias condições
let nota = 9

if (nota >= 9) {
  console.log("Excelente")
} else if (nota >= 7) {
  console.log("Aprovado(a)")
} else if (nota >= 4) {
  console.log("Recuperação")
} else {
  console.log("Reprovado(a)")
}
