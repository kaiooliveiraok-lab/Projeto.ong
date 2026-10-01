const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!formulario.checkValidity()) {
        alert("Verifique os campos preenchidos.");
        return;
    }

    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        nascimento: document.getElementById("nascimento").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        cep: document.getElementById("cep").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value
    };

    localStorage.setItem("dadosCadastro", JSON.stringify(dados));

    alert("Cadastro enviado com sucesso!");
});
const dadosSalvos = localStorage.getItem("dadosCadastro");

if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);

    document.getElementById("nome").value = dados.nome;
    document.getElementById("email").value = dados.email;
    document.getElementById("nascimento").value = dados.nascimento;
    document.getElementById("cpf").value = dados.cpf;
    document.getElementById("telefone").value = dados.telefone;
    document.getElementById("cep").value = dados.cep;
    document.getElementById("endereco").value = dados.endereco;
    document.getElementById("cidade").value = dados.cidade;
    document.getElementById("estado").value = dados.estado;
}