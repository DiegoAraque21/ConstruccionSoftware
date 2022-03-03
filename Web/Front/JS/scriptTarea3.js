// First Problem: Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function firstC(cadena){
    for(let i=0;i<cadena.length;i++){
        let letter = cadena[i];
        if(cadena.indexOf(letter) == cadena.lastIndexOf(letter)){ //Si indexOf y lastIndexOf regresen el mismo numero significa que solo se encuentra una vez el caracter en la cadena introducida. Si no es igual es porque el caracter esta mas de una vez en la cadena que se propuso
            return `The first letter that doesn't repeat itself is ${letter}`;
        }
    }
    return "Every letter repeats itself"; // Si no hay ninguna que no se repita, se devuelve este valor
}
console.log(firstC("abebcedf"));

// Second Problem: Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubbleSort(arreglo){
    for(let i=0;i<arreglo.length;i++){
        for(let j=0;j<arreglo.length - i;j++){
            if(arreglo[j-1]>arreglo[j]){
                let temp = arreglo[j]; 
                arreglo[j]=arreglo[j-1];
                arreglo[j-1]=temp;
            }
        }
    }
    return arreglo;
}
let arr = [1,9,6,5,3,7];
console.log(`The following array ${arr} sorted with bubbleSort is: ${bubbleSort(arr)}`);

// Third Problem: Escribe una función que implemente el algoritmo 'merge-sort' para ordenar una lista de números.
function sort(arreglo){
  if(arreglo.length === (0 || 1)){
      return arreglo;
  }
  let mid = Math.round(arreglo.length/2);
  let arregloI = sort(arreglo.slice(0, mid)); //Crear un array que empieze desde 0 y termine en la mitad calculada en la linea anterior
  let arregloD = sort(arreglo.slice(mid,arreglo.length)); //Crear un array que empieze desde la mitad hasta el final del array original
  return mergeSort(arregloI,arregloD);
}
function mergeSort(arreglo1, arreglo2) {
    let arregloFinal = [];
    //Poner los indicadores de la posicion izquierda, derecha
    let posI=0;
    let posD=0;
    //Copiar en su lugar
    //mientras la posI<sizeI y posD<sizeD
    while((posI< arreglo1.length) && (posD < arreglo2.length)){
        if(arreglo1[posI] < arreglo2[posD]){
          arregloFinal.push(arreglo1[posI]);
          posI++;
        } else {
          arregloFinal.push(arreglo2[posD]);
          posD++;
        }
    }
    // Copiar elementos restantes
    while(posI < arreglo1.length) {
      arregloFinal.push(arreglo1[posI]);
      posI++;
    }
    while(posD < arreglo2.length){
      arregloFinal.push(arreglo2[posD]);
      posD++;
    }    
    return arregloFinal;
}
let lista = [1,9,6,5,3,7,100];
console.log(`The array ${lista} sorted with mergeSort is: ${sort(lista)}`);

// Fourth Problem: Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
function invert(arreglo){
    let nuevoArreglo = [];
    for(let i=(arreglo.length-1);i>=0;i--){
        nuevoArreglo.push(arreglo[i]);
    }
    return nuevoArreglo
}
let invert1 = [1,2,3,4,5,6,7];
console.log(`The following array ${invert1} inverted but returned with a new array is: ${invert(invert1)}`);

function invertSame(arreglo){
    for(let i=0;i<(arreglo.length-1);i++){
        if(i === 0){
            arreglo.push(arreglo[i]); // Agrega elementos hasta el final del arreglo
            arreglo.shift(); // Quita el primer elemento del arreglo
        } else{
            arreglo.splice((arreglo.length - i),0,arreglo[0]); // Agrega elementos en una posicion especifica
            arreglo.shift(); // Quita el primer elemento del arreglo
        }
    }
    return arreglo;
}
let invert2 = [1,2,3,4,5,6,7,10,9];
console.log(`The following array ${invert2} inverted (using the smae array for the whole process): ${invertSame(invert2)}`);

