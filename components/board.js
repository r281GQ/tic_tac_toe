import BoardButton from './board_button';

const renderBoard = state => {
  const Board = document.createElement('div');
  for (let i = 0; i < 3; i++) {
    const Line = document.createElement('div');
    Line.id = `line${i}`;
    Line.className = 'line';
    for (let j = 0; j < 3; j++) {
      const Button = BoardButton(state, i * 3 + j + 1);
      Line.appendChild(Button);
    }
    Board.appendChild(Line);
  }
  return Board;
};

export default renderBoard;
