import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    lengthCount: 0,
  }

  numCount = event => {
    this.setState({lengthCount: event.target.value.length})
  }

  render() {
    const {lengthCount} = this.state
    return (
      <div className="bg-image">
        <div className="img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="par">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="inputValue" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              id="inputValue"
              className="inputEl"
              placeholder="Enter the phrase"
              onChange={this.numCount}
            />
            <br />
          </div>
          <p className="button">No.of letters: {lengthCount}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
