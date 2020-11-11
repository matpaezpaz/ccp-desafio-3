// Se obtienen los elementos
const elementoNombre = document.getElementById('nombre');
const elementoApellido = document.getElementById('apellido');
const elementoBoton = document.getElementById('agregar');
// Agrega una función para manejar el evento click en el botón
elementoBoton.addEventListener('click', manejadorClick);

/**
 * En la función manejadorClick, agregar el código para agregar una persona
 * a la lista.
 * El elemento no se debe agregar si:
 * - alguno de los campos está vacío
 * - alguno de los campos contiene números
 * - si la cantidad de palabras entre el número y el apellido es mayor o igual a 5
 *
 * Se deben vaciar los campos luego de agregar la persona a la lista.
 * 
 * Para agregar un elemento a la lista, se debe llamar la función agregarALista,
 * esta recibe un objeto como parámetro, de la forma
 * { nombre: 'nombre', apellido: 'apellido' }
 */


// Funcion que maneja el click
// agregrar código acá
function manejadorClick() {
    const personaAAgregar = { nombre: obtenerNombre(), apellido: obtenerApellido() };
    if(obtenerNombre().length !== 0 && obtenerApellido().length !== 0) {
        agregarALista(personaAAgregar);
        vaciarCampos();
    }
}

function vaciarCampos() {
    vaciarCampoNombre();
    vaciarCampoApellido();
}

function obtenerNombre() {
    return elementoNombre.value;
}
function obtenerApellido() {
    return elementoApellido.value;
}
function vaciarCampoNombre() {
    elementoNombre.value = '';
}
function vaciarCampoApellido() {
    elementoApellido.value = '';
}


// recibe objeto persona
function agregarALista(persona) {
    // Crear elemento 'li', que debe ir dentro de la etiqueta 'ul'
    const elementoNuevo = document.createElement('li');
    // Agregar contenido al elemento
    elementoNuevo.innerHTML = `<span class="apellido">${persona.apellido}</span>, <span class="nombre">${persona.nombre}</span>`
    // Agregar el elemento nuevo a la lista
    document.getElementById('lista').appendChild(elementoNuevo);
}
