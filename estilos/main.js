// PRIMERA PRE ENTREGA

// let inicio = prompt("Bienvenido a ADP helmets, ingrese su Pais de residencia"); 

// if (inicio == "")  { 
//     prompt ("campo requerido, ingrese su Pais");
// } 

//         else if (inicio == "Argentina") { 
//             alert ("Hacemos envios y Los precios en dolares se toman al tipo de cambio del dolar tarjeta");
//             } 


//         else {
//             alert ("consultanos por formas de pago y de envios a " + inicio);
//     }


// let inicio = prompt("Bienvenido a ADP helmets, ingrese su Pais de residencia, escribi ESC para entrar a la pagina");

// while (inicio != "ESC") {
//     switch (inicio) {
//         case "Argentina": //aca esta mi duda en caso que el usurario ponga "argentina" o "ARGENTINA" y igual lo tome como valido
//             alert ("Hacemos envios y Los precios en dolares se toman al tipo de cambio del dolar tarjeta");
//             break;
//         case "":
//             alert ("campo requerido, ingrese su Pais");
//             break;
//         default:
//             alert ("consultanos por formas de pago y de envios a " + inicio);
//             break;
//     }
//     inicio = prompt("Bienvenido a ADP helmets, ingrese su Pais de residencia, escribi ESC para entrar a la pagina");
// }
// ----------------------------------------------------

// let inicio = prompt("Bienvenido a ADP helmets, ingrese su país de residencia, presiona cancelar o escribí 'ESC' para entrar a la página");

// while (inicio.toUpperCase() !== "ESC") {
//     entradaDePais(inicio);
//     inicio = prompt("Bienvenido a ADP helmets, ingrese su país de residencia, presiona cancelar o escribí 'ESC' para entrar a la página");
// }

// function entradaDePais(input) {
//     switch (input.toLowerCase()) {
//         case "argentina":
//             alert("Hacemos envíos a todo el país. Los precios en dólares se toman al tipo de cambio del dólar tarjeta.");
//             break;
//         case "":
//             alert("Campo requerido, ingrese su país.");
//             break;
//         default:
//             alert("Consulte por formas de pago y envíos a " + input);
//             break;
//     }
// }
// ------------------------------------------------------

// SEGUNDA PRE ENTREGA


let totalPrecio = 0; 
const productos = [
    { id: 1, nombre: "RED 1/4", precio: 10000 },
    { id: 2, nombre: "RED 3/4", precio: 12000 },
    { id: 3, nombre: "RED 2", precio: 9000 },
    { id: 4, nombre: "Bayoneta AKM", precio: 50000 },
];

let input = prompt("Bienvenido a ADP helmets, ingrese su país de residencia o escriba 'agregar' para agregar un producto, o 'ESC' para entrar a la página");

while (input && input.toUpperCase() !== "ESC") {
    if (input.toLowerCase() === "agregar") {
        agregarProducto();
    } else {
        entradaDePais(input);
    }
    input = prompt("Bienvenido a ADP helmets, ingrese su país de residencia o escriba 'agregar' para agregar un producto, o 'ESC' para entrar a la página");
}

function entradaDePais(input) {
    switch (input.toLowerCase()) {
        case "argentina":
            alert("Hacemos envíos a todo el país. Los precios en dólares se toman al tipo de cambio del dólar tarjeta.");
            break;
        case "":
            alert("Campo requerido, ingrese su país.");
            break;
        default:
            alert("Consulte por formas de pago y envíos a " + input);
            break;
    }
}


function agregarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    if (!nombreProducto) {
        alert("Nombre es un campo requerido.");
        return;
    }

    let productoEncontrado = false;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombreProducto.toLowerCase()) {
            alert(`El precio de ${productos[i].nombre} es $${productos[i].precio}.`);
            totalPrecio += productos[i].precio;
            productoEncontrado = true;
            break;
        }
    }

    if (!productoEncontrado) {
        alert("Producto no encontrado. Intente nuevamente.");
    }
}

if (totalPrecio > 0) {
    alert(`El precio total de los productos es: $${totalPrecio}`);
} else {
    alert("No se ingresaron productos.");
}
