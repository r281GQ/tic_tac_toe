import { COMPUTER } from './../calculations';

const BoardButton = (state, id) => {
  const BoardButton = document.createElement('button');
  BoardButton.innerHTML = 'X';
  BoardButton.style.color = '#9f88c8';
  BoardButton.id = id;
  if (state[id] !== '') {
    BoardButton.innerHTML = state[id] === COMPUTER ? 'O' : 'X';
    BoardButton.style.color = 'black';
  }
  return BoardButton;
};

export default BoardButton;
