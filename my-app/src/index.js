import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';


// function Room() {
//   const [isBright, setIsBright] = React.useState(true);
//   const handlechange = () => {
//     setIsBright(!isBright);
//   }
  
//   return(
//     <div>My room is {isBright ? "Bright" : "Dark"}
//     <button onClick = {handlechange}>Change</button></div>
//   )
//   }
  function Theme(){

    const getMode = () =>{
      return JSON.parse(localStorage.getItem("Mode") || false)
     }
    const [dark,setMode]= React.useState(getMode());
    
    React.useEffect(()=>{
      localStorage.setItem("Mode",JSON.stringify(dark))
    },[dark])
    const [temperature, settemperature] = React.useState(39);
    function increment() {
      settemperature(prevState => prevState + 1);
    }
    function decrement() {
      settemperature(prevState => prevState - 1);
    }
    return<div className={dark ?"app dark-mode" : "app"}>
      <div className="nav">
         <label class="switch">
         <input type="checkbox" 
         checked={dark}
         onChange={()=>setMode(!dark)}
         />
         <span class="slider round"></span>
         </label>
      </div>
      <div className="content">
        <h1>{dark ? "Dark mode is on" : "Light mode is on"}</h1>
        <p style={{fontSize:"20px"}}>want to see magic? press toggle button</p>
        <div>
          <h1>
          Temperature is {temperature} 
          </h1>
          <br />
          <button className ="increment" onClick={increment}>
            +
          </button>
          <button className ="decrement" onClick={decrement}>
            -
          </button>
        </div>
      </div>
      
    </div>
  
  }
  
  
  ReactDOM.render(<Theme/>,document.querySelector('#root'));


reportWebVitals();
