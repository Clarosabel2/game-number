let numSorteados = [];
let numSecret = generateNumSecret();
let i = 1;
setText("p", "Ingresa un numero del 1 al 10");

function generateNumSecret() {
  let num = Math.floor(Math.random() * 10) + 1;
  if (numSorteados.includes(num)) {
    return generateNumSecret();
  } else {
    console.log(num);
    numSorteados.push(num);
    return num;
  }
}
function getNumUser() {
  let num = parseInt(document.getElementById("textbox1").value);
  return num;
}
function setText(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
}
function clear() {
  document.querySelector("#textbox1").value = "";
}
function game() {
  let numUser = getNumUser();
  console.log(numSorteados);
  if (numSorteados.length == 10) {
    setText("p","Ya se sortearon todos los numeros");
    document.querySelector("input").setAttribute("disabled","true");
  }
  else{
    if (i <= 4) {
      if (numUser == numSecret) {
        clear();
        setText("p", `Has Ganado en ${i} ${i == 1 ? "vez" : "veces"} :D`);
        document.getElementById("reiniciar").removeAttribute("disabled");
      } else if (numUser != numSecret) {
        setText("p",`${numUser > numSecret ? "es menor" : "es mayor"}. Tienes ${4 - i} intentos restantes.`);
        clear();
      }
    } else {
      clear();
      setText("p", "No te quedaron mas intentos. Perdiste :(. Adios");
      document.getElementById("reiniciar").removeAttribute("disabled");
    }
    i++;
  }
}
function restartGame() {
  console.clear();
  clear();
  numSecret = generateNumSecret();
  i = 1;
  setText("p", "Ingresa un numero del 1 al 10");
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
