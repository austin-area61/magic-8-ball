let userName = ""; // User can enter their name here if they wish
let userQuestion = "Will I have a bright future?"; // Example question, replace with the user's question

console.log(userName ? `${userName} asked: ${userQuestion}` : `The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 9);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  case 8:
    eightBall = 'Absolutely';
    break;
}

<<<<<<< HEAD
console.log(`The Magic Eight Ball says: ${eightBall}`);
=======
console.log(`The Magic Eight Ball says: ${eightBall}`);

//else if alternate statements.

/* let userName = ""; // User can enter their name here if they wish
let userQuestion = "Will I get a promotion this year?"; // Example question, replace with the user's question

console.log(userName ? `${userName} asked: ${userQuestion}` : `The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
} else {
  eightBall = 'Error: invalid number'; // In case something goes wrong
}

console.log(`The Magic Eight Ball says: ${eightBall}`);
*/
>>>>>>> 9eab25ad3809878fb89d51da0a9cacaff7a474b8
