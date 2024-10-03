let menuDiv = document.createElement('div');
menuDiv.className = "menu-div";

let navMenu = document.createElement('ul');
navMenu.className = "nav-menu";

let herramientas = [
    { color: '#8e44ad', nombre: 'Gestor de Tareas' },
    { color: '#1abc9c', nombre: 'Editor de Texto' }, 
    { color: '#e67e22', nombre: 'Analizador de Datos' }, 
    { color: '#27ae60', nombre: 'Calendario' }, 
    { color: '#e74c3c', nombre: 'Control de Proyectos' }, 
    { color: '#2c3e50', nombre: 'Tablero de Notas' }  
];

herramientas.forEach((herramienta) => {
    let menuItem = document.createElement('li');
    menuItem.className = "menu-item";

    let colorDiv = document.createElement('div');
    colorDiv.className = "menu-item-color";
    colorDiv.style.backgroundColor = herramienta.color;

    let itemText = document.createElement('span');
    itemText.className = "menu-item-text";
    itemText.innerText = herramienta.nombre;

    menuItem.appendChild(colorDiv);
    menuItem.appendChild(itemText);

    navMenu.appendChild(menuItem);
});

menuDiv.appendChild(navMenu);

let contenedorFormulario = document.createElement('div');
contenedorFormulario.className = "contenedor-formulario";

let tituloFormulario = document.createElement('h3');
tituloFormulario.className = "titulo-formulario";
tituloFormulario.innerText = "Contactar";
contenedorFormulario.appendChild(tituloFormulario);

let inputNombre = document.createElement('input');
inputNombre.type = "text";
inputNombre.placeholder = "Nombre";
inputNombre.className = "input-contacto";
contenedorFormulario.appendChild(inputNombre);

let inputMensaje = document.createElement('textarea');
inputMensaje.placeholder = "Mensaje";
inputMensaje.className = "input-mensaje";
contenedorFormulario.appendChild(inputMensaje);

let botonEnviar = document.createElement('button');
botonEnviar.type = "submit";
botonEnviar.innerText = "Enviar";
botonEnviar.className = "boton-enviar";
contenedorFormulario.appendChild(botonEnviar);

menuDiv.appendChild(contenedorFormulario);

export { menuDiv };
