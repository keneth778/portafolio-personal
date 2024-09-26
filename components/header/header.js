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
export{ header}