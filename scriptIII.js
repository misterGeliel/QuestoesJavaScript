// Função construtora para criar objetos Pessoa
function Pessoa(nome, idade, filiacao, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.filiacao = filiacao;
    this.endereco = endereco;
  
    // Função para verificar se os dados estão completos
    this.dadosCompletos = function() {
      return (
        this.nome &&
        this.idade > 0 &&
        this.filiacao.nomeDoPai &&
        this.filiacao.nomeDaMae &&
        this.endereco.rua &&
        this.endereco.cidade &&
        this.endereco.estado
      );
    };
  }
  
  // Criando objetos Pessoa
  const pessoa1 = new Pessoa(
    "João Silva",
    30,
    { nomeDoPai: "José Silva", nomeDaMae: "Maria Silva" },
    { rua: "Rua Principal", cidade: "João Pessoa", estado: "PB" }
  );
  
  const pessoa2 = new Pessoa(
    "Maria Oliveira",
    25,
    { nomeDoPai: "Pedro Oliveira", nomeDaMae: null },
    { rua: "Rua das Flores", cidade: "Campina Grande", estado: "PB" }
  );
  
  // Imprimindo valores das propriedades dos objetos
  console.log("Pessoa 1:");
  console.log(`Nome: ${pessoa1.nome}`);
  console.log(`Idade: ${pessoa1.idade}`);
  console.log(`Filiação: ${pessoa1.filiacao.nomeDoPai} (pai) e ${pessoa1.filiacao.nomeDaMae} (mãe)`);
  console.log(`Endereço: ${pessoa1.endereco.rua}, ${pessoa1.endereco.cidade} - ${pessoa1.endereco.estado}`);
  console.log(`Dados completos: ${pessoa1.dadosCompletos()}`);
  
  console.log("\nPessoa 2:");
  console.log(`Nome: ${pessoa2.nome}`);
  console.log(`Idade: ${pessoa2.idade}`);
  console.log(`Filiação: ${pessoa2.filiacao.nomeDoPai} (pai) e ${pessoa2.filiacao.nomeDaMae} (mãe)`);
  console.log(`Endereço: ${pessoa2.endereco.rua}, ${pessoa2.endereco.cidade} - ${pessoa2.endereco.estado}`);
  console.log(`Dados completos: ${pessoa2.dadosCompletos()}`);