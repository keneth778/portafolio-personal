import { navBarDiv } from "./components/navBar/navBar.js";
import { proyectos } from "./components/proyect/proeyect.js";
import { menuDiv } from './components/menu/menu.js';  

/* Componentes de la página */
let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

/* Menú lateral */
DOM.appendChild(menuDiv);  

/* proyect */
let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos());  //<------- componente
DOM.appendChild(proyect);
