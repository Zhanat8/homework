const user = {
    firstName: 'Zhanat',
    lastName: 'Telyubaev',
    age: 26,
    country: 'Russia',
    gender: 'man',
};

console.log(user)

// ====================================

const myObject = {
    greet: function (name) {
        return `Hello '${name}'`;
    }
};

console.log(myObject.greet('Zhanat'));
console.log(myObject.greet('John'));

// ==============================================

const users = [
    {
        name: 'Alice',
        isAdmin: true,
    },
    {
        name: 'Bob',
        isAdmin: true,
    },
    {
        name: 'Zhanat', 
        isAdmin: false,
    },
    {
        name: 'David',
        isAdmin: true,
    },
    {
        name: 'John',
        isAdmin: false,
    }
];


let simpleUsers = 0;


for (let user of users) {

    if (user.isAdmin) {
        simpleUsers++;
    }
}

console.log(`Количество простых пользователей: ${simpleUsers}`);