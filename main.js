// 1. Easy Going 
// Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
  // console.log(i)
}

// 2. Get Even 
// Write a for loop that will log only the even numbers in 0 through 200
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    //console.log(i)
  }
}

// 3. Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times
const cats = "love me, pet me! HSSSSSS!";

const firstMessage = "...human...why you taking pictures of me?...";
const secondMessage = "...the catnip made me do it...";
const thirdMessage = "...why does the red dot always get away...";

const messages = [firstMessage, secondMessage, thirdMessage];


for (let i = 1; i <= 20; i++) {
  let random = Math.floor(Math.random() * 3);
  if (i % 2 === 0) {
    // console.log(i + ' ' + messages[random]);
  } else {
    // console.log(i + ' ' + cats);
  }
}

// Fizz Buzz
// Write a javascript application that logs all numbers from 1 - 100 AND:
const firstProblem = "Fizz";
const secondProblem = "Buzz";
const thirdProblem = "fizzBuzz";

for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    //console.log(thirdProblem);
  } else if (i % 3 === 0) {
    //console.log(firstProblem);
  } else if (i % 5 === 0) {
    //console.log(secondProblem)
  } else {
    //console.log(i);
  }
}

// Getting to Know You
// Use the following arrays to answer the questions below (name, age, hometown):

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "gameboy";
//console.log(kenny)
//console.log(jimClark[1] + 1)
ryan[2] = "Gotham City";
//console.log(ryan[2])
reuben.pop();
reuben.push("Chicago");
//console.log(reuben)
jimHaff.pop()
jimHaff.push("San Francisco", "Atlanta", "Oakland");
//console.log(jimHaff)

// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles 
//(Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let i = 0; i < ninjaTurtles.length; i++) {
  //console.log(ninjaTurtles[i].toUpperCase())
}







// Return of the Closets
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset[2])

const outfit = ('Today Thom is wearing a ' + thomsCloset[0][1] + ' and ' + thomsCloset[1][0] + ' with ' + thomsCloset[2][1]);

// console.log(outfit)

for (let i = 0; i < kristynsCloset.length; i++) {
  //console.log('WHIRR: Now washing ' + kristynsCloset[i])
}
for (let i = 0; i < thomsCloset.length; i++) {
  // console.log(thomsCloset[i])
}



let sum = 0;

for (let i = 0; i < 1000; i++) {
  if(i % 3 == 0 && i % 5 == 0) {
    sum = sum + i;
  }
}

console.log(sum)











