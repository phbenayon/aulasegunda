const { calcularDesconto } = require("./validadorDesconto");

describe("Validador de Desconto por Idade (ISO/IEC/IEEE 29119-4)", () => {
  describe("Faixa Menor (0 a 17 anos)", () => {
    test("CT-01: Limite inferior jovem", () => {
      expect(calcularDesconto(0)).toBe(0.10);
    });

    test("CT-02: Valor intermediário jovem", () => {
      expect(calcularDesconto(10)).toBe(0.10);
    });

    test("CT-03: Limite superior jovem", () => {
      expect(calcularDesconto(17)).toBe(0.10);
    });
  });

  describe("Faixa Adulto (18 a 59 anos)", () => {
    test("CT-04: Limite inferior adulto", () => {
      expect(calcularDesconto(18)).toBe(0.00);
    });

    test("CT-05: Limite superior adulto", () => {
      expect(calcularDesconto(59)).toBe(0.00);
    });
  });

  describe("Faixa Idoso (60 a 120 anos)", () => {
    test("CT-06: Limite inferior idoso", () => {
      expect(calcularDesconto(60)).toBe(0.20);
    });

    test("CT-07: Limite superior idoso", () => {
      expect(calcularDesconto(120)).toBe(0.20);
    });
  });

  describe("Entradas Inválidas", () => {
    test("CT-08: Idade negativa", () => {
      expect(() => calcularDesconto(-1)).toThrow("Idade fora da faixa permitida (0 a 120).");
    });

    test("CT-09: Idade acima do limite", () => {
      expect(() => calcularDesconto(121)).toThrow("Idade fora da faixa permitida (0 a 120).");
    });
  });
});