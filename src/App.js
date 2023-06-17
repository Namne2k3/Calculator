  // import logo from './logo.svg';
  import { useState } from 'react';
  import './App.css';

  function Calculator() {

    const [input,setInput] = useState();
    const [number,setNumber] = useState([]);
    const [calculate,setCalculate] = useState([]);
    const [result,setResult] = useState("");
    const [operator,setOperator] = useState(true);

    const handleClickNumPad = (e) => {
      console.log(e.target.value)
      console.log(calculate)
      setInput(e.target.value)
      setCalculate([...calculate].concat(e.target.value));
      setOperator(false); 
    }
    
    const handleClickOperator = (e) => {
      if ( !operator ) {
        setCalculate([...calculate].concat(e.target.value));
        setOperator(true)
      }
    } 
    
    const handleClickEqual = (e) => {
      let arrOperator = [];
      const numbers = [ ];
      const regexOpe = /^(\+|-|\*|\/|=|>|<|>=|<=|&|\||%|!|\^|\(|\))$/ ;
      const regexNum = /^[.?\d]+$/;

      console.log(calculate)

      let newArrNum = '';
      for ( let i = 0 ; i < calculate.length ; i ++ ) {
        if ( calculate[i].match(regexNum) ) {
          newArrNum += calculate[i] ;
        } 
        if ( i === calculate.length - 1 ) {
          numbers.push(newArrNum);

        }
        if ( calculate[i].match(regexOpe)) {
            arrOperator.push(calculate[i])
            numbers.push(newArrNum)
            newArrNum = '';
        }
      }
      console.log(numbers)
      console.log(arrOperator)

      while ( arrOperator.length !== 0 ) {
        switch( arrOperator[0] ) {
          case "+":
            numbers[1] = Number(numbers[0]) + Number(numbers[1]); 
            numbers.shift() ;
            arrOperator.shift() ;
            setResult(numbers[0])
            break;
          case "-":
            numbers[1] = Number(numbers[0]) - Number(numbers[1]); 
            numbers.shift() ;
            arrOperator.shift() ;
            setResult(numbers[0])
            break;
          case "*":
            numbers[1] = Number(numbers[0]) * Number(numbers[1]); 
            numbers.shift() ;
            arrOperator.shift() ;
            setResult(numbers[0])
            break;
          case "/":
            numbers[1] = Number(numbers[0]) / Number(numbers[1]); 
            numbers.shift() ;
            arrOperator.shift() ;
            setResult(numbers[0])
            break;
          default:
            break ;
        }
      }
    }

    const handleReset = () => {
      setInput('0');
      setCalculate('');
      setResult('')
    }

    return (
      <div id="calculator">
        <div id="display">
          <div id="display_small">
            {calculate} 
          </div>
          <div id="display_large">
            {result}
          </div>
        </div>
        <div id="numpad">
          <button onClick={handleReset} value="AC" id="clear">AC</button>
          <button onClick={handleClickOperator} value="/" id="divide">/</button>
          <button onClick={handleClickOperator} value="*" id="multiply">x</button>
          <button onClick={handleClickNumPad} value="7" id="seven">7</button>
          <button onClick={handleClickNumPad} value="8" id="eight">8</button>
          <button onClick={handleClickNumPad} value="9" id="nine">9</button>
          <button onClick={handleClickOperator} value="-" id="subtract">-</button>
          <button onClick={handleClickNumPad} value="4" id="four">4</button>
          <button onClick={handleClickNumPad} value="5" id="five">5</button>
          <button onClick={handleClickNumPad} value="6" id="six">6</button>
          <button onClick={handleClickOperator} value="+" id="add">+</button>
          <button onClick={handleClickNumPad} value="1" id="one">1</button>
          <button onClick={handleClickNumPad} value="2" id="two">2</button>
          <button onClick={handleClickNumPad} value="3" id="three">3</button>
          <button onClick={handleClickNumPad} value="0" id="zero">0</button>
          <button onClick={handleClickNumPad} value="." id="decimal">.</button>
          <button onClick={handleClickEqual} value="=" id="equals">=</button>
        </div>
      </div>
    );
  }

  function App() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <h3>Created by Namne</h3>
        <Calculator />

      </div>
    );
  }

  export default App;
