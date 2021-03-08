// jshint esversion:8
function game (input) {
	console.log(input);
	// r:rock p:paper s:scissor
	let opt=['rock','paper','scissor'];
	let rm=Math.floor(Math.random()*3);
	let pc=opt[rm];
	// choice write
	let choice=document.querySelector('#choice');
	choice.children[0].innerText=`YOU CHOOSE ${input.toUpperCase()}`;
	choice.children[1].innerText=`PC CHOOSE ${pc.toUpperCase()}`;
	console.log(choice.children);
	// cochoiceObject ME vs PC , w:win d:draw l:loss
	match={
		'paper': {
			'rock':'w',
			'paper':'d',
			'scissor':'l'
		},
		'rock':{
			'rock':'d',
			'paper':'l',
			'scissor':'w'	
		},
		'scissor':{
			'rock':'l',
			'paper':'w',
			'scissor':'d'	
		}
	};
	// Set Winer
	
	switch (match[input][pc]) {
		case 'w':
			choice.children[3].style.display = 'none';
			choice.children[4].style.display = 'none';
			choice.children[2].style.display = 'block';
			break;
		case 'l':
			choice.children[2].style.display = 'none';
			choice.children[4].style.display = 'none';
			choice.children[3].style.display = 'block';
			break;
		default:
			choice.children[2].style.display = 'none';
			choice.children[3].style.display = 'none';
			choice.children[4].style.display = 'block';
			break;
	}

}