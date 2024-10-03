// Crear el contenedor del menú
let menuDiv = document.createElement('div');
menuDiv.className = "menu-div";

// Contenedor de avatar y nombre
let avatarContainer = document.createElement('div');
avatarContainer.className = "avatar-container";

// Avatar
let avatar = document.createElement('div');
avatar.className = "avatar";
avatarContainer.appendChild(avatar);

// Añadir el contenedor de avatar al menú
menuDiv.appendChild(avatarContainer);

// Crear la lista de navegación (herramientas)
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

// Generar los items del menú
herramientas.forEach((herramienta) => {
    let menuItem = document.createElement('li');
    menuItem.className = "menu-item";

    // Color de la herramienta
    let colorDiv = document.createElement('div');
    colorDiv.className = "menu-item-color";
    colorDiv.style.backgroundColor = herramienta.color;

    // Texto de la herramienta
    let itemText = document.createElement('span');
    itemText.className = "menu-item-text";
    itemText.innerText = herramienta.nombre;

    // Añadir color y texto al item
    menuItem.appendChild(colorDiv);
    menuItem.appendChild(itemText);

    // Añadir el item a la lista de navegación
    navMenu.appendChild(menuItem);
});

// Añadir la lista de herramientas al menú
menuDiv.appendChild(navMenu);

// Crear el formulario de contacto debajo del menú
let contenedorFormulario = document.createElement('div');
contenedorFormulario.className = "contenedor-formulario";

// Crear título del formulario
let tituloFormulario = document.createElement('h3');
tituloFormulario.className = "titulo-formulario";
tituloFormulario.innerText = "Contactar";
contenedorFormulario.appendChild(tituloFormulario);

// Campo de entrada para el nombre
let inputNombre = document.createElement('input');
inputNombre.type = "text";
inputNombre.placeholder = "Nombre";
inputNombre.className = "input-contacto";
contenedorFormulario.appendChild(inputNombre);

// Campo de entrada para el mensaje
let inputMensaje = document.createElement('textarea');
inputMensaje.placeholder = "Mensaje";
inputMensaje.className = "input-mensaje";
contenedorFormulario.appendChild(inputMensaje);

// Botón de envío (solo visual)
let botonEnviar = document.createElement('button');
botonEnviar.type = "submit";
botonEnviar.innerText = "Enviar";
botonEnviar.className = "boton-enviar";
contenedorFormulario.appendChild(botonEnviar);

// Añadir el formulario debajo del menú
menuDiv.appendChild(contenedorFormulario);

// Exportar el menú completo (con el formulario incluido)
export { menuDiv };
