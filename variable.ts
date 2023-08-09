//string
let greetings: string = "Namaste";
greetings.toLowerCase();

let name = "Abhinash";
//  name = 5 -- Type 'number' is not assignable to type 'string'

console.log(greetings);

// number
let userId: number = 222;

let luckyNumber = 1;
// luckyNumber = 'Abhinash'  -- Type 'string' is not assignable to type 'number'.

// boolean
let isLoggedIn: boolean = false;
// isLoggedIn = 1 -- Type 'number' is not assignable to type 'boolean'

//any

let guitar; // 'any' type - avoid this

function getGuitar() {
  return "Ibanez";
}

guitar = getGuitar(); // function can return any type

//--- update in above code

let guitar1: string;

function getGuitar1() {
  return "Ibanez";
  // return 1; -- Type 'number' is not assignable to type 'string'
}

guitar1 = getGuitar1(); // return string type -- cannot return any other type

export {};
