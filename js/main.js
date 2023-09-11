import { Cepe } from "./cep.js"
const cepFunction = new Cepe();
cepFunction.handleCepSubmit();

let menu = document.querySelector(".menu")
menu.addEventListener('click' , cepFunction.clearMenu)
