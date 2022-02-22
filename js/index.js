
let wordsForGuessing = ["perro", "patata", "hechizo", "proyector", "compra", "australia", "mesa", "reglamento", "copia", "computadora"];
let word;

let lineForGuessing = document.createElement("img")
lineForGuessing.src = "./assets/Line.svg"
let buttonNewGame = document.createElement("button") // Creo botón para iniciar un nuevo juego.
buttonNewGame.className = "button_blue game_started_btn"
buttonNewGame.textContent = "Nuevo juego"
let buttonEndGame = document.createElement("button") // Creo botón para desistir de la partida.
buttonEndGame.className = "button_white game_started_btn"
buttonEndGame.textContent = "Desistir"


let buttonStart = document.getElementById("start_btn");
let tagMain = document.getElementsByTagName("main");
console.log(buttonStart)
let AUX = [];

buttonStart.addEventListener("click", function (event) {
    event.preventDefault()
    tagMain[0].className = "game_started_main" // Cambio estilos del Main.
    // console.log("Hola") // Debug
    // tagMain[0].replaceChildren(lineForGuessing)
    tagMain[0].replaceChildren(buttonNewGame) // Pongo en pantalla el botón de nuevo juego.
    // tagMain[0].appendChild(lineForGuessing)
    tagMain[0].appendChild(buttonEndGame) // Pongo en pantalla el botón para desistir de la partida.
    // console.log(Math.floor(Math.random()*11)); // Debug
    word = wordsForGuessing[Math.floor(Math.random()*11)]
    console.log(word); // Debug
    for (let index = 0; index < word.length; index++) {
        // AUX.push(lineForGuessing)
        // tagMain[0].insertAdjacentElement("afterbegin", lineForGuessing);
        //tagMain[0].appendChild(lineForGuessing)
        console.log("Hola");
        buttonNewGame.insertAdjacentText('beforebegin', " __ ")
        // tagMain[0].appendChild(lineForGuessing)
    }
    //AUX.map((line) => {tagMain[0].insertAdjacentElement("afterbegin", lineForGuessing);})
})

