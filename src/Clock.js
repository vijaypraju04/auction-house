import React from 'react'
import './App.css'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: "",
      newDeadline: ''
    }
  }

  componentWillMount() {
    this.setState({ deadline: this.props.auctionEnd})
    console.log(this.props.auctionEnd)
    this.getTimeUntil(this.state.deadline)
  }
  componentWillReceiveProps(){
    this.setState({ deadline: this.props.auctionEnd})
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 100)
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log("time", time)
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor ((time/1000/60)%60);
    const hours = Math.floor (time/(1000*60)%24);
    const days = Math.floor (time/(1000*60*60*24))


    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }


  render() {
    return (
    <div>
      <div>
        Countdown to {this.state.deadline}
      </div>
    <div>
      <div className="Clock-days">{this.state.days} Days </div>
      <div className="Clock-hours">{this.state.hours} Hours </div>
      <div className="Clock-minutes">{this.state.minutes} Minutes </div>
      <div className="Clock-seconds">{this.state.seconds} Seconds </div>
    </div>
    <div>
      <input
        placeholder="new date"
        onChange={event => this.setState({newDeadline: event.target.value})}
      />
      <button onClick={() => this.changeDeadline()}>
        Submit
      </button>
    </div>
  </div>
  )
  }
}

export default Clock
