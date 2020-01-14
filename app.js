import isYes from './is-yes.js';

//Getting quizbutton and total from html
const quizButton = document.getElementById('quizbutton');
const total = document.getElementById('total');

//making it so when you click on the botton, all of the following events happen.
quizButton.addEventListener('click', () => {
  console.log('button works');
  //prompt is a text field
  const name = prompt('Lets start with something basic. What is your name?');
  //confirm is a boolean, hitting cancel will close/false
  const confirmation = confirm(`Hello ${name}. Are you sure, I mean really sure, you want to take the quiz? If not no worries, just click cancel and this promt will go away. Otherwise click Okay and LETS DO THIS!`)
  if(confirmation === false) return;
  //prompts again, this time asking more detailed questions
  const answer1 = prompt('At the top of the page is there an image of a person walking?');
  const answer2 = prompt('Have I only ever had one career?');
  const answer3 = prompt('Am I married?');
  //a changable variable that is your score
  let count = 0;
  if(isYes(answer1)) count += 1;
  if(!isYes(answer2)) count += 1;
  if(isYes(answer3)) count += 1;
  //once done with the test, it prints the result
  total.textContent=`${name}, You got ${count} out of 3 correct!`;
})