const prompt = require('prompt-sync')();

class Produto {
  constructor(codigo, nome, preco) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }

  mostrarPreco() {
    console.log(`Código: ${this.codigo}\nProduto: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\n`);
  }

  aumentarPreco(valor) {
    this.preco += valor;
    console.log(`Preço atualizado! Novo valor de ${this.nome}: R$${this.preco.toFixed(2)}`);
  }

  diminuirPreco(valor) {
    if (this.preco - valor >= 0) {
      this.preco -= valor;
      console.log(`Preço reduzido! Novo valor de ${this.nome}: R$${this.preco.toFixed(2)}`);
    } else {
      console.log('Erro: O preço não pode ser negativo!');
    }
  }
}

// Lista de produtos
let produtos = [
  new Produto(1, "Notebook", 3500.00),
  new Produto(2, "Placa de Vídeo", 1500.00),
  new Produto(3, "Placa Mãe", 750.00),
  new Produto(4, "Memória RAM", 300.00),
  new Produto(5, "Gabinete", 450.00),
];

let opcao = '';

do {
  console.log('\n------ MENU ----- ');
  console.log('1 - Visualizar todos os produtos');
  console.log('2 - Buscar produto pelo código');
  console.log('3 - Adicionar novo produto');
  console.log('4 - Alterar preço de um produto');
  console.log('5 - Excluir produto');
  console.log('0 - Sair');
  opcao = prompt('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      console.log('\n--- Produtos Cadastrados ---\n');
      produtos.forEach(p => p.mostrarPreco());
      break;

    case '2':
      const codigoBusca = prompt('Digite o código do produto: ');
      const encontrado = produtos.find(p => p.codigo == codigoBusca);
      if (encontrado) {
        encontrado.mostrarPreco();
      } else {
        console.log('Produto não encontrado!\n');
      }
      break;

    case '3':
      const novoCodigo = parseInt(prompt('Digite o código do novo produto: '));
      const existe = produtos.find(p => p.codigo === novoCodigo);
      if (existe) {
        console.log('Erro: Já existe um produto com esse código!');
        break;
      }

      const novoNome = prompt('Digite o nome do produto: ');
      const novoPreco = parseFloat(prompt('Digite o preço do produto: '));

      produtos.push(new Produto(novoCodigo, novoNome, novoPreco));
      console.log('Produto adicionado com sucesso!');
      break;

    case '4':
      const codigoAlterar = prompt('Digite o código do produto: ');
      const produtoAlt = produtos.find(p => p.codigo == codigoAlterar);
      if (!produtoAlt) {
        console.log('Produto não encontrado!');
        break;
      }

      const tipo = prompt('Deseja (a)umentar ou (d)iminuir o preço? ');
      const valor = parseFloat(prompt('Digite o valor: '));

      if (tipo === 'a') {
        produtoAlt.aumentarPreco(valor);
      } else if (tipo === 'd') {
        produtoAlt.diminuirPreco(valor);
      } else {
        console.log('Opção inválida!');
      }
      break;

    case '5':
      const codigoExcluir = prompt('Digite o código do produto a excluir: ');
      const index = produtos.findIndex(p => p.codigo == codigoExcluir);
      if (index >= 0) {
        produtos.splice(index, 1);
        console.log('Produto excluído com sucesso!');
      } else {
        console.log('Produto não encontrado!');
      }
      break;

    case '0':
      console.log('Saindo...');
      break;

    default:
      console.log('Opção inválida!');
  }
} while (opcao !== '0');
