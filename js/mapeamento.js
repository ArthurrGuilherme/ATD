/*Mapeamento*/ 
document.querySelector("#btn-primaria").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#container-secundaria");

    console.log("go to up");
});
function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}
document.querySelector("#servicos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#container-servicos");

    console.log("go to up");
});
document.querySelector("#btn-sessao-secundario").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#conatiner-quarta");

    console.log("go to up");
});
document.querySelector("#cases").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#empresa");

    console.log("go to up");
});