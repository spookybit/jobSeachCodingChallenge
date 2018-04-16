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
    let hours = Math.abs(d.getUTCHours() - 7);
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
    setInterval(function(){
      this.tick.bind(this)
    }, 1000)
  }

  tick() {
    this.state.seconds += 1;
    if (this.state.seconds >= 60) {
      this.state.minutes += 1;
      this.state.seconds = 0;
      if (this.state.minutes >= 60) {
        this.state.hours += 1;
        this.state.minutes = 0;
        if (this.state.hours >= 13) {
          this.state.hours = 1;
        }
      }
    }
    console.log(this.state);
  }

  render() {
    // <div>{this.state.hours}</div>
    return(
      <div>
        <div>lnan</div>
      </div>
    )
  }
}

export default Clock;
