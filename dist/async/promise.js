"use strict";
const makeAsyncPromises = () => {
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
    // return data
};
const render2 = (value) => {
    console.log(value);
};
console.log('Conectando');
makeAsyncPromises()
    .then((value) => {
    render2(value);
})
    .catch((error) => {
    console.log(error.message);
});
const p = makeAsyncPromises();
p.then((value) => {
    console.log(+value * 2);
}).catch((error) => {
    console.log(error.message);
});
makeAsyncPromises()
    .then((value) => {
    console.log(+value * 2);
})
    .then()
    .catch((error) => {
    console.log(error.message);
});
