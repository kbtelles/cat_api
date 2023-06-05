let api_url = "https://jsonplaceholder.typicode.com/posts" ;

async function actualizaGato(api){
  let obtenerGato = await fetch(api); //La función fetch consiste en consultar la función api_url
  let dato = await obtenerGato.json(); //Archivo tipo json
  cargar_datos(dato);    
}
actualizaGato(api_url);


function cargar_datos(data){
  let dom = document.querySelector(".root");
  data.forEach(element => {

    let item = document.createElement("div");
    item.classList.add("box-img")  
    item.innerHTML = `
    <img src="${element.url}">
    `;
  dom.appendChild(item);
 })};

// Botón
let botonCargar = document.querySelector("button");
botonCargar.addEventListener("click", function () {
  location.reload(); // Permite recargar la página al hacer clic en el botón
});