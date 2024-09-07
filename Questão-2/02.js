function fibonacci(numero) {
  let a = 0,
    b = 1,
    temp;

  // Verifica a sequência até que 'b' seja maior ou igual ao número informado
  while (b < numero) {
    temp = a;
    a = b;
    b = temp + b;
  }

  // Retorna se o número pertence ou não à sequência usando ternário
  return b === numero || a === numero
    ? `${numero} pertence à sequência de Fibonacci.`
    : `${numero} não pertence à sequência de Fibonacci.`;
}

let numero = 3;
console.log(fibonacci(numero));
