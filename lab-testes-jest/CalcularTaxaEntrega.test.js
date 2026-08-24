const { CalcularTaxaEntrega, DistanciaInvalidaException } = require("./CalcularTaxaEntrega");

describe("Validador de Taxa de Entrega por Distância (ISO/IEC/IEEE 29119-4)", () => {
  describe("Faixa Curta (1 a 10 km)", () => {
    test("CT-01: Limite inferior curta", () => {
      expect(CalcularTaxaEntrega(1)).toBe(5.00);
    });

    test("CT-02: Valor intermediário curta", () => {
      expect(CalcularTaxaEntrega(5)).toBe(5.00);
    });

    test("CT-03: Limite superior curta", () => {
      expect(CalcularTaxaEntrega(10)).toBe(5.00);
    });
  });

  describe("Faixa Média (11 a 50 km)", () => {
    test("CT-04: Limite inferior média", () => {
      expect(CalcularTaxaEntrega(11)).toBe(15.00);
    });

    test("CT-05: Valor intermediário média", () => {
      expect(CalcularTaxaEntrega(30)).toBe(15.00);
    });

    test("CT-06: Limite superior média", () => {
      expect(CalcularTaxaEntrega(50)).toBe(15.00);
    });
  });

  describe("Faixa Longa (51 a 100 km)", () => {
    test("CT-07: Limite inferior longa", () => {
      expect(CalcularTaxaEntrega(51)).toBe(30.00);
    });

    test("CT-08: Valor intermediário longa", () => {
      expect(CalcularTaxaEntrega(75)).toBe(30.00);
    });

    test("CT-09: Limite superior longa", () => {
      expect(CalcularTaxaEntrega(100)).toBe(30.00);
    });
  });

  describe("Entradas Inválidas", () => {
    test("CT-10: Distância zero", () => {
      expect(() => CalcularTaxaEntrega(0)).toThrow("Distância fora da faixa permitida (1 a 100 km).");
    });

    test("CT-11: Distância negativa", () => {
      expect(() => CalcularTaxaEntrega(-5)).toThrow("Distância fora da faixa permitida (1 a 100 km).");
    });

    test("CT-12: Distância acima do limite", () => {
      expect(() => CalcularTaxaEntrega(101)).toThrow("Distância fora da faixa permitida (1 a 100 km).");
    });

    test("CT-13: Erro deve ser instância de DistanciaInvalidaException", () => {
      expect(() => CalcularTaxaEntrega(150)).toThrow(DistanciaInvalidaException);
    });
  });
});