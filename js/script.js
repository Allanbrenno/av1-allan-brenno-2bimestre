
const cadastro = document.getElementById("cadastro");

cadastro.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Pegando o nome e o email
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Mostrando a mensagem
    document.getElementById("mensagem").innerHTML =
        "Cadastro realizado com sucesso, " + nome + "! Seja bem-vindo ao Mengão!";

    // Limpando os campos
    cadastro.reset();

});
