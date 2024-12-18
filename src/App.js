import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [input, setInput] = useState('');
  const calculateResult = (input) => {
    let result;
    try {
      const operators = ['+', '-', '*', '/'];
      let operator = null;
      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i]
          break;
        }
      }
      if (!operator) {
        setInput(parseFloat(input).toString)
        return;
      }
      const [operand1, operand2] = input.split(operator).map(parseFloat);
      switch (operator) {
        case '+':
          result = operand1 + operand2
          break
        case '-':
          result = operand1 - operand2
          break
        case '*':
          result = operand1 * operand2
          break
        case '/':
          result = operand1 / operand2
          break
        default:
          throw new Error('Invalid operator')
      }
      setInput(result.toString())
    } catch (error) {
      setInput('Error')
    }
  }
  const calculateMod = (input)=>{
      const operators = ['+', '-', '*', '/'];
      let operator = null;
      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i]
          break;
        }
      }
      if (!operator) {
        setInput(parseFloat(input).toString)
        return;
      }
      let [operand1, operand2] = input.split(operator).map(parseFloat);
      operand2 /= 100
      let result;
      switch (operator) {
        case '+':
          result = operand1 + operand2
          break
        case '-':
          result = operand1 - operand2
          break
        case '*':
          result = operand1 * operand2
          break
        case '/':
          result = operand1 / operand2
          break
        default:
          throw new Error('Invalid operator')
      }
      setInput(result.toString())
  }
  const handleButtonClick = (val) => {
    if (val === 'C') {
      setInput('');
    } else if (val === '<') {
      setInput(input.slice(0, -1));
    } else if (val === '=') {
      // try{
      // setInput(eval(input).toString())   //eval function used for calculation of string '2+5' = 7
      // }catch(e){
      //   setInput('Error')
      // }
      calculateResult(input)
    }else if(val === '%'){
      calculateMod(input)
    }
    else {
      setInput(input + val);
    }
  }
  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{input}</h1>
        <div>
          <button onClick={() => { handleButtonClick('C') }}>C</button>
          <button onClick={() => { handleButtonClick('<') }}>&lt;</button>
          <button onClick={() => { handleButtonClick('%') }}>%</button>
          <button onClick={() => { handleButtonClick('/') }}>/</button>
        </div>
        <div>
          <button onClick={() => { handleButtonClick('7') }}>7</button>
          <button onClick={() => { handleButtonClick('8') }}>8</button>
          <button onClick={() => { handleButtonClick('9') }}>9</button>
          <button onClick={() => { handleButtonClick('*') }}>*</button>
        </div>
        <div>
          <button onClick={() => { handleButtonClick('4') }}>4</button>
          <button onClick={() => { handleButtonClick('5') }}>5</button>
          <button onClick={() => { handleButtonClick('6') }}>6</button>
          <button onClick={() => { handleButtonClick('-') }}>-</button>
        </div>
        <div>
          <button onClick={() => { handleButtonClick('1') }}>1</button>
          <button onClick={() => { handleButtonClick('2') }}>2</button>
          <button onClick={() => { handleButtonClick('3') }}>3</button>
          <button onClick={() => { handleButtonClick('+') }}>+</button>
        </div>
        <div>
          <button onClick={() => { handleButtonClick('0') }}>0</button>
          <button onClick={() => { handleButtonClick('00') }}>00</button>
          <button onClick={() => { handleButtonClick('.') }}>.</button>
          <button onClick={() => { handleButtonClick('=') }}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
