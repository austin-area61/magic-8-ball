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

console.log(`The Magic Eight Ball says: ${eightBall}`);