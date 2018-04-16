import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './tictactoe.jsx';



class Root extends React.Component {
  render() {
    return(
      <div>
        <TicTacToe />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
