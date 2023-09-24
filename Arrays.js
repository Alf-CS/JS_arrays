'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (ambas incluidas)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */

console.log('--------------- APARTADO 1 -----------------');

let exampleArray=["manzana", "pera", "plátano","naranja"];
console.log("Creamos un array con cuatro elementos: ");
console.log(exampleArray);
console.log("Concatenamos 2 elementos más al final ... "); 
exampleArray.push("albaricoque"); 								//	Se puede hacer con push
let nuevoArray=["piña"];
exampleArray=exampleArray.concat(nuevoArray); 					//	o concatenando otro array
console.log(exampleArray);
console.log("... y 2 al principio");

// podemos quitar elementos al principio.
// exampleArray.shift(); 										// QUITA el PRIMER elemento --> Queda ["pera, "plátano", .. , "piña]
// console.log (exampleArray);
// y "desquitar" (poner)
// exampleArray.unshift("manzana");								// o sea, podemos añadir al principio con UNSHIFT.

exampleArray.unshift("uva");									// Podemos añadir con UNSHIFT, rápido para un elemento.
exampleArray.splice(0,0,"melón");								// O podemos usar SPLICE, explicación detallada 2 modificaciones más abajo.
console.log (exampleArray);
console.log("Quitamos elementos 3 al 5");
// Para ELIMINAR en posiciones intermedias, utilizamos MÉTODO SPLICE --> indicamos POSICION INICIAL y ELEMENTOS A CORTAR.
exampleArray.splice(2,3); 							//Posición 3 es índice 2. Como queremos cortar elementos 3, 4 y 5 --> son 3 elementos.
console.log(exampleArray);
// Para INSERTAR en posiciones intermedias, TAMBIÉN utilizamos SPLICE --> indicamos POS INICIAL y ELEMS A CORTAR y ELEMENTOS A INSERTAR.
exampleArray.splice(exampleArray.length-1, 0, "sandía", "nectarina"); // El último elemento es ARRAY.lenght-1. Insertamos antes de esta POS INICIAL. 
console.log(exampleArray);
console.log("Mostramos el array con los elementos separados por '==>'");
console.log(exampleArray.join(" ==> "));

/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa spread para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> printMedia("Pepe", 4.25, 6, 8.5, 9)
 */

console.log('--------------- APARTADO 2 -----------------');


/**
 * Apartado 3
 * Crea un array de cadenas y ordénalo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado
 */

console.log('--------------- APARTADO 3 -----------------');


/**
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número. No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) la transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado
 */

console.log('--------------- APARTADO 4 -----------------');

/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 5 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos'],
    ['Mesa', 'ERROR: El stock no puede ser negativo']
];


/**
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log('--------------- APARTADO 6 -----------------');


/**
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 7 -----------------');

