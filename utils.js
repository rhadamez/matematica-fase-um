export function converterParaReais(valor) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(valor)
}

export function imprimir(valor, descricao, tipo) {
  const valorFormatado = tipo === 'reais' ? converterParaReais(valor) : valor.toFixed(2)
  console.log(descricao+': ' +valorFormatado)
}