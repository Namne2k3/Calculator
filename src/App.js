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
      // console.log(calculate)
      setInput(e.target.value)
      setCalculate([...calculate].concat(e.target.value));
      setOperator(false); 
      setResult('')
    }
    
    const handleClickOperator = (e) => {
      if ( !operator ) {
        setCalculate([...calculate].concat(e.target.value));
        setOperator(true)
        setResult('')
      }
    } 
    const handleClickEqual = () => {
      let arrOperator = [];
      const numbers = [];
      const regexOpe = /^(\+|-|\*|\/|=|>|<|>=|<=|&|\||%|!|\^|\(|\))$/ ;
      const regexNum = /^[.?\d]+$/ ;
      const regexMulDiv = /\*|\//;
      
      if ( !calculate[calculate.length-1].match(regexOpe)) {
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
        if ( arrOperator.includes('*') || arrOperator.includes('/') ) {
          for ( let index = 0 ; index < arrOperator.length ; index ++ ) {
            if ( regexMulDiv.test(arrOperator[index]) ) {
              switch(arrOperator[index]) {
                case "*":
                  console.log(numbers); 
                  console.log(arrOperator); 
                  numbers[index] = Number(numbers[index]) * Number(numbers[index+1]);
                  numbers.splice(numbers.indexOf(numbers[index+1]),1);
                  arrOperator.splice(arrOperator.indexOf(arrOperator[index]),1)
                  break ;
                case "/":
                  numbers[index] = Number(numbers[index]) / Number(numbers[index+1]);
                  numbers.splice(numbers.indexOf(numbers[index+1]),1);
                  arrOperator.splice(arrOperator.indexOf(arrOperator[index]),1)
                  break ;
                default:
                  break ;
              }
            }
          }
        }
        console.log(arrOperator)
        console.log(numbers);
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
        if ( arrOperator.length === 0 ) {
          setResult(numbers[0])
        }
      }
    }

    const handleClickDelete = () => {
      calculate.pop();
      setCalculate([...calculate])
      setResult('')
    }

    const handleReset = () => {
      setInput('');
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
          <button onClick={handleClickDelete} value="def" id="def">Del</button>
          <button className='numpad' onClick={handleClickNumPad} value="1" id="one">1</button>
          <button className='numpad' onClick={handleClickNumPad} value="2" id="two">2</button>
          <button className='numpad' onClick={handleClickNumPad} value="3" id="three">3</button>
          <button className="operator" onClick={handleClickOperator} value="+" id="add">+</button>
          <button className='numpad' onClick={handleClickNumPad} value="4" id="four">4</button>
          <button className='numpad' onClick={handleClickNumPad} value="5" id="five">5</button>
          <button className='numpad' onClick={handleClickNumPad} value="6" id="six">6</button>
          <button className="operator" onClick={handleClickOperator} value="-" id="subtract">-</button>
          <button className='numpad' onClick={handleClickNumPad} value="7" id="seven">7</button>
          <button className='numpad' onClick={handleClickNumPad} value="8" id="eight">8</button>
          <button className='numpad' onClick={handleClickNumPad} value="9" id="nine">9</button>
          <button className="operator" onClick={handleClickOperator} value="*" id="multiply">x</button>
          <button className='numpad' onClick={handleClickNumPad} value="0" id="zero">0</button>
          <button onClick={handleClickNumPad} value="." id="decimal">.</button>
          <button onClick={handleClickEqual} value="=" id="equals">=</button>
          <button className="operator" onClick={handleClickOperator} value="/" id="divide">/</button>
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
        <div id="author">
          <h1>Created by NamNe</h1>
          <div id="info">
            <div className="social" id="facebook" >
              <a href="https://www.facebook.com/namng1111/" id="fb_link">
                <i className="fa-brands fa-facebook fa-beat"></i>
                Facebook
              </a>
            </div>
            <div className="social" id="github" >
              <a href="https://www.instagram.com/namng_113/" id="fb_link">
                <i className="fa-brands fa-instagram fa-beat"></i>
                Instagram
              </a>
            </div>
            <div className="social" id="instagram" >
              <a href="https://github.com/Namne2k3" id="fb_link">
                <i className="fa-brands fa-github fa-beat"></i>
                Github
              </a>
            </div>
          </div>
        </div>
        <Calculator />

      </div>
    );
  }

  export default App;
