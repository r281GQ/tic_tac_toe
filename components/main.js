import NewGameButton from './new_game_button';
import renderBoard from './board';
import {  INITIAL_STATE } from './../state';
import {
  getComputerMove,
  isGameWon,
  movesLeft,
  PLAYER,
  COMPUTER
} from './../calculations';

let CURRENT_STATE = Object.assign({}, INITIAL_STATE);

const renderButtons = (state, wrapper) => {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
  wrapper.appendChild(renderBoard(state));
  document.body.appendChild(wrapper);

  wrapper.appendChild(NewGameButton);
};

const renderMain = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  wrapper.appendChild(renderBoard(CURRENT_STATE));
  document.body.appendChild(wrapper);

  wrapper.appendChild(NewGameButton);

  wrapper.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.id === 'newGameButton') {
        // let newState = Object.assign({}, INITIAL_STATE);
        CURRENT_STATE = {
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
          9: ''
        };
        return renderButtons(CURRENT_STATE, wrapper);
      }
      console.log(event.target.id);
      calculate(CURRENT_STATE, event.target.id, PLAYER);
    }
  });

  const calculate = (state, id, player) => {
    if (
      isGameWon(PLAYER, state) ||
      isGameWon(COMPUTER, state) ||
      state[id] !== ''
    )
      return;

    if (movesLeft(state).length === 0) {
      return alert('The game is a draw!');
    }

    state[id] = player;

    renderButtons(state, wrapper);

    state[getComputerMove(state)] = COMPUTER;

    renderButtons(state, wrapper);

    if (isGameWon(COMPUTER, state)) {
      return alert('You have lost!');
    }

    if (movesLeft(state).length === 0) {
      return alert('The game is a draw!');
    }
  };

  return wrapper;
};

export default renderMain;
