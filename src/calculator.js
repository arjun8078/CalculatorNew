// Import necessary modules
import React, { useState } from 'react';
import './calculator.css';

// Calculator component
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('0');
      setResult('');
    } else {
        if(input == '0'){
            setInput('')
        }
      
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('=')} className='equal'>=</button>
        

        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
