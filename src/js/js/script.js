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
    // Exibe os dados do vinho no console e mostra um alerta se o estoque estiver baixo.
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
}
