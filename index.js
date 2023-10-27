// chamando os elementos html:
const OpenModalButton = document.querySelector("#open-modal")
const CloseModalButton = document.querySelector("#close-modal")
const fade = document.querySelector("#fade")
const modal = document.querySelector("#modal")

// Criando função "toggle", que remove as classes dos elem.
const ToggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}

// Adc evento de clique para a função "toggle".
// vou chamar os elem por array e adc uma função com "foreach", criando um parâmetro também. Esse parâmetro irá criar o evento.
[OpenModalButton,CloseModalButton, fade].forEach((elem) => {
    elem.addEventListener("click", ToggleModal)
})