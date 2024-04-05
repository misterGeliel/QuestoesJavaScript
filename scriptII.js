function somar(...valores) {
    const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma;
  }
  
  // Exemplos de uso
  console.log(somar(1, 2)); // Resultado: 3
  console.log(somar(1, 2, 3, 4)); // Resultado: 10
  console.log(somar(2, 3, 4, 5, 6, 7, 8)); // Resultado: 35
  console.log(somar(2, 34, 5, 6, 7, 8, 98, 90, 3, 3, 4, 4, 56, 7, 78, 7, 8, 9)); // Resultado: 382