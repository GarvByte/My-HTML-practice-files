'use strict';

//take camel case fro the vars

//alongwith take control of all the selectors so do not need to get/write all the time
//global variables : player1 and player 2
let current_Score = 0;
let current_Player = 0;

//roll a dice
const roll_a_dice = function () {
  const randomNumber = Math.ceil(Math.random() * 6);
  return randomNumber;
};

//new game handler : reset game board => should be init fn
document.querySelector('.btn--new').addEventListener('click', function () {
  console.log('New Game ...');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
});

//roll dice handler : roll a dice, check the score and update the current acc
document.querySelector('.btn--roll').addEventListener('click', function () {
  const dice_number = roll_a_dice();
  const dice_img = 'dice-' + dice_number + '.png';

  document.querySelector('.dice').src = dice_img;

  if (dice_number === 1) {
    switchPlayer(current_Player);
    return;
  }

  //add the current score to the final score
  let player_new_current_score = current_Score + dice_number;

  document.querySelector('#current--' + current_Player).textContent =
    player_new_current_score;

  current_Score = player_new_current_score;
});

//hold function: to update the main score
document.querySelector('.btn--hold').addEventListener('click', function () {
  document.querySelector('#score--' + current_Player).textContent =
    Number(document.querySelector('#score--' + current_Player).textContent) +
    current_Score;

  switchPlayer(current_Player);
});

//subfunction -for player switching
const switchPlayer = function (player) {
  //switch a player counter first
  current_Player === 0 ? current_Player++ : current_Player--;

  //set the counter 0 of the old player and apply the class accordingly to both
  document.querySelector('#current--' + player).textContent = 0;
  document
    .querySelector('.player--' + player)
    .classList.remove('player--active');
  document
    .querySelector('.player--' + current_Player)
    .classList.add('player--active');

  //rest the current score
  current_Score = 0;
};