// Fifth Problem: Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.
class Vector{
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.magnitud;
    }
    suma(vec1, vec2){
        this.x = vec1.x + vec2.x; 
        this.y = vec1.y + vec2.y; 
        this.z = vec1.z + vec2.z;
        return `Thew sum of Vector 1 (${vec1.x} X, ${vec1.y} Y, ${vec1.z} Z) and Vector 2 (${vec2.x} X, ${vec2.y} Y, ${vec2.z} Z) is: New vector (${this.x} X, ${this.y} Y, ${this.z} Z)`;
    }
    resta(vec1, vec2){
        this.x = vec1.x - vec2.x; 
        this.y = vec1.y - vec2.y; 
        this.z = vec1.z - vec2.z;
        return `Thew substraction of Vector 1 (${vec1.x} X, ${vec1.y} Y, ${vec1.z} Z) and Vector 2 (${vec2.x} X, ${vec2.y} Y, ${vec2.z} Z) is: New vector (${this.x} X, ${this.y} Y, ${this.z} Z)`;
    }
    magnitud(){
        this.magnitud = Math.sqrt((this.x ** 2)+(this.y**2)+(this.z**2));
        return this.magnitud;
    }
    vectorUnitario(){
        const unitarioX = (this.x/Math.sqrt(this.magnitud));
        const unitarioY = (this.y/Math.sqrt(this.magnitud));
        const unitarioZ = (this.z/Math.sqrt(this.magnitud));
        return `(${unitarioX} X, ${unitarioY} Y, ${unitarioZ} Z)`;
    }
    multiplicarEscalar(){

    }
}
const vector1 = new Vector(5,8,3);
const vector2 = new Vector(4,7,6);
const newVectorPlus = new Vector(0,0,0); // Create a new vector with null values so we can store the sum on it
console.log(newVectorPlus.suma(vector1,vector2)); //suma
const newVectorSubst = new Vector(0,0,0); // Create a new vector with null values so we can store the substraction on it
console.log(newVectorSubst.resta(vector1,vector2)); // resta
console.log(`The magnitud of the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) is: ${vector1.magnitud()}`); //Magnitud
console.log(`The unity vector of the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) is: ${vector1.vectorUnitario()}`);

// Sixth Problem: Escribe una función que calcule el máximo común divisor de dos números.
function mcd(num1, num2){
    let temp;
    while(num2 != 0 ){
        temp = num2; // Crear una variable temporal para que no se pierda el valor del segundo numero
        num2 = num1 % num2; // Mediante el operador % somos capaces de encontrar el resto de la division
        num1= temp; // Le asignamos a el num1 el valor que guardamos en la variable temporal
    }
    return temp;
}
let num1 = 8;
let num2 = 9;
console.log(`The greatest comun divisor of ${num1} and ${num2} is: ${mcd(num1,num2)}`);

// Seventh Problem: Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no.
function ortogonal(vector1,vector2){

}
ortogonal();

// Eigth Problem: Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function hackerSpeak(str){
    let arreglo = []; // Crear arreglo en el cual vamos a cambiar cada letra por su equivalente en numero
    for(let i=0; i<str.length; i++){
        arreglo.push(str[i]); //Llenar el arreglo con todas las letras de nuestra cadena
    }
    for(let i=0; i<arreglo.length; i++){
        //Distintas condiciones, que si se cumplen, dentro de nuestro arreglo cambiaremos su valor a su equivalente en numero
        if(str[i]=== "a" || str[i]=== "A"){
            arreglo[i]= "4";
        } else if(str[i]=== "s" || str[i]=== "S"){
            arreglo[i]= "5";
        } else if(str[i]=== "e" || str[i]=== "E"){
            arreglo[i]= "3";
        } else if(str[i]=== "i" || str[i]=== "I"){
            arreglo[i]= "1";
        } else if(str[i]=== "o" || str[i]=== "O"){
            arreglo[i]= "0";
        }
    }
    let strHacker;  // Crear una nueva cadena en la cual vamos a deconcatenar nuestro arreglo
    for(let i=0; i<arreglo.length; i++){
        if(strHacker === undefined){
            strHacker = arreglo[i];
        } else{
            strHacker += arreglo[i];
        }
    }
    return strHacker;
}
let str = "JavaScript es divertido";
console.log(`The string "${str}" in "Hacker Speak" is: ${hackerSpeak(str)}`);

// Ninth problem: Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
function factores(num){
    let arreglo = [];
    for(let i=1; i<num; i++){
        if(num % i == 0){ // El modulo en la condicion nos permite obtener cada factor que no sea el mismo numero
            arreglo.push(i); // Agrega cada factor
        }
    }
    arreglo.push(num); // Agregamos el valor del numero al final, ya que este tambien es factor de si mismo
    return arreglo;
}
let numero = 16;
console.log(`The factors of ${numero} are: ${factores(numero)}`);

// Tenth problem: Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function quitaDuplicados(arreglo){
    let arregloSinDuplicados = []; // Crear un nuevo arreglo en el cual no se repitiran los valores
    for(let i=0;i<arreglo.length;i++){
        if(arregloSinDuplicados.length === 0){
            arregloSinDuplicados.push(arreglo[i]); // agregar el primer valor a nuestro arreglo
        }
        let counter = 0; // crear un contador
        for(let j=0;j<arregloSinDuplicados.length;j++){
            if(arregloSinDuplicados[j]===arreglo[i]){ //si el numero se repite el contador se le agrega 1
                counter ++;
            }
        }
        if(counter === 0){ // sie el contador no es 0 significa que si se repite, por lo que no lo tendremos que agregar de nuevo
            arregloSinDuplicados.push(arreglo[i]); 
        }
    }
    return arregloSinDuplicados;
}
let arreglo = [1,0,1,1,0,0,2,2,4];
console.log(`The array ${arreglo} without duplicates is: ${quitaDuplicados(arreglo)}`);