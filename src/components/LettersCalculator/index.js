// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    value: 0,
  }

  click = event => {
    this.setState({value: event.target.value.length})
  }

  render() {
    let {value} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <div className="card">
          <h1>calculate the letters you entered</h1>
          <label htmlFor="label">Enter the phrase</label>
          <div>
            <input
              id="label"
              type="text"
              onChange={this.click}
              placeholder="Enter the phrase"
            />
          </div>
          <div>
            <p>No.of letters: {value}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
