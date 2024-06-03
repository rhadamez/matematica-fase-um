import { imprimir } from './utils.js'
import { kms, precos, amostraAula } from './tabelas.js'

function calcularTotal(array) {
  return array.reduce((acumulator, current) => acumulator+current, 0)
}

function calcularMedia(array) {
  const total = calcularTotal(array)
  const media = total/array.length
  return media
}

function calcularDiferencaAoQuadrado(array, media) {
  let total = 0
  array.map(i => {
    const diferenca = Math.abs(i - media);
    const diferencaQuadrado = diferenca * diferenca;
    total = total + diferencaQuadrado
  });

  return total
}

function calcularDesvioPadrao(array, tipoValor, comMedia) {
  const media = comMedia ?? calcularMedia(array)
  imprimir(media, 'Média', tipoValor)

  let total = 0
  const diferencaAoQuadrado = calcularDiferencaAoQuadrado(array, media)
  total = total + diferencaAoQuadrado

  const variancia = total / (array.length - 1)

  const desvioPadrao = Math.sqrt(variancia);

  imprimir(desvioPadrao, 'Desvio padrão', tipoValor)
  return desvioPadrao
}

function calcularIntervaloDeConfianca(valorConfianca, array) {
  const mediaAmostra = calcularMedia(array)
  const desvioPadrao = calcularDesvioPadrao(array, 'decimal', mediaAmostra)
  const em = desvioPadrao/(Math.sqrt(array.length))

  const limiteInferior = mediaAmostra - (em * valorConfianca)
  const limiteSuperior = mediaAmostra + (em * valorConfianca)
  console.log('I.C com confiança de '+valorConfianca+': ['+limiteInferior.toFixed(2)+';'+limiteSuperior.toFixed(2)+']')
}

console.log('------------------')
console.log('------Preço-------')
console.log('------------------')

calcularDesvioPadrao(precos, 'reais')

console.log('-----------------')
console.log('--Quilometragem--')
console.log('-----------------')

calcularDesvioPadrao(kms, 'decimal')

console.log('-----------------')
console.log('--Amostra aula--')
console.log('-----------------')

calcularIntervaloDeConfianca(1.960, amostraAula)