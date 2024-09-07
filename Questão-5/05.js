function inverterString(str) {
  let stringInvertida = ""; // String para armazenar o resultado

  // Loop para percorrer a string de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}


let stringOriginal = "testando";
let resultado = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", resultado);
