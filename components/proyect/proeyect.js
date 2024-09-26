import { header } from "../header/header.js";


function proyectos(){
     let section = document.createElement('section');
     section.appendChild(header())
     section.appendChild(item())
     section.className = 'section-proyectos';
     


     return section;
}

// item lista

function item(){
    let div = document.createElement('div');
    div.innerText = "item listo"
    div.className = 'item';

    return div;
}

export {proyectos}