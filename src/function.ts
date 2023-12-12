// tipe data balikan dari function

function getName(): string {
  return "Hello, my name is Noan";
  // return 123 // error karna getName() balikannya string
}

console.log(getName());

function getAge(): number {
  return 24;
}

console.log(getAge());

function printName(): void {
  console.log("Noan");
  // return 123 // erro karna void ga memerlukan return
}

printName();

////////////////
// tipe data pada arguments
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(7, 8);
// const result = multiply("asdasd", 8); // error karena param/argument val1, val2 udah di define type number
console.log(result);

// function sebagain tipe data

type Age = number;

let age: Age = 19;

type Add = (val1: number, val2: number) => number;

const add: Add = (val1: number, val2: number): number => {
  return val1 + val2;
};

console.log(add(20, 17));

// default parameter
const fullName = (first: string, last: string = "lastName"): string => {
  return first + " " + last;
};

console.log(fullName("Novi")); // jadinya Novi lastName
console.log(fullName("Novi", "Andriyani"));

// optional parameter (?) undefined
/* error klo dioperasikan dgn returnnya number
    karena number +/*- dengan (?)optional jadinya undefined
*/
const proPlayer = (name: string, team?: string): string => {
  return name + " from " + team;
};

console.log(proPlayer("kairi", "onic"));
console.log(proPlayer("jo"));
