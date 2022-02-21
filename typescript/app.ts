let starter: string ='Hello world';
console.log(starter);
//BasicTypes: https://codesandbox.io/s/mz7m369m68?file=/src/Exercise_1_Basic_Types/exercise1.ts:1273-1748
//ex 1;
// ======== Exercise 1.1 ========
  // Instructions:
  // • Hover over red squigglies to inspect the TS errors.
  // • Hover over variables to inspect their types.
  // • Fix the error on line 18 by changing the value of pi to the expected type.
 
let pi: number = 3.14159;
let tau = pi * 2;
console.log('[Exercise 1.1]', `${tau} is ${pi} times two.`);

//ex2
// Instructions:
  // • Inspect type of `pie`
  // • Add an explicit type annotation to `pie`
  // • Try assigning invalid types, for fun
let pie: string;
pie = 'blueberry';
console.log('[Exercise 1.2]', `I like to eat ${pie}-flavored pie.`);

//ex3
// ======== Exercise 1.3 ========
  // Instructions:
  // • Inspect the error, then fix it.

let isMark: boolean = true;
  console.log('[Exercise 1.3]', `${isMark ? 'Oh, hi Mark' : 'Who are you?'}`);

//ex 4
// Instructions:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)
const integer:number = 6;
  const float:number = 6.66;
  const hex:number = 0xf00d;
  const binary:number = 0b1010011010;
  const octal:number = 0o744;
  const negZero: number = -0;
  const actuallyNumber:number = NaN;
  const largestNumber:number = Number.MAX_VALUE;
  const mostBiglyNumber:number = Infinity;

  const members: number[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
  ];

  members[0] = 12345;

  console.log('[Exercise 1.4]', members);
//   // ex5
//   // • Add type annotations (as explicit as possible)
//   // • Fix errors (if applicable)
//   const sequence: number[] = Array.from(Array(10).keys());
//   const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
//   const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
//   const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

//  // console.log('Solution 1.5', allMyArrays);
//   //ex 6
//   // • Add type annotations (as explicit as possible)
//   // • Fix errors (if applicable)
//   const inventoryItem: [string, number] = ['fidget wibbit', 11];

//   // later we destructure it
//   const [names, qty] = inventoryItem;

//   const msg = addInventory(names, qty);

//   console.log('[Exercise 1.6]', msg);

//   function addInventory(names: string, quantity: number): string {
//     return `Added ${quantity} ${names}s to inventory.`;
//   }
// ex 7
// Instructions:
  // • Create an interface `CartItem` and replace the param's type with it
  // • Make variantId optional

  interface CartItem {
    id: number
    title: string
    variantID?: number

  }
  function addToCart(item:CartItem) {
    console.log('[Exercise 2.1]', `Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'Concrete shoes'});

  //ex8
   // Instructions:
  // • Create and implement an interface on `Person` to ensure it always has accessible
  //   `name` and `age` member properties.

  interface Person {
    name: string;
    age: number;
  }

  class Person implements Person {
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log('[Solution 2.2]', `${jane.name} is ${jane.age} years old.`);
  //ex9
  // Instructions:
  // • Create an interface `Coords` that has numeric `latitude` and `longitude` properties.
  // • Extend the existing interface `City` (without modifying it inline) by adding a
  //   `coords` property of type `Coords`.
  // • Fix whatever is wrong with `tampa`
  // [do not edit] (pretend this is coming from external `foo.d.ts` lib)



  interface City {
    name: string
    coords: Coords
  }
 
  interface Coords{
    latitude: number
    longitude: number
  }
  

  const montreal = {
    coords: {
      latitude: 42.332,
      longitude: -73.324,
    },
    name: 'Montréal',
  };

  const tampa = {
    coords: {
      latitude: 27.9478,
      longitude: -82.4584,
    },
    name: 'Tampa',
  };

  function getCityInfo(city: City) {
    const coords = `(${city.coords.latitude.toFixed(3) }, ${city.coords.longitude.toFixed(3) })`;
    return `${city.name.toUpperCase()} is located at ${coords}.`;
  }

  console.log('[Exercise 2.3]', `${getCityInfo(montreal)} \n\n ${getCityInfo(tampa)}`);

// ex 10
// The purpose of this exercise is simply to illustrate a use of `readonly`

interface UserSchema {
  readonly id: number;
  name: string;
}

class User implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}

const user = new User('Dog', 1);

console.log(user.id); // readable

user.name = 'Harold'; // writable
user.id = 5; // not writable

console.log(`User:`, user)
}
