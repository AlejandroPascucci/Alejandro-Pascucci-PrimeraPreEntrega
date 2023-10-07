

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


let inicio = prompt("Bienvenido a ADP helmets, ingrese su Pais de residencia, escribi ESC para entrar a la pagina");

while (inicio != "ESC") {
    switch (inicio) {
        case "Argentina":
            alert ("Hacemos envios y Los precios en dolares se toman al tipo de cambio del dolar tarjeta");
            break;
        case "":
            alert ("campo requerido, ingrese su Pais");
            break;
        default:
            alert ("consultanos por formas de pago y de envios a " + inicio);
            break;
    }
    inicio = prompt("Bienvenido a ADP helmets, ingrese su Pais de residencia, escribi ESC para entrar a la pagina");
}
