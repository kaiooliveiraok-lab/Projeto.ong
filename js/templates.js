function templateProjeto(titulo, descricao, status) {
    return `
        <section>
            <h2>${titulo}</h2>
            <span class="badge">${status}</span>
            <p>${descricao}</p>
        </section>
    `;
}