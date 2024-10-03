// form.js

// Crear el formulario de contacto
export function crearFormulario() {
    let contenedorFormulario = document.createElement('div');
    contenedorFormulario.className = "contenedor-formulario";

    // Crear título del formulario
    let tituloFormulario = document.createElement('h3');
    tituloFormulario.className = "titulo-formulario";
    tituloFormulario.innerText = "Contactar";
    contenedorFormulario.appendChild(tituloFormulario);

  
    // Campo de entrada para el correo
    let inputCorreo = document.createElement('input');
    inputCorreo.type = "email";
    inputCorreo.placeholder = "Correo Electrónico";
    inputCorreo.className = "input-contacto";
    contenedorFormulario.appendChild(inputCorreo);

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

    return contenedorFormulario;
}
