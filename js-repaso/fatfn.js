function Fn() {
    this.prop = 'propiedad';
    
}

Fn.prototype.method = function() {};

const r = new Fn();

//console.log(r.__proto__);

// fat arrow function

//console.log(this);
const fatFn = () => { //no tienen contexto de this!!!!

    this.prop = 'lala';
}

const r1 = fatFn(); //las fat arrow function no se pueden usar como constructoras
//console.log(this);
//console.log(r1);

// return implicito

const fnR = () => 2 //return implicito, osea que no hace falta poner return
//{return 2} //return explicito

console.log(fnR());