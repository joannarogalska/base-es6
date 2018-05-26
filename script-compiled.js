const first = 'Hello';
const second = 'World';

console.log(`${first} ${second}`);

const multiply = (a = 1, b = 1) => a * b;

multiply(4, 5);

multiply(5); // 5

console.log(multiply(4, 5));

const avarage = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum / args.length;
};

console.log(avarage(1, 2, 3, 4, 5));

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const avarageGrades = (first, second, ...rest) => {
    let sum = first + second;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }

    return sum / (2 + rest.length);
};

console.log(avarageGrades(...grades));

const arrayData = [1, 4, 'Iwona', false, 'Nowak'];
const [one, two, ...rest] = arrayData;
const [firstname, test, lastname] = [...rest];

console.log(firstname, lastname);
