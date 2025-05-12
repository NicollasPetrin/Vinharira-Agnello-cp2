function cadastrarVinho() {
    function validarEntrada(mensagem, tipo) {
      let valor;
      do {
        valor = prompt(mensagem);
        if (tipo === 'numero') {
          valor = parseInt(valor);
        }
      } while (valor === null || valor === '' || isNaN(valor));
      return valor;
    }
  
    function estoqueBaixo(quantidade) {
      return quantidade < 5;
    }
  
    function classificarVinho(safra) {
      const anoAtual = new Date().getFullYear();
      const idade = anoAtual - safra;
      if (idade <= 3) return 'Jovem';
      if (idade <= 10) return 'Amadurecido';
      return 'Antigo';
    }
  
    function exibirDados(nome, safra, quantidade, classificacao, alertaEstoque) {
      console.log(`Nome: ${nome}`);
      console.log(`Safra: ${safra}`);
      console.log(`Quantidade: ${quantidade}`);
      console.log(`Classificação: ${classificacao}`);
      if (alertaEstoque) {
        console.log('⚠ Estoque baixo!');
        alert(`Estoque baixo para: ${nome}`);
      }
    }
  
    let continuar = true;
    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;
    let safraMaisAntiga = null;
    let nomeMaisAntigo = '';
  
    while (continuar) {
      const nome = prompt("Nome do vinho:");
      const safra = validarEntrada("Ano da safra:", "numero");
      const quantidade = validarEntrada("Quantidade em estoque:", "numero");
  
      const classificacao = classificarVinho(safra);
      const alertaEstoque = estoqueBaixo(quantidade);
  
      exibirDados(nome, safra, quantidade, classificacao, alertaEstoque);
  
      totalCadastros++;
  
      if (alertaEstoque) {
        totalEstoqueBaixo++;
      }
  
      if (safraMaisAntiga === null || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeMaisAntigo = nome;
      }
  
      continuar = prompt("Deseja cadastrar outro vinho? (s/n)").toLowerCase() === 's';
    }
  
    alert(
      `Cadastros realizados: ${totalCadastros}\n` +
      `Vinhos com estoque baixo: ${totalEstoqueBaixo}\n` +
      `Vinho mais antigo: ${nomeMaisAntigo} (safra ${safraMaisAntiga})`
    );
  }
  