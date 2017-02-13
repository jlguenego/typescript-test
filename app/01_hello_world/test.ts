interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName;
}

var user : Person = {
    firstName: 'Jean-Louis, François',
    lastName: 'GUENEGO'
};

var hello = greeter(user);

console.log('hello', hello);
