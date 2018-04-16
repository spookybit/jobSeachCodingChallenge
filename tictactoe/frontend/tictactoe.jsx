import React from 'react';

class TicTacToe extends React.Component {
  constructor() {
    super();

    this.state = {
      game: [[0,0,0], [0,0,0], [0,0,0]],
      currentPlayer: 'x'
    }
    this.move = this.move.bind(this);
  }

  move(e) {
    console.log(e.target);
  }

  render() {
    return(
      <div className='board'>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
        <div className='square' onClick={this.move} data-square=''></div>
      </div>
    )
  }
}

export default TicTacToe;
