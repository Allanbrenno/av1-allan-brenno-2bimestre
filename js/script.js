const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = inputNome.value;
    const idade = inputIdade.value;

    resultado.classList.remove(
"d-none",
"alert-sucess",
"alert-warning",
"alert-danger",

);

    if (idade < 18) {
        resultado.textContent = `Olá, ${nome}, você é menor de idade.`;
        resultado.classList.add("alert-danger");
    } else {
        resultado.textContent = `Olá, ${nome}, você é maior de idade.`;
        resultado.classList.add("alert-success");
    }
    resultado.classList.remove("d-none");
});