import { imprimir, imprimirIntervaloConfianca } from './utils.js'
import { kms, precos } from './tabelas.js'

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

function calcularDesvioPadrao(array, comMedia) {
  const media = comMedia ?? calcularMedia(array)

  let total = 0
  const diferencaAoQuadrado = calcularDiferencaAoQuadrado(array, media)
  total = total + diferencaAoQuadrado

  const variancia = total / (array.length - 1)

  const desvioPadrao = Math.sqrt(variancia);

  return desvioPadrao
}

function calcularIntervaloDeConfianca(valorConfianca, array) {
  const mediaAmostra = calcularMedia(array)
  const desvioPadrao = calcularDesvioPadrao(array, mediaAmostra)
  const erroPadrao = desvioPadrao/(Math.sqrt(array.length))

  const limiteInferior = mediaAmostra - (erroPadrao * valorConfianca)
  const limiteSuperior = mediaAmostra + (erroPadrao * valorConfianca)

  return { limiteInferior, limiteSuperior }
}

console.log('------------------')
console.log('------Preço-------')
console.log('------------------')
const mediaPreco = calcularMedia(precos)
const desvioPadraoPreco = calcularDesvioPadrao(precos)
const valorConfianca = 1.960
const intervalos = calcularIntervaloDeConfianca(valorConfianca, precos)
imprimir(mediaPreco, 'Média', 'reais')
imprimir(desvioPadraoPreco, 'Desvio padrão', 'reais')
imprimirIntervaloConfianca(valorConfianca, intervalos, 'reais')

console.log('-----------------')
console.log('--Quilometragem--')
console.log('-----------------')
const mediaKm = calcularMedia(kms)
const desvioPadraoKm = calcularDesvioPadrao(kms)
const valorConfiancaKm = 1.960
const intervalosKm = calcularIntervaloDeConfianca(valorConfiancaKm, kms)
imprimir(mediaKm, 'Média', 'decimal')
imprimir(desvioPadraoKm, 'Desvio padrão', 'decimal')
imprimirIntervaloConfianca(valorConfiancaKm, intervalosKm, 'decimal')