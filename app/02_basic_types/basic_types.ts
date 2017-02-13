// Boolean test
let isItTrue : boolean = false;
console.log('isItTrue', isItTrue);
// undefined and null can be assigned to any type.
isItTrue = undefined;
isItTrue = null;

// Number test
let pi : number = 3.14;
console.log('pi', pi);

// String test
let firstname : string = 'Jean-Louis';
console.log('firstname', firstname);

// backquote operator for string
let age : number = 42;
let sentence : string = `Hello, my name is ${firstname} ...
... and I am ${age} years old.`;
console.log('sentence: ', sentence);

// Array of given type
let fibonacciArray : number[] = [1, 2, 3, 5, 8, 13, 21, 34];
console.log('fibonacciArray', fibonacciArray);
let syracuse14Array : Array<number> = [14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1];
console.log('syracuse14Array', syracuse14Array);

// Tuple test
let couple : [string, number] = ['Jean-Louis', 42];

couple[2] = 'kiki';
couple[2] = 13;
// wrong: couple[2] = true;
console.log('couple', couple);

// Enum test
enum State {Normal, Edition, Error};
let s : number = State.Normal;
console.log('s', s);
let str : string = State[s];
console.log('str', str);

// Any test
let x : any = 'coucou';
console.log('x', x);
x = true;
console.log('x', x);
x = 13.1234;
console.log('x', x.toFixed(2));

let y : Object = 3;
// error: console.log('y', y.toFixed(2));

// Test void
function message(): void {
    console.log('This is a message');
}
let c = message();
console.log('c', c);

let useless: void | null = undefined;
useless = null;
// error: useless = 0;


