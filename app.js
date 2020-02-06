/* eslint-disable no-unreachable */
/* eslint-disable eqeqeq */
'use strict';
var score = 0;
var user = prompt('What is your name?');
alert('Welcome ' + user);

// question 1
var age = prompt('Is the sky blue ?').toLowerCase();
if (age === 'yes') {
  //console.log('You are old enough to LEGALLY drink!');
  alert('correct');
  score++;
} else if (age === 'no') {
  //console.log('You are still to young :(');
  alert('wrong');
}

//question 2
var days = prompt('Are there 7 days in a week').toLowerCase();
if (days === 'yes') {
  //console.log('Congrats on finishing high school!');
  alert('correct');
  score++;
} else if (days === 'no') {
  //console.log('You did not gradute');
  alert('wrong');
}

//question 3
var anime = prompt('Is Anime fun?');
if (anime.toLowerCase() === 'yes') {
  //console.log('I watch Anime too!');
  alert('correct');
  score++;
} else if (anime.toLowerCase() === 'no') {
  //console.log('You should start watching it');
  alert('wrong');
}

//questiion 4
var sports = prompt('is basketball a sport');
if (sports.toLowerCase() === 'yes') {
  // console.log('I love to watch or play sports as well');
  alert('correct');
  score++;
} else if (sports.toLowerCase() === 'no') {
  //console.log('great to know');
  alert('wrong');
}
//question 5
var coding = prompt('Is the first week of coding hard for you?');
if (coding.toLowerCase() === 'yes') {
  // console.log('Everything in life starts off hard');
  alert('correct');
  score++;
} else if (coding.toLowerCase() === 'no') {
  // console.log('Well the second is harder : ) ');
  alert('wrong');
}

//question 6
for (var i = 0; i < 4; i++ ) {
  var correct = 7;
  var num = prompt('Can you guess a number between 1 and 10');
  if ( num == correct) {
    alert('GOOD JOB! Youre answer is correct');
    break;
    // eslint-disable-next-line no-unreachable
    score++;
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
  // eslint-disable-next-line no-redeclare
  for (var i = 0; i < lang.length ; i++){
    if (edu.toLowerCase() == lang[i]) {
      alert('You are correct!');
      isCorrect = true;
      break;
      // eslint-disable-next-line no-unreachable
      score++;
    }

  }
  break;

  // eslint-disable-next-line eqeqeq
  if (isCorrect == false){
    alert('try again');
  }

}
if (isCorrect == false > 6){
  alert('answers are ' + lang);
}

alert('Your score is '+ score);


