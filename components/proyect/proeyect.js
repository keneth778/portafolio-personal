import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos() {
    let section = document.createElement('section');
    section.appendChild(header());
    section.appendChild(listaProyectos());  // Corregir la llamada a listaProyectos
    section.className = 'section-proyectos';

    return section;
}

// Lista de proyectos
function listaProyectos() {
    let div = document.createElement('div');
    div.classList = "lista-proyectos";

    // Ajustamos el forEach para pasar correctamente los datos de cada proyecto
    dataProyectos.forEach((proyecto) => {
        div.appendChild(item(proyecto.nombre,proyecto.github,proyecto.stacks,proyecto.web));  // Pasamos el objeto completo
    });

    return div;
}
function item(texto,github,githubpage,web,stacks){
    let div = document.createElement('div');
    div.className ="div-item"
    
    let a = document.createElement('a');
    a.className= "link-githubPage"
    a.href = githubpage;
    a.innerText = "githubPage"
    div.appendChild(a);

    let stack = document.createElement('div');
    stack.innerHTML = "[js,css,html]";
    div.appendChild(stack);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = github;
    btnGithub.innerText = "Github";
    div.appendChild(btnGithub);

    return div;
}


export {proyectos}