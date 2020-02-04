'use strict';
var user = prompt('What is your name?');
alert('Welcome ' + user);

var age = prompt(' Are you over 21 ?');
if (age.toLowerCase() === 'yes') {
  //console.log('You are old enough to LEGALLY drink!');
  alert('You are old enough to LEGALLY drink!');
} else if (age.toLowerCase() === 'no') {
  //console.log('You are still to young :(');
  alert('You are still to young :(');
}
var graduate = prompt('Did you graduate high school?');
if (graduate.toLowerCase() === 'yes') {
  //console.log('Congrats on finishing high school!');
  alert('Congrats on finishing high school!');
} else if (graduate.toLowerCase() === 'no') {
  //console.log('You did not gradute');
  alert('You did not gradute');
}
var anime = prompt('Do you watch Anime?');
if (anime.toLowerCase() === 'yes') {
  //console.log('I watch Anime too!');
  alert('I watch Anime too!');
} else if (anime.toLowerCase() === 'no') {
  //console.log('You should start watching it');
  alert('You should start watching it');
}
var sports = prompt('Do you watch or play sports?');
if (sports.toLowerCase() === 'yes') {
  // console.log('I love to watch or play sports as well');
  alert('I love to watch or play sports as well');
} else if (sports.toLowerCase() === 'no') {
  //console.log('great to know');
  alert('great to know');
}
var coding = prompt('Is the first week of coding hard for you?');
if (coding.toLowerCase() === 'yes') {
  // console.log('Everything in life starts off hard');
  alert('Everything in life starts off hard');
} else if (coding.toLowerCase() === 'no') {
  // console.log('Well the second is harder : ) ');
  alert('Well the second is harder : )');
}
alert('Good-bye ' + user);
