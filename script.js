
// Função para coletar dados de altura e sexo
function coletarDados() {
    const dados = [];
  
    for (let i = 0; i < 15; i++) {
      const altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1}:`));
      const sexo = prompt(`Digite o sexo da pessoa ${i + 1} (M/F):`).toUpperCase();
  
      if (isNaN(altura) || !["M", "F"].includes(sexo)) {
        alert("Dados inválidos. Tente novamente.");
        i--; // Reduzir o contador se os dados forem inválidos
        continue;
      }
  
      dados.push({ altura, sexo });
    }
  
    return dados;
  }
  
  // Função para calcular a maior e menor altura
  function calcularMaiorMenorAltura(dados) {
    let maiorAltura = dados[0].altura;
    let menorAltura = dados[0].altura;
  
    for (const pessoa of dados) {
      if (pessoa.altura > maiorAltura) {
        maiorAltura = pessoa.altura;
      } else if (pessoa.altura < menorAltura) {
        menorAltura = pessoa.altura;
      }
    }
  
    return { maiorAltura, menorAltura };
  }
  
  // Função para calcular a média de altura dos homens
  function calcularMediaAlturaHomens(dados) {
    let alturaTotalHomens = 0;
    let numeroHomens = 0;
  
    for (const pessoa of dados) {
      if (pessoa.sexo === "M") {
        alturaTotalHomens += pessoa.altura;
        numeroHomens++;
      }
    }
  
    if (numeroHomens === 0) {
      return 0; // Retorna 0 se não houver homens
    }
  
    return alturaTotalHomens / numeroHomens;
  }
  
  // Função para contar o número de mulheres
  function contarMulheres(dados) {
    let numeroMulheres = 0;
  
    for (const pessoa of dados) {
      if (pessoa.sexo === "F") {
        numeroMulheres++;
      }
    }
  
    return numeroMulheres;
  }
  
  // Função principal
  const dados = coletarDados();
  const { maiorAltura, menorAltura } = calcularMaiorMenorAltura(dados);
  const mediaAlturaHomens = calcularMediaAlturaHomens(dados);
  const numeroMulheres = contarMulheres(dados);
  
  console.log("Maior altura:", maiorAltura.toFixed(2) + "m");
  console.log("Menor altura:", menorAltura.toFixed(2) + "m");
  console.log("Média de altura dos homens:", mediaAlturaHomens.toFixed(2) + "m");
  console.log("Número de mulheres:", numeroMulheres);