import React, { Component } from 'react';

const calcButtons = [
  {value: '7', id: 'seven'},
  {value: '8', id: 'eight'},
  {value: '9', id: 'nine'},
  {value: '/', id: 'divide'},
  {value: '4', id: 'four'},
  {value: '5', id: 'five'},
  {value: '6', id: 'six'},
  {value: '*', id: 'multiply'},
  {value: '1', id: 'one'},
  {value: '2', id: 'two'},
  {value: '3', id: 'three'},
  {value: '-', id: 'subtract'},
  {value: 'C', id: 'clear'},
  {value: '0', id: 'zero'},
  {value: '.', id: 'decimal'},
  {value: '+', id: 'add'},
  {value: '=', id: 'equals'}
]

class Calculator extends Component {
  
  constructor(){
      super();
      this.state = {
        result: 0,
        operation: []
      }

      this.handleClick = this.handleClick.bind(this);
      this.calcOperation = this.calcOperation.bind(this);

  }

  calcOperation() {
    let operation = eval(this.state.operation.join('')) * 100 / 100;
    console.log(this.state.operation.join(''));
    this.setState({ 
      operation: [operation],
      result: operation 
    })
  }

  handleClick(e) {
      const value = e.target.getAttribute('data-value');
      //console.log(e.target.getAttribute('data-value'));
      switch (value) {
          case 'C': 
            this.setState({
                operation: [],
                result: 0
            })
            break
          case '=':
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
    const buttons = calcButtons.map((button) => 
      <button 
        data-value={button.value} 
        id={button.id} 
        className="btn--item" 
        key={button.id}
        onClick={this.handleClick}>
          {button.value}
      </button>
    );
    return (
      <div className="calculator">
        <div className="display" id="display">{ this.state.result !== 0 ? this.state.result : this.state.operation }</div>
        <div className="btn-container">
            <div className="btn--items">
              {buttons}
            </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
