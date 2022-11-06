const chanchosFelices = ['chancho1', 'chancho2', 'chancho3'];
export const chanchosTristes = ['triste1', 'triste2', 'triste3'];
const otrosChanchos = [];

//module.exports = chanchosFelices; //manera antigua de exportar

/* module.exports = {
    chanchosFelices,
    chanchosTristes
}
 */

const fn1 = () => {
    console.log('soy la funcion 1');
}
const fn2 = () => {
    console.log('soy la funcion 2');
}

export { otrosChanchos, fn1, fn2 };
export default chanchosFelices; //manera nueva de exportar

