const arr = [-5, -1, -2, -3, -4];

const r = arr.filter( (el , i) => {
   // console.log(i);
    return el > 2;
});
//console.log(r);

/* const mapped = arr.map( (el) => `<h2>${el}</h2>`);
console.log(mapped);  */

const user = [
    {id: 1, nombre : 'chanchito feliz'},
    {id: 2, nombre : 'chanchito trite'},
    {id: 3, nombre : 'chanchito emocionado'},
    {id: 4, nombre : 'ccarlos'},
]

const mapped = user.map( (user) => `<h2>${user.nombre}</h2>`);

//console.log(mapped);


//const r1 = arr.reduce((acc, el) => acc + el, 0) //reduce recibe una funcion que recibe dos parametros, el acumulador y el elemento actual
//const getMax = (a, b) => Math.max(a, b);
//const r1 = arr.reduce(getMax, 0);
//console.log(r1);

/* const r1 = user.reduce((acc, el) =>
        `${acc === '' ? '' : `${acc},`}${el.nombre}`, ''); */

const r1 = user.reduce((acc, el) => {
    if(el.id <2) {
        return acc;
    }
    return acc.concat(el);
} , []);
console.log(r1);