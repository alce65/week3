console.log('Asincronia');

console.log('Linea 1');
setTimeout(() => {
    console.log('Linea 2');
}, 2);
console.log('Linea 3');
setTimeout(() => {
    console.log('Linea 4');
}, 1);
console.log('Linea 5');
