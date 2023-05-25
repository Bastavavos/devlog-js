// you can write js here

console.log('exo-5');

let input = prompt("écrits :")

var vowels = ["a", "e", "i", "o", "u", "y"]

let resultArray = []

/*for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < vowels.length - 1; j++) {
        if (input[i].toUpperCase() == vowels[j]) {
            resultArray.push(vowels[j])
        }
    }
}

console.log(resultArray.join("").toUpperCase())*/


for (let i = 0; i < input.length; i++) {
    console.log(input[i])
    if (vowels.indexOf(input[i])>-1) {
        resultArray.push(input[i])
    }
}

console.log(resultArray.join("").toUpperCase())

