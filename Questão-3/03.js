
const faturamentoMensal = {
  dias: [
    { dia: 1, faturamento: 1210 },
    { dia: 2, faturamento: 2378 },
    { dia: 3, faturamento: 2391 },
    { dia: 4, faturamento: 3129 },
    { dia: 5, faturamento: 4840 },
    { dia: 6, faturamento: 0 },
    { dia: 7, faturamento: 0 },
    { dia: 8, faturamento: 3474 },
    { dia: 9, faturamento: 1349 },
    { dia: 10, faturamento: 2501 },
  ],
};

function calcularFaturamento(faturamentoMensal) {
  const faturamentos = faturamentoMensal.dias.map((dia) => dia.faturamento); // Extraindo os valores de faturamento

  // Filtra dias com faturamento > 0 (ignora finais de semana e feriados)
  const diasComFaturamento = faturamentos.filter(
    (faturamento) => faturamento > 0
  );

  // Menor e maior valor de faturamento
  const menorFaturamento = Math.min(...diasComFaturamento);
  const maiorFaturamento = Math.max(...diasComFaturamento);

  // Cálculo da soma e média mensal
  const somaFaturamento = diasComFaturamento.reduce(
    (total, valor) => total + valor,
    0
  );
  const mediaMensal = somaFaturamento / diasComFaturamento.length;

  // Número de dias com faturamento acima da média
  const diasAcimaDaMedia = faturamentos.filter(
    (faturamento) => faturamento > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

// Executando a função com o JSON de faturamento
const resultado = calcularFaturamento(faturamentoMensal);

console.log("Menor faturamento:", resultado.menorFaturamento);
console.log("Maior faturamento:", resultado.maiorFaturamento);
console.log("Dias acima da média:", resultado.diasAcimaDaMedia);
