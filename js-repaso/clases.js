/* const Rectangulo = class R { // Expresión de clase

} */

//clases declaradas con class no tienen hoisting
//console.log(Rectangulo);
class Rectangulo { // declaracion de CLASE

}


// Hoisting
// Y esto es cuando tomamos variables definidas con var y
// funciones definidas con function
// y las lleva al inicio del scope
//console.log(Cuadrado);
function Cuadrado() {}
//console.log(Rectangulo, Cuadrado);

const r = new Rectangulo();

class Chancho {
    propiedad = 'mi propiedad';
    #hambre;
    static estatico = 42;
    constructor( estado = 'feliz', hambre = false ) {
        this.estado = estado;
        this.#hambre = hambre;
    }

    hablar() {
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con hambre' : 'sin hambre'}`);
    }

    static comer() {
        console.log(this.estatico,'soy un chancho comiendo');
    }
}

Chancho.comer();
const feliz = new Chancho('feliz');
//console.log(feliz.__proto__.hablar);
/* feliz.hablar();
console.log(feliz); */
const triste = new Chancho('triste');
//triste.hablar();
const nada = new Chancho(); 
//nada.hablar();// no tiene argumento entonces 
//toma el parametro por defecto que seria feliz