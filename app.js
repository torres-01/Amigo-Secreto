// Elementos del DOM
const inputNombre = document.getElementById("nombre");
const botonAgregar = document.getElementById("agregar");
const listaNombres = document.getElementById("lista-nombres");
const botonSortear = document.getElementById("sortear");
const resultado = document.getElementById("resultado");

let nombres = [];

// Agregar nombre a la lista
botonAgregar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    if (nombre !== "") {
        nombres.push(nombre);
        mostrarLista();
        inputNombre.value = "";
        resultado.textContent = "";
    }
});

function mostrarLista() {
    listaNombres.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

// Sortear un nombre aleatoriamente
botonSortear.addEventListener("click", () => {
    if (nombres.length > 0) {
        const indice = Math.floor(Math.random() * nombres.length);
        resultado.textContent = `🎉 El nombre sorteado es: ${nombres[indice]}`;
    } else {
        resultado.textContent = "⚠️ Agrega al menos un nombre para sortear.";
    }
});
