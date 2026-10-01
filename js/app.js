const app = document.getElementById("app");

function navegar(conteudo) {
    app.innerHTML = conteudo;
}

function carregarPagina(pagina) {
    if (pagina === "inicio") {
        navegar("<h2>Início</h2><p>Bem-vindo à nossa ONG.</p>");
    } else if (pagina === "projetos") {
        const projetoEducacao = templateProjeto(
            "Projeto de Educação",
            "Nosso projeto busca promover oportunidades de educação para crianças e jovens da comunidade.",
            "Ativo"
        );

        const projetoAlimentacao = templateProjeto(
            "Projeto de Alimentação",
            "Desenvolvemos ações para ajudar famílias em situação de vulnerabilidade por meio da distribuição de alimentos.",
            "Em andamento"
        );

        navegar(projetoEducacao + projetoAlimentacao);
    } else if (pagina === "contato") {
        navegar("<h2>Contato</h2><p>Entre em contato conosco.</p>");
    }
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pagina = this.getAttribute("href").replace(".html", "");

        carregarPagina(pagina);
    });
});