
function calcularSoma(indice) {
  let soma = 0;
  for (let i = 1; i <= indice; i++) {
    soma += i;
  }
  return soma;
}


const resultado = calcularSoma(13);
console.log(resultado); 