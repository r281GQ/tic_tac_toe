let NewGameButton = document.createElement('button');
NewGameButton.innerHTML = 'Reset gameboard';
NewGameButton.id = 'newGameButton';

let NewGameButtonContainer = document.createElement('div');
NewGameButtonContainer.className = 'newGameButtonContainer';
NewGameButtonContainer.appendChild(NewGameButton);

export default NewGameButtonContainer;
