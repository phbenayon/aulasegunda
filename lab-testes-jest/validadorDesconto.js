function calcularDesconto(idade) {
  if (idade < 0 || idade > 120) {
    throw new Error("Idade fora da faixa permitida (0 a 120).");
  }

  if (idade <= 17) {
    return 0.10;
  } else if (idade <= 59) {
    return 0.00;
  } else {
    return 0.20;
  }
}

module.exports = { calcularDesconto };