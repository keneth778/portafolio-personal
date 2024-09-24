function proyectos(){
     let section = document.createElement('section');
     section.appendChild(header())
     section.appendChild(item())
     section.className = 'section-proyectos';
     


     return section;
}

// funcion header

function header(){
    let div = document.createElement('div');
    div.className = 'header';

    let h2 = document.createElement('h2');
    h2.innerHTML = "proyectos"
    div.appendChild(h2);

    let btn = document.createElement('div');
    btn.innerHTML = "git hub"
    div.appendChild(btn);

return div;
}

// item lista

function item(){
    let div = document.createElement('div');
    div.innerText = "item listo"
    div.className = 'item';

    return div;
}

export {proyectos}