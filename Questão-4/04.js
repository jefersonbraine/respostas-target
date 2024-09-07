// Dados de faturamento por estado
const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentual(faturamento) {
  // Calcula o total de faturamento
  const totalFaturamento = Object.values(faturamento).reduce(
    (total, valor) => total + valor,
    0
  );

  // Calcula o percentual de cada estado e imprime o resultado
  for (const estado in faturamento) {
    const percentual = ((faturamento[estado] / totalFaturamento) * 100).toFixed(
      2
    );
    console.log(`${estado}: ${percentual}%`);
  }
}

// Executando a função com os dados de faturamento
calcularPercentual(faturamentoEstados);
