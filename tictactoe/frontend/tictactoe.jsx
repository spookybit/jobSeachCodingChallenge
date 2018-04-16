import React from 'react';

class TicTacToe extends React.Component {
  constructor() {
    super();

    this.state = {
      game: [[0,0,0], [0,0,0], [0,0,0]],
      currentPlayer: 'x',
      won: false
    }
    this.move = this.move.bind(this);
    this.selectSquare = this.selectSquare.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.switchPlayers = this.switchPlayers.bind(this);
    this.reset = this.reset.bind(this);
  }

  move(e) {
    let pos = e.target.dataset.square.split('');
    if (this.state.game[pos[0]][pos[1]] === 0) {
      let classNames = e.target.className + " " + this.state.currentPlayer;
      e.target.className = classNames
      this.selectSquare(pos);
      this.switchPlayers();
    }
  }

  selectSquare(pos) {
    let board = this.state.game;
    let move = this.state.currentPlayer;
    board[pos[0]][pos[1]] = move;
    this.checkWin(board);
    this.setState({game : board});
  }

  checkWin(board) {
    function isX(row) {
      return row.every((x) => x==='x')
    }

    function isO(row) {
      return row.every((x) => x==='o')
    }

    for (let i = 0; i< board.length; i++) {
      let row = board[i];

      if (isX(row) || isO(row)){
        this.setState({won: true})
        return
      }
    }

    let col1 = [board[0][0], board[1][0], board[2][0]]
    let col2 = [board[0][1], board[1][1], board[2][1]]
    let col3 = [board[0][2], board[1][2], board[2][2]]

    if (isX(col1) || isO(col1) || isX(col2) || isO(col2) || isX(col3) || isO(col3)) {
      this.setState({won: true})
      return
    }

    let diag1 = [board[0][0], board[1][1], board[2][2]]
    let diag2 = [board[0][2], board[1][1], board[2][0]]

    if (isX(diag1) || isO(diag1) || isX(diag2) || isO(diag2)) {
      this.setState({won: true})
      return
    }
  }

  switchPlayers() {
    if (this.state.currentPlayer === 'x') {
      this.setState({currentPlayer: 'o'})
    } else {
      this.setState({currentPlayer: 'x'})
    }
  }

  reset() {
    // let list = document.querySelector('.board').childNodes;
    
    let list = document.querySelectorAll('.x, .o');
    Array.prototype.forEach.call(list, child => child.className = 'square');

    this.setState({game: [[0,0,0], [0,0,0], [0,0,0]]})
  }

  render() {
    return(
      <div className='board'>
        <div className='square' onClick={this.move} data-square='00'></div>
        <div className='square' onClick={this.move} data-square='01'></div>
        <div className='square' onClick={this.move} data-square='02'></div>
        <div className='square' onClick={this.move} data-square='10'></div>
        <div className='square' onClick={this.move} data-square='11'></div>
        <div className='square' onClick={this.move} data-square='12'></div>
        <div className='square' onClick={this.move} data-square='20'></div>
        <div className='square' onClick={this.move} data-square='21'></div>
        <div className='square' onClick={this.move} data-square='22'></div>
        <div className='reset' onClick={this.reset}>Reset</div>
      </div>
    )
  }
}

export default TicTacToe;
