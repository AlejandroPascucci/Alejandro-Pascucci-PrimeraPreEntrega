

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


function entradaDePais(input) {
    switch (input.toLowerCase()) {
        case "argentina":
            alert("Hacemos envíos y los precios en dólares se toman al tipo de cambio del dólar tarjeta.");
            break;
        case "":
            alert("Campo requerido, ingrese su país.");
            break;
        default:
            alert("Consulte por formas de pago y envíos a " + input);
            break;
    }
}

let inicio = prompt("Bienvenido a ADP helmets, ingrese su país de residencia, escriba 'ESC' para entrar a la página");

while (inicio.toUpperCase() !== "ESC") {
    entradaDePais(inicio);
    inicio = prompt("Bienvenido a ADP helmets, ingrese su país de residencia, escriba 'ESC' para entrar a la página");
}