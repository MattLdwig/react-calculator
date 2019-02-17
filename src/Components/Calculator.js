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

  }

  handleClick(e) {
      const value = e.target.getAttribute('data-value');
      //console.log(e.target.getAttribute('data-value'));
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
        <div className="display" id="display">{this.state.operation !== [] ? this.state.operation : this.state.result}</div>
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
