// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

//let texto = ('Hola, que tal? Como te llamas?');

// const string = (prompt('Ingresar una frase:'));
// const letra = (prompt('Ingresar una letra:'))

//     let cuenta = 0;
//     let caracter = letra;

//     for (let i = 0; i < string.length; i++) {
//         if (string.caracter == letra){
//             cuenta += 1;
//         }
//     }

//     console.log(cuenta);

console.log(text.match(caracter));

let string = (prompt('Ingresar una frase:'));

let text = string;
let caracter = /[A]/g;

let count = (text.match(/a/g) || []).length;
console.log(count);

console.log('Cantidad de veces en las que: ' + caracter + ' a aparecido en tu frase')





// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

// let numeroUsuario = parseInt(prompt('Ingresar un número'));

// const numbers = [];
// for (numbers i = )

// let numeros = [numeroUsuario, []];
// [2] = (numeroUsuario + 50);

let numeroUsuario = parseInt(prompt('Ingresar un número'));

let nextNumber = (numeroUsuario + 50)

let i = numeroUsuario, num = (numeroUsuario + 50);
let count = 0;

while (i <= num) {
    if (i % 2 == 1) {
        console.log(`${i} es un número impar`)
        count++;
    }
    i++
}





