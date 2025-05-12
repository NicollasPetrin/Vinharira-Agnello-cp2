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
}
