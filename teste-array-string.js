let alfabeto = "abcdefghijlmnopqrstuvwxyz"

//transformando uma string em um valor de caracteres
let vetorAlfabeto = Array.from(alfabeto)

console.log(vetorAlfabeto)

//obtendo cada caracter do vetor e seu respctivo indice
for(let letra of vetorAlfabeto.entries()){
    console.log(letra)
}

//obtendo uma letra do alfabeto comm base no seu indice
console.log(vetorAlfabeto[15])