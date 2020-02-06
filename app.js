
'use strict';
var score = 0;
var user = prompt('What is your name?');
alert('Welcome ' + user);

// question 1
var question = prompt('Is the sky blue ?');
ques();

//question 2
var question = prompt('Are there 7 days in a week');
ques();

//question 3
var question = prompt('Is Anime fun?');
ques();

//questiion 4
var question = prompt('is basketball a sport');
ques();

//question 5
var question = prompt('Is the first week of coding hard for you?');
ques();

//question 6
for (var i = 0; i < 4; i++ ) {
  var correct = 7;
  var num = prompt('Can you guess a number between 1 and 10');
  if ( num == correct) {
    alert('GOOD JOB!');
    score++;
    break;

  } else if (num < correct) {
    alert('Too low ');
  } else if (num > correct) {
    alert('Too high');
  }


}


alert('The correct answer is ' + correct);

//question 7
var isCorrect = false;

for (var j = 0 ; j < 6; j++){
  var edu =  prompt(' Name a computer software language ');
  var lang = ['javascript' , 'python', 'asp.net', 'java'];

  for (var i = 0; i < lang.length ; i++){
    if (edu.toLowerCase() == lang[i]) {
      alert('You are correct!');
      isCorrect = true;
      score++;
      break;
    }

  }
  break;
  // eslint-disable-next-line eqeqeq
  if (isCorrect == false){
    alert('try again');
  }

}
// eslint-disable-next-line eqeqeq
if (isCorrect == false > 6){
  alert('answers are ' + lang);
}

alert('Your score is '+ score);



function ques() {
  if (question.toLowerCase() === 'yes') {
    alert('correct');
    score++;
  } else {
    alert('wrong');
  }
}