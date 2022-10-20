// ES6 -> ES2015: Promise
// ES2018: async / await

const foo = (p = 1) => {
    if (p === 0) {
        throw new Error('No quiero ceros');
    }
    return 'Pepe: ' + 30 / p;
};

const bar = async (p = 1) => {
    if (p === 0) {
        throw new Error('No quiero ceros');
    }
    return 'Ernesto: ' + 30 / p;
};

try {
    console.log(foo(0));
} catch (error) {
    console.error((error as Error).message);
}

bar(0)
    .then((value) => console.log(value))
    .catch((error: Error) => console.error(error.message));
