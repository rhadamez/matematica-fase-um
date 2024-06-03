const precos = [
  61990,
  65990,
  60360,
  64990,
  64900,
  62900,
  64900,
  62000,
  61900,
  61890,
]

const kms = [
  25000,
  31000,
  42207,
  19000,
  37269,
  15750,
  18250,
  43082,
  58564,
  25241,
]

const amostra = [
  53, 50, 25, 41, 32,
  40, 67, 44, 51 ,46,
  43, 79, 18, 73, 50
]

function calcularTotal(array) {
  return array.reduce((acumulator, current) => acumulator+current, 0)
}

function calcularMedia(array) {
  const total = calcularTotal(array)
  const media = total/array.length
  console.log('Total --> ' + total)
  console.log('Média --> ' + media.toFixed(2))
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

  console.log('Diferença ao quadrado --> ' + total.toFixed(2))
  return total
}

function calcularDesvioPadrao(array, comMedia) {
  let total = 0
  const diferencaAoQuadrado = calcularDiferencaAoQuadrado(array, comMedia)
  total = total + diferencaAoQuadrado

  const variancia = total / (array.length - 1)

  const desvioPadrao = Math.sqrt(variancia);
  console.log('Desvio padrão --> '+ desvioPadrao.toFixed(2))
  return desvioPadrao
}

calcularDesvioPadrao(amostra)