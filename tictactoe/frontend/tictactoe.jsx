import React from 'react';

class TicTacToe extends React.Component {
  constructor() {
    super();

    this.state = {
      game: [[0,0,0], [0,0,0], [0,0,0]],
      currentPlayer: 'x'
    }
    this.move = this.move.bind(this);
    this.switchPlayers = this.switchPlayers.bind(this);
  }

  move(e) {
    // console.log(e.target.dataset.square);
    let pos = e.target.dataset.square.split('');
    let move = this.state.currentPlayer;
    if (this.state.game[pos[0]][pos[1]] === 0) {
      this.state.game[pos[0]][pos[1]] = move;
      this.switchPlayers();
      this.setState(this.state);
    }
  }

  switchPlayers() {
    if (this.state.currentPlayer === 'x') {
      this.setState({currentPlayer: 'o'})
    } else {
      this.setState({currentPlayer: 'x'})
    }
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
      </div>
    )
  }
}

export default TicTacToe;
