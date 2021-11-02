/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

let Pron = ["The", "My", "Your"];
let Adje = ["big", "best", "crazy"];
let Noun = ["solution", "answer", "initiative", "undertaking", "disclosure"];
let Domi = [".gov", ".tv", ".cl"];

//Acá arriba dejamos todas
const CreateNmbr = max => Math.floor(Math.random() * max);

// se crea esta funcion para hacer mas pequeño el codigo de abajo

const CreateTxt = () =>
  `${Pron[CreateNmbr(Pron.length)]}${Adje[CreateNmbr(Adje.length)]}${
    Noun[CreateNmbr(Noun.length)]
  }${Domi[CreateNmbr(Domi.length)]}`;

// con esta función se crea el nuevo dominio.

const setRandomName = () => {
  document.getElementById("domains").innerText = CreateTxt();
};

// con esta función damos la orden de renderizar el nombre.

document
  .getElementById("NameGenerator")
  .addEventListener("click", setRandomName);

// con esta funcion damos funcionalidad al boton

setRandomName();
