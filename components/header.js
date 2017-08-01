const Label = document.createElement('span');
Label.innerHTML = 'Tic Tac Toe';
Label.className = 'label';

const Header = document.createElement('header');
Header.appendChild(Label);

export default Header;
