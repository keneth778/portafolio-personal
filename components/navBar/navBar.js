let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://dwglogo.com/wp-content/uploads/2015/12/Red_Hat_logo_icon_2019.png";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Keneth";
navBarDiv.appendChild(h2);

// Exportar navBarDiv
export { navBarDiv };
