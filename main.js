// jshint esversion:8
let MY_score = 0;
let PC_score = 0;
function game(input) {
  console.log(input);
  // r:rock p:paper s:scissor
  let option = [ 'rock', 'paper', 'scissor' ];
  let random = Math.floor(Math.random() * 3);
  let pc = option[random];
  // choice write
  let choice = document.querySelector('#choice');
  choice.children[0].innerText = `YOU CHOOSE ${input.toUpperCase()}`;
  choice.children[1].innerText = `PC CHOOSE ${pc.toUpperCase()}`;
  console.log(choice.children);
  // score
  let score = document.querySelector("#score");
  // cochoiceObject ME vs PC , w:win d:draw l:loss
  let match = {
    'paper' : {'rock' : 'w', 'paper' : 'd', 'scissor' : 'l'},
    'rock' : {'rock' : 'd', 'paper' : 'l', 'scissor' : 'w'},
    'scissor' : {'rock' : 'l', 'paper' : 'w', 'scissor' : 'd'}
  };
  // Set Winer

  switch (match[input][pc]) {
  case 'w':
    choice.children[3].style.display = 'none';
    choice.children[4].style.display = 'none';
    choice.children[2].style.display = 'block';
    MY_score++;
    score.children[1].innerText = `YOU : ${MY_score}`;
    break;
  case 'l':
    choice.children[2].style.display = 'none';
    choice.children[4].style.display = 'none';
    choice.children[3].style.display = 'block';
    PC_score++;
    score.children[0].innerText = `PC : ${PC_score}`;
    break;
  default:
    choice.children[2].style.display = 'none';
    choice.children[3].style.display = 'none';
    choice.children[4].style.display = 'block';
    break;
  }
}
