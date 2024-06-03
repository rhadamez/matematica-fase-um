import { converterParaReais } from './utils.js'
import { kms, precos } from './tabelas.js'

function calcularTotal(array) {
  return array.reduce((acumulator, current) => acumulator+current, 0)
}

function calcularMedia(array) {
  const total = calcularTotal(array)
  const media = total/array.length
  console.log('Total: ' + converterParaReais(total))
  console.log('Média: ' + converterParaReais(media))
  return media
}

function calcularDiferencaAoQuadrado(array, media) {
  const valorMedia = media ? media : calcularMedia(array)

  let total = 0
  array.map(i => {
    const diferenca = Math.abs(i - valorMedia);
    const diferencaQuadrado = diferenca * diferenca;
    total = total + diferencaQuadrado
  });

  return total
}

function calcularDesvioPadrao(array, comMedia) {
  let total = 0
  const diferencaAoQuadrado = calcularDiferencaAoQuadrado(array, comMedia)
  total = total + diferencaAoQuadrado

  const variancia = total / (array.length - 1)

  const desvioPadrao = Math.sqrt(variancia);
  console.log('Desvio padrão: R$ '+ converterParaReais(desvioPadrao))
  return desvioPadrao
}

console.log('------------------')
console.log('------Preço-------')
console.log('------------------')

calcularDesvioPadrao(precos)

console.log('-----------------')
console.log('--Quilometragem--')
console.log('-----------------')

calcularDesvioPadrao(kms)

