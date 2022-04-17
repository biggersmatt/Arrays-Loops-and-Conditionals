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
    console.log(thirdProblem);
  } else if (i % 3 === 0) {
    console.log(firstProblem);
  } else if (i % 5 === 0) {
    console.log(secondProblem)
  } else {
    console.log(i);
  }
}


























