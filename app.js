// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

// Funcion para agregar un nombre a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (nombresAmigos.includes(nombre)) {
        alert("Este nombre ya esta en la lista.");
        return;
    }

    nombresAmigos.push(nombre); 
    mostrarLista(); 
    inputNombre.value = ""; 
}

// Función para mostrar la lista de nombres en la pantalla
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    nombresAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

// Funcion para sortear un amigo secreto
function sortearAmigo() {
    if (nombresAmigos.length < 2) {
        alert("Debes agregar al menos dos nombres para hacer un sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSecreto = nombresAmigos[indiceAleatorio];

    mostrarSorteo(amigoSecreto);
}

// Función para mostrar los resultados del sorteo en la pantalla
function mostrarSorteo(nombre) {
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombre}</strong> 🎉</li>`;
}