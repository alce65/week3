"use strict";
const makeAsyncPromisesNew = () => {
    let data;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = Math.random();
            if (r > 0.5) {
                data = '1000';
                resolve(data);
            }
            else {
                reject(new Error('Error ' + r));
            }
        }, 2000);
    });
};
// IIFE
(async () => {
    console.log('Conectando');
    try {
        const value = await makeAsyncPromisesNew();
        console.log(+value * 2);
    }
    catch (error) {
        console.log(error.message);
    }
    console.log('Fin');
})();
