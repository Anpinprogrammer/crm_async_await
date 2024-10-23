import { obtenerCliente, editarCliente } from "./API.js";
import { validar, mostrarAlerta } from "./funciones.js";

(function() {
   //Campos del formulario
   const nombreInput = document.querySelector('#nombre');
   const emailInput = document.querySelector('#email');
   const empresaInput = document.querySelector('#empresa');
   const telefonoInput = document.querySelector('#telefono');
   const idInput = document.querySelector('#id');

   document.addEventListener('DOMContentLoaded', async () => {
     const parametroURL = new URLSearchParams(window.location.search);//Nos permite buscar parametros de la URL

     const idCliente = parametroURL.get('id');//Obtenemos el id de la URL

     const cliente = await obtenerCliente(idCliente);

     mostrarCliente(cliente);

     const formulario = document.querySelector('#formulario');
     formulario.addEventListener('submit', validarCliente);
   })

   function mostrarCliente(cliente){
    const { nombre, empresa, email, telefono, id } = cliente;

    idInput.value = id;
    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;
   }

   function validarCliente(e) {
     e.preventDefault();

     const cliente = {
        nombre: nombreInput.value, 
        email: emailInput.value,
        telefono: telefonoInput.value,
        empresa: empresaInput.value,
        id: idInput.value
     }

     if(validar(cliente)){
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

     //Reescribir el objeto
     editarCliente(cliente);
   }

})();