import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="display" id="display"></div>
        <div className="btn-container">
            <ul className="btn--items">
                <li className="btn--item" id="seven">7</li>
                <li className="btn--item" id="eight">8</li>
                <li className="btn--item" id="nine">9</li>
                <li className="btn--item" id="divide">/</li>
                <li className="btn--item" id="four">4</li>
                <li className="btn--item" id="five">5</li>
                <li className="btn--item" id="six">6</li>
                <li className="btn--item" id="seven">7</li>
                <li className="btn--item" id="multiply">*</li>
                <li className="btn--item" id="one">1</li>
                <li className="btn--item" id="two">2</li>
                <li className="btn--item" id="three">3</li>
                <li className="btn--item" id="subtract">-</li>
                <li className="btn--item" id="clear">C</li>
                <li className="btn--item" id="zero">0</li>
                <li className="btn--item" id="decimal">.</li>
                <li className="btn--item" id="add">+</li>
                <li className="btn--item" id="equals">=</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Calculator;
