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

export function imprimirIntervaloConfianca(valorConfianca, resultados, tipoValor) {
  const { limiteInferior, limiteSuperior } = resultados
  const inferior = tipoValor === 'reais' ? converterParaReais(limiteInferior) : limiteInferior.toFixed(2)
  const superior = tipoValor === 'reais' ? converterParaReais(limiteSuperior) : limiteSuperior.toFixed(2)
  console.log('I.C com confiança de '+valorConfianca+': ['+inferior+';'+superior+']')
}