import { crearFormulario } from '../form-menu/form.js';

// Crear el contenedor del menú usando Grid
let menuDiv = document.createElement('div');
menuDiv.className = "menu-div";

// Crear la lista de herramientas
let navMenu = document.createElement('ul');
navMenu.className = "nav-menu";

// Crear las herramientas (igual que antes)
let herramientas = [
    { color: '#8e44ad', nombre: 'Gestor de Tareas' },
    { color: '#1abc9c', nombre: 'Editor de Texto' },
    { color: '#e67e22', nombre: 'Analizador de Datos' },
    { color: '#27ae60', nombre: 'Calendario' },
    { color: '#e74c3c', nombre: 'Control de Proyectos' },
    { color: '#2c3e50', nombre: 'Tablero de Notas' }
];

// Generar los items del menú (igual que antes)
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

// Añadir el formulario al menú (importado desde form.js)
menuDiv.appendChild(crearFormulario());

// Exportar el menú completo
export { menuDiv };
    