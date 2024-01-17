// # CRIAR AO MENOS UM OBJETO PARA CONTROLAR O FUNCIONAMENTO DO SEU SIMULADOR
// # INCORPORAR SUAS PROPRIEDADES E SEU CONSTRUTOR
// # INVOCAR ESSE OBJETO EM ALGUM MOMENTO ONDE O USUÁRIO PODE REALIZAR ALGUMA AÇÃO

	const SimuladordeVendadeFrutas = {
  maçã: 10,
  banana: 15,

  vendaDaFruta: class {
    constructor(fruta, quantidade) {
      if (SimuladordeVendadeFrutas[fruta] >= quantidade && quantidade > 0) {
        SimuladordeVendadeFrutas[fruta] -= quantidade;
        console.log(`Venda realizada! Você comprou ${quantidade} de ${fruta}(s). Ainda restam: ${SimuladordeVendadeFrutas[fruta]}`);
      } else {
        console.log(`Não foi possível realizar a sua compra de ${quantidade} da ${fruta}. Estoque insuficiente.`);
      }
    }
  },

  estoqueDeFrutas: function() {
    console.log("Estoque atual:");
    console.log(`Maçã ${SimuladordeVendadeFrutas.maçã}`);
    console.log(`Banana ${SimuladordeVendadeFrutas.banana}`);
  },

  exibirEstoque: function() {
    console.log("Estoque atual:");
    console.log(`Maçã ${SimuladordeVendadeFrutas.maçã}`);
    console.log(`Banana ${SimuladordeVendadeFrutas.banana}`);
  }
};

SimuladordeVendadeFrutas.exibirEstoque();
const vendaMaça = new SimuladordeVendadeFrutas.vendaDaFruta("maçã", 3);
const vendaBanana = new SimuladordeVendadeFrutas.vendaDaFruta("banana", 6);
SimuladordeVendadeFrutas.exibirEstoque();

