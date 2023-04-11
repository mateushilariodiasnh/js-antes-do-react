//Nullish Coalescing Operator

/* const idade = 0 */
/* document.body.innerText = 'Sua idade é: ' + (idade || 'Não informado') *///Não serve para zero, pois ele é um operador falsy.
/* document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado')
 */

//Objetos

/* const user = {
  nome: 'Mateus',
  idade: 18,
  endereco: {
    logradouro: 'Rua José Ferreira Sobrinho',
    numero: 106,
  }
} */

/* document.body.innerHTML = ("nickname" in user)
document.body.innerHTML = Object.keys(user)
document.body.innerHTML = JSON.stringify(Object.values(user))
document.body.innerHTML = JSON.stringify(Object.entries(user)) */

//Desestruturação

/* const anos = user.idade
const { nome: firstName, endereco, nickname = 'Meth' } = user
document.body.innerHTML = JSON.stringify({firstName, endereco, nickname}) */

//Rest operator

/* const { nome, ...rest } = user
document.body.innerHTML = JSON.stringify(rest) */

/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const [first, , third, ...rest] = array 
document.body.innerHTML = JSON.stringify({first, third, rest}) */

//Short Syntax

/* const name = 'Mateus'
const idade = 18

const user = {
  name,
  idade,
}
 */
document.body.innerHTML = JSON.stringify(user)

//Optional Chaining

const user = {
  nome: 'Mateus',
  idade: 18,
  endereco: {
    logradouro: 'Rua José Ferreira Sobrinho',
    numero: 106,
    zip: {
      code: '14470000',
      city: 'Pedregulho',
    },
    showFullAdress() {
      return 'Ok'
    }
  }
}

document.body.innerHTML = user.endereco?.zip?.code ?? "Não informado"
document.body.innerHTML = user.endereco?.showFullAdress?.()