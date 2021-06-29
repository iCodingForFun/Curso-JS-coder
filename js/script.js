// Desafío # 4
//FUNCION CON PARAMETROS Y RETORNO DE RESULTADO
function sumarDosNumeros(num1, num2) {
    var montoTotal = num1 + num2;
    return montoTotal;
}

var precioProd1 = 1000;
var precioProd2 = 890;

var gastoTotal = sumarDosNumeros(precioProd1, precioProd2);
var descuento = gastoTotal * 0.15;
var precioConDesc = gastoTotal - descuento;
console.log("Gastaste $:" + gastoTotal);
console.log("El descuento es de $:" + descuento);
console.log("Precio final con descuento $" + precioConDesc);


// Desafío # 3
//''Promediador de notas''
// let acumuladorNotas = 0;
// let promedio;
// let cantNotas = parseInt(prompt("Que cantidad de notas vas a promediar?"));
// let nota;

// for (let i = 1; i <= cantNotas; i++) {
//     nota = parseInt(prompt("Ingrese la nota " + i));
//     acumuladorNotas = +nota;
// }

// promedio = acumuladorNotas / cantNotas;
// alert("El promedio de tus notas es: " + promedio);

// Desafío #1 

//Datos de entrada
//  var nombre = prompt("Por favor, ingrese su nombre");
//  var apellido = prompt("Por favor, ingrese su apellido");

// //Datos de salida
//  var nombreCompleto = nombre + " " + apellido;

//  alert ("¡Gracias! " + nombreCompleto+". Tus datos se han guardado correctamente");


// Desafío #2 
//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

// let edad = prompt("Ingrese su edad")

// if (Number(edad)){
//     if (edad <= 17){
//         alert ("Eres menor de edad para conducir")
//     }
//     else if (edad >= 18){
//         alert ("Eres mayor de edad, ya puedes conducir")
//     }
// }
// else{
//     alert("Ingrese un numero valido")
// }