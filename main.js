// ejercicio1----------

let frase = "hola a todos";

function capitalizar(cadena) {
  let array = cadena.split(" ");
  let cadenaCapitalizada = [];
  for (const index in array) {
    cadenaCapitalizada.push(
      array[index].charAt(0).toUpperCase() + array[index].slice(1)
    ); // h   a   t
  }
  return cadenaCapitalizada.join(" ");
}

//ejercicio 2 y 3---------

let objetos = { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" };

function verificarYLlenar(objeto) {
  for (const index in objeto) {
    if (objeto[index] === "") {
      objeto[index] = prompt(
        `El campo ${index} está vacío, por favor llenalo: `
      );
    }
  }
  return objeto;
}

//ejercicio4---------

let users = [
  { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" },
  { nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor" },
  { nombre: "Julia", apellido: "", edad: 32, profesion: "musico" },
  { nombre: "", apellido: "Martinez", edad: 29, profesion: "programador" },
  { nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "" },
  {
    nombre: "Mercedes",
    apellido: "Sanchez",
    edad: 35,
    profesion: "veterinario",
  },
];

for (const index in users) {
  verificarYLlenar(users[index]);
}

console.log(users);

// ejercicio5----------------

users.sort((a, b) => {
  return a.edad - b.edad;
});

console.log(users);

//ejercicio6--------------

for (const index in users) {
  let nombre = users[index].nombre;
  let apellido = users[index].apellido;
  let edad = users[index].edad;
  let profesion = users[index].profesion;

  let frase = `${nombre} ${apellido} tiene ${edad} años y es ${profesion}</br>`;

  document.write(frase);
}

//ejercicio7---------------------

function orden(parametro) {
  if (typeof users[parametro] === "number") {
    console.log(users.sort((a, b) => a[parametro] - b[parametro]));
  } else if (typeof users[parametro] !== "number") {
    console.log(users.sort((a, b) => a[parametro].localeCompare(b[parametro])));
  }
}

orden("nombre");

//ejercicio 8 y 9--------------------
div = document.querySelector(".cont");
div.style.display = "grid";
div.style.placeContent = "center";
let btn = document.createElement("button");
div.append(btn);
btn.textContent = "Aceptar";
btn.style.width = "100px";
btn.style.height = "30px";
btn.style.cursor = "pointer";

let titulo = document.createElement("h1");
div.append(titulo);
titulo.textContent = "Adios";
titulo.style.textAlign = "center";

btn.addEventListener("click", (e) => {
  titulo.style.visibility = "hidden";
});

btn.addEventListener("mousemove", () => {
  titulo.style.color = "red";
  titulo.textContent = "Adios";

  btn.addEventListener("mouseleave", () => {
    titulo.style.color = "black";
    titulo.style.visibility = "visible";
    titulo.textContent = "Hola";
  });
});
