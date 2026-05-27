class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(form) {
    // Impede o recarregamento da página para processar via JS
    event.preventDefault();

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    // Exibe feedback ao usuário
    alert(`Obrigado, ${data.nome}! Seus dados foram encaminhados com sucesso. Entraremos em contato via ${data.tipoContato}.`);
    
    // Opcional: Limpar formulário
    form.reset();
}