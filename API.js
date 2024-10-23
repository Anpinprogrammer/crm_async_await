const url = 'http://localhost:4000/clientes';

//Cuando se crea el nuevo cliente, obtiene todos los clientes
export const nuevoCliente = async cliente => {
    console.log(cliente);
    //Insertar cliente en la base de datos 
    try {
        //Siempre que creamos un nuevo registro utilizamos el metodo de post 
        await fetch(url, {
            method: 'POST',/*Queremos agregar informacion a la API*/
            body: JSON.stringify( cliente ),/*Contenido de la peticion post a la url de clientes*/
            headers: {
                 'Content-Type': 'application/json'
            }/*Informacion del tipo de dato que se estan enviando, para el caso de los json usamos 'application/json'*/
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

//Obtiene los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);//Por default trae el metodo GET que se usa para obtener datos de una API
        const clientes = await resultado.json();
        return clientes;

    } catch (error) {
        console.log(error);
    }
}

//Elimina cliente
export const eliminarCliente = async id => {

    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'/*Queremos eliminar informacion de la API*/
        });
    } catch (error) {
        console.log(error);
    }
}

//Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Actualizar cliente
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',/*Metodo para actualizar la base de datos*/
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}