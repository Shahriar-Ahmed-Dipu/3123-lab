Name:Shahriar Ahmed Dipu
ID:101425451




// 1. Greeter function
function gretter(myArray, counter) {
    const greetText = "Hello ";
    for (let i = 0; i < counter; i++) {
        console.log(`${greetText}${myArray[i]}`);
    }
}

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

// 2. Capitalize function
function capitalize(string) {
    let [first, ...rw] = string;
    return first.toUpperCase() + rw.join('').toLowerCase();
}

console.log(capitalize("NODEs"));

// 3. Capitalize first character of each color
const colors = ['red', 'green', 'blue'];
const capitalized_colors = colors.map((color) => capitalize(color));
console.log(capitalized_colors);

// 4. Filter values less than 20
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter((n) => n < 20);
console.log(filterLessThan20);

// 5. Calculate sum, product, and inverse
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((accumulator, n) => accumulator + n, 0);
const calculateProduct = array.reduce((accumulator, n) => accumulator * n, 1);
const calculateInverse = array.reduce((accumulator, n) => accumulator + (n ** -1), 0);

console.log(`Sum: ${calculateSum}, Product: ${calculateProduct}, Inverse: ${calculateInverse}`);

// 6. Car and Sedan classes
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}, Engine: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance}`;
    }
}

// Updated car and sedan values
const car2 = new Car("Tesla Model 3", 2024);
const sedan = new Sedan("Mercedes-Benz C-Class", 2023, 50000);

console.log(car2.details());
console.log(sedan.info());