import React, { Component } from 'react';

class Calculator extends Component {
  
  constructor(){
      super();
      this.state = {
        result: 0,
        operation: []
      }

      this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
      const value = e.target.id;
      switch (value) {
          case 'clear': 
            this.setState({
                operation: [],
            })
            break
          case 'equal':
            this.calcOperation()
            break
          default:
            this.setState({
                operation: [...this.state.operation, value]
            })
            break
      }
  } 
  render() {
    return (
      <div className="calculator">
        <div className="display" id="display">{this.state.operation !== [] ? this.state.operation : this.state.result}</div>
        <div className="btn-container">
            <ul className="btn--items">
                <li className="btn--item" id="seven" onClick={this.handleClick} value="7">7</li>
                <li className="btn--item" id="eight" onClick={this.handleClick} value="8">8</li>
                <li className="btn--item" id="nine" onClick={this.handleClick} value="9">9</li>
                <li className="btn--item" id="divide" onClick={this.handleClick} value="/">/</li>
                <li className="btn--item" id="four" onClick={this.handleClick} value="4">4</li>
                <li className="btn--item" id="five" onClick={this.handleClick} value="5">5</li>
                <li className="btn--item" id="six" onClick={this.handleClick} value="6">6</li>
                <li className="btn--item" id="multiply" onClick={this.handleClick} value="*">*</li>
                <li className="btn--item" id="one" onClick={this.handleClick} value="1">1</li>
                <li className="btn--item" id="two" onClick={this.handleClick} value="2">2</li>
                <li className="btn--item" id="three" onClick={this.handleClick} value="3">3</li>
                <li className="btn--item" id="subtract" onClick={this.handleClick} value="-">-</li>
                <li className="btn--item" id="clear" onClick={this.handleClick} value="clear">C</li>
                <li className="btn--item" id="zero" onClick={this.handleClick} value="0">0</li>
                <li className="btn--item" id="decimal" onClick={this.handleClick} value=".">.</li>
                <li className="btn--item" id="add" onClick={this.handleClick} value="+">+</li>
                <li className="btn--item" id="equals" onClick={this.handleClick} value="equal">=</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Calculator;
