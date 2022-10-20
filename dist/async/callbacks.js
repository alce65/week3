"use strict";
const makeAsync = (callback) => {
    let data;
    setTimeout(() => {
        data = '1000';
        callback(data);
    }, 2000);
    // return data
};
const render = (value) => {
    console.log(value);
};
console.log('Conectando');
makeAsync(render);
makeAsync((value) => {
    console.log(+value * 2);
});
