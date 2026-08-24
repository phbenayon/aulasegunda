class DistanciaInvalidaException extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "DistanciaInvalidaException";
  }
}

function CalcularTaxaEntrega(distanciaKm) {
  if (distanciaKm < 1 || distanciaKm > 100) {
    throw new DistanciaInvalidaException("Distância fora da faixa permitida (1 a 100 km).");
  }

  if (distanciaKm <= 10) {
    return 5.00;
  } else if (distanciaKm <= 50) {
    return 15.00;
  } else {
    return 30.00;
  }
}

module.exports = { CalcularTaxaEntrega, DistanciaInvalidaException };