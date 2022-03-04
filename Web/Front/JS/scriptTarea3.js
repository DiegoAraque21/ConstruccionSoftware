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
console.log(firstC("Hola como estamos"));
console.log(firstC("Diego Araque"));
console.log(firstC("Tec de Monterrey"));
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
arr = [1,100,90,3,50,200];
console.log(`The following array ${arr} sorted with bubbleSort is: ${bubbleSort(arr)}`);
arr = [1,13,7,25,23,200];
console.log(`The following array ${arr} sorted with bubbleSort is: ${bubbleSort(arr)}`);
arr = [8,10,3,50,1];
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
lista = [1,100,90,3,50,200];
console.log(`The following array ${lista} sorted with mergeSort is: ${sort(lista)}`);
lista = [1,13,7,25,23,200];
console.log(`The following array ${lista} sorted with mergeSort is: ${sort(lista)}`);
lista = [8,10,3,50,1];
console.log(`The following array ${lista} sorted with mergeSort is: ${sort(lista)}`);
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
invert1 = [1,8,7,2,3];
console.log(`The following array ${invert1} inverted but returned with a new array is: ${invert(invert1)}`);
invert1 = [7,3,5,8,9];
console.log(`The following array ${invert1} inverted but returned with a new array is: ${invert(invert1)}`);
invert1 = [3,9,3,5,0,1];
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
console.log(`The following array ${invert2} inverted (using the same array for the whole process): ${invertSame(invert2)}`);
invert2 = [1,8,7,2,3];
console.log(`The following array ${invert2} inverted (using the same array for the whole process): ${invertSame(invert2)}`);
invert2 = [7,3,5,8,9];
console.log(`The following array ${invert2} inverted (using the same array for the whole process): ${invertSame(invert2)}`);
invert2 = [3,9,3,5,0,1];
console.log(`The following array ${invert2} inverted (using the same array for the whole process): ${invertSame(invert2)}`);
// Fifth Problem: Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.
class Vector{
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.magnitud;
    }
    suma(vec1, vec2){
        const xNew = vec1.x + vec2.x; 
        const yNew = vec1.y + vec2.y; 
        const zNew = vec1.z + vec2.z;
        return `Thew sum of the Vector (${vec1.x} X, ${vec1.y} Y, ${vec1.z} Z) and the Vector (${vec2.x} X, ${vec2.y} Y, ${vec2.z} Z) is: New vector (${xNew} X, ${yNew} Y, ${zNew} Z)`;
    }
    resta(vec1, vec2){
        const xNew = vec1.x - vec2.x; 
        const yNew = vec1.y - vec2.y; 
        const zNew = vec1.z - vec2.z;
        return `Thew substraction of Vector (${vec1.x} X, ${vec1.y} Y, ${vec1.z} Z) and the Vector (${vec2.x} X, ${vec2.y} Y, ${vec2.z} Z) is: New vector (${xNew} X, ${yNew} Y, ${zNew} Z)`;
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
    multiplicarEscalar(escalar){
        const escalarX = this.x * escalar;
        const escalarY = this.y * escalar;
        const escalarZ = this.z * escalar;
        return `(${escalarX} X, ${escalarY} Y, ${escalarZ} Z)`;
    }
}
const vector1 = new Vector(5,8,3);
const vector2 = new Vector(4,7,6);
const vector3 = new Vector(-2,5,1);
const vector4 = new Vector(-3,-4,6);
const newVectorPlus = new Vector(0,0,0); // Create a new vector with null values so we can store the sum on it
console.log(newVectorPlus.suma(vector1,vector2)); //suma
console.log(newVectorPlus.suma(vector1,vector3)); //suma
console.log(newVectorPlus.suma(vector1,vector4)); //suma
console.log(newVectorPlus.suma(vector2,vector4)); //suma
const newVectorSubst = new Vector(0,0,0); // Create a new vector with null values so we can store the substraction on it
console.log(newVectorSubst.resta(vector1,vector2)); // resta
console.log(newVectorSubst.resta(vector1,vector3)); // resta
console.log(newVectorSubst.resta(vector1,vector4)); // resta
console.log(newVectorSubst.resta(vector2,vector4)); // resta
console.log(`The magnitud of the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) is: ${vector1.magnitud()}`); //Magnitud
console.log(`The magnitud of the vector (${vector2.x} X, ${vector2.y} Y, ${vector2.z} Z) is: ${vector2.magnitud()}`); //Magnitud
console.log(`The magnitud of the vector (${vector3.x} X, ${vector3.y} Y, ${vector3.z} Z) is: ${vector3.magnitud()}`); //Magnitud
console.log(`The magnitud of the vector (${vector4.x} X, ${vector4.y} Y, ${vector4.z} Z) is: ${vector4.magnitud()}`); //Magnitud
console.log(`The unity vector of the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) is: ${vector1.vectorUnitario()}`); // UnityVector
console.log(`The unity vector of the vector (${vector2.x} X, ${vector2.y} Y, ${vector2.z} Z) is: ${vector2.vectorUnitario()}`); // UnityVector
console.log(`The unity vector of the vector (${vector3.x} X, ${vector3.y} Y, ${vector3.z} Z) is: ${vector3.vectorUnitario()}`); // UnityVector
console.log(`The unity vector of the vector (${vector4.x} X, ${vector4.y} Y, ${vector4.z} Z) is: ${vector4.vectorUnitario()}`); // UnityVector
let escalar = 4;
console.log(`The result we get from multiplicating the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) times this escalar ${escalar} is: ${vector1.multiplicarEscalar(escalar)}`);
escalar = 3;
console.log(`The result we get from multiplicating the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) times this escalar ${escalar} is: ${vector1.multiplicarEscalar(escalar)}`);
escalar = 12;
console.log(`The result we get from multiplicating the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) times this escalar ${escalar} is: ${vector1.multiplicarEscalar(escalar)}`);
escalar = 6;
console.log(`The result we get from multiplicating the vector (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) times this escalar ${escalar} is: ${vector1.multiplicarEscalar(escalar)}`);
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
num1 = 2;
num2=6;
console.log(`The greatest comun divisor of ${num1} and ${num2} is: ${mcd(num1,num2)}`);
num1 = 4;
num2=8;
console.log(`The greatest comun divisor of ${num1} and ${num2} is: ${mcd(num1,num2)}`);
num1 = 1;
num2=10;
console.log(`The greatest comun divisor of ${num1} and ${num2} is: ${mcd(num1,num2)}`);
// Seventh Problem: Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no.
function ortogonal(vector1,vector2){
    const escalarX = vector1.x * vector2.x;
    const escalarY = vector1.y * vector2.y;
    const escalarZ = vector1.z * vector2.z;
    const escalar = escalarX + escalarY + escalarZ;
    if(escalar===0){
        return `Vector 1 (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) and Vector 2 (${vector2.x} X, ${vector2.y} Y, ${vector2.z} Z) are  ortogonal, because the multiplication is equal to 0`;
    } else{
        return `Vector 1 (${vector1.x} X, ${vector1.y} Y, ${vector1.z} Z) and Vector 2 (${vector2.x} X, ${vector2.y} Y, ${vector2.z} Z) are not ortogonal, because the multiplication of both is greater or less than 0`;
    }
}
console.log(ortogonal(vector1,vector2));
console.log(ortogonal(vector1,vector3));
console.log(ortogonal(vector1,vector4));
console.log(ortogonal(vector2,vector3));
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
str = "Hola soy Diego";
console.log(`The string "${str}" in "Hacker Speak" is: ${hackerSpeak(str)}`);
str = "Estudio en el Tec";
console.log(`The string "${str}" in "Hacker Speak" is: ${hackerSpeak(str)}`);
str = "Tengo 19 años";
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
numero = 10;
console.log(`The factors of ${numero} are: ${factores(numero)}`);
numero = 9;
console.log(`The factors of ${numero} are: ${factores(numero)}`);
numero = 12;
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
arreglo = [1,0,1,3,3,1,6,6,8];
console.log(`The array ${arreglo} without duplicates is: ${quitaDuplicados(arreglo)}`);
arreglo = [1,0,1,30,3,1,6,80,80];
console.log(`The array ${arreglo} without duplicates is: ${quitaDuplicados(arreglo)}`);
arreglo = [20,2,20,100,100];
console.log(`The array ${arreglo} without duplicates is: ${quitaDuplicados(arreglo)}`);