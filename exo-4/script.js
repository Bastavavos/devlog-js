// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//suppr dernier element
let last = secretMessage.pop();
console.log(secretMessage)
//ajouter
let newLength = secretMessage.push('to','program')
console.log(secretMessage)
//remplacer 
let six = secretMessage[6] = 'right'
console.log(secretMessage)
//suppr premier element
let first =  secretMessage.shift()
console.log(secretMessage)

let ajoutdebuttable = secretMessage.unshift('Programming')
console.log(secretMessage)

let remove = secretMessage.splice(5,5,'know')
console.log(secretMessage.join())

