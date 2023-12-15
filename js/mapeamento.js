function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#Atd").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#conheça");

    console.log("go to up");
});
document.querySelector("#formulario").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#sessao-formulario");

    console.log("go to up");
});
document.querySelector("#nossos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#cases-sucesso");

    console.log("go to up");
});
document.querySelector("#maior").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#hub");

    console.log("go to up");
});
document.querySelector("#incio").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#apresentacao");

    console.log("go to up");
});
document.querySelector("#btn-terceiro-link").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#sessao-formulario");

    console.log("go to up");
});
document.querySelector("#btn-formulario-link").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#sessao-formulario");

    console.log("go to up");
});
document.querySelector("#btn-formulario-").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#sessao-formulario");

    console.log("go to up");
});
document.querySelector("#btn-comentarios").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#sessao-formulario");

    console.log("go to up");
});