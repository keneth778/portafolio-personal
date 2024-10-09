import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos() {
    let section = document.createElement('section');
    section.className = "secProyectos";
    section.appendChild(header());
    section.appendChild(listaProyectos());

    return section;
}

function listaProyectos() {
    let div = document.createElement('div');
    div.className = "lista-proyectos";

    dataProyectos.forEach((proyecto) => {
        div.appendChild(item(proyecto.nombre, proyecto.descripcion, proyecto.githubPage, proyecto.github, proyecto.stacks));
    });

    return div;
}

function item(nombre, descripcion, githubPage, github, stacks) {
    let div = document.createElement('div');
    div.className = "div-item";

    let titNombre = document.createElement('h1');
    titNombre.className = "tit-Nombre";
    titNombre.innerText = nombre;
    div.appendChild(titNombre);

    let descipcionText = document.createElement('p');
    descipcionText.className = "descripcion-text";
    descipcionText.innerText = descripcion;
    div.appendChild(descipcionText);

    let a = document.createElement('a');
    a.className = "a-githubPage";
    a.href = githubPage;
    a.innerText = "Github Page";
    div.appendChild(a);

    let stack = document.createElement('div');
    stack.className = "stack-div";
    stack.innerText = stacks;  // Usar la variable stacks
    div.appendChild(stack);

    let botGithub = document.createElement('a');
    botGithub.className = "btn-Github";
    botGithub.href = github;
    botGithub.innerText = "Github";
    div.appendChild(botGithub);

    let btnDownload = document.createElement('a');
    btnDownload.className = "btn-download";
    btnDownload.href = "https://github.com/keneth778/hospital2/raw/refs/heads/main/src/Descargas/hospita.jar";
    btnDownload.download = "hospital";
    btnDownload.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"/></svg>';
    div.appendChild(btnDownload);

    return div;
}


export { proyectos };
