let userName = 'Laura';

userName ? console.log(`Hello, ${userName}!`) :
console.log('Hello!')

const userQuestion = 'Am I smart?';
console.log(`${userName} asked: ${userQuestion}`);

// the random method returns a value between 0 and 1, so I'm multiplying it by 8, and the floor method rounds this value downward to its nearest integer
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain, my dear.';
    break;
  case 1:
    eightBall = 'I do not think so.';
    break;
  case 2:
    eightBall = 'I cannot say.';
    break;
  case 3:
    eightBall = 'How would I know that?';
    break;
  case 4:
    eightBall = 'Do not count on it.';
    break;
  case 5:
    eightBall = 'Of course, darling!';
    break;
  case 6:
    eightBall = 'My sources say YES.';
    break;
  case 7:
    eightBall = 'Outlook not so good.';
    break;
}

console.log(eightBall);
