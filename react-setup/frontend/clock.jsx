import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();

    this.state = {
      'hours': 0,
      'minutes': 0,
      'seconds': 0
    };

    this.clockTicking = this.clockTicking.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    let d = new Date();
    let hours = Math.abs(d.getUTCHours() - 6);
    let mins = d.getUTCMinutes();
    let secs = d.getUTCSeconds();
    this.setState(
      {'hours': hours,
      'minutes': mins,
      'seconds': secs}
    )

    this.clockTicking();
  }

  clockTicking(){
    setInterval(this.tick, 1000)
  }

  tick() {
    this.state.seconds += 1;
    if (this.state.seconds >= 60) {
      this.state.minutes += 1;
      this.state.seconds = 0;
      if (this.state.minutes >= 60) {
        this.state.hours += 1;
        this.state.minutes = 0;
      }
    }
    if (this.state.hours >= 13) {
      this.state.hours = 1;
    }
    let state = this.state
    this.setState(state);
  }

  render() {
    return(
      <div>
        <div>{this.state.hours}</div>
        <div>{this.state.minutes}</div>
        <div>{this.state.seconds}</div>
      </div>
    )
  }
}

export default Clock;
