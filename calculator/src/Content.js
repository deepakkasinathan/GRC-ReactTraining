import React from 'react'
import './Content.css';
import { useState } from 'react'
const Content = () => {
    const [val1,setval1]=useState('');
    function handleVal1(e){
        setval1(e.target.value);
    }
    const [val2,setval2]=useState('');
    function handleVal2(e){
        setval2(e.target.value);
    }
    const [res,setres]=useState(null);
    function sum(){
        setres(parseInt(val1)+parseInt(val2));
        console.log(res);
        setDisplay('block');
    }
    function sub(){
        setres(parseInt(val1)-parseInt(val2));
        setDisplay('block');

        console.log(res);
    }
    function mul(){
        setres(parseInt(val1)*parseInt(val2));
        setDisplay('block');

        console.log(res);
    }
    function div(){
        setres(parseInt(val1)/parseInt(val2));
        setDisplay('block');

        console.log(res);
    }
    const[display,setDisplay]=useState('none');

  return (
    <div className='cont'>

        <label ></label>
        <input type='text' 
        className='value_1'
        value={val1}
        onChange={handleVal1}
        ></input>
        <input type='text' 
        className='value_2'
         value={val2}
         onChange={handleVal2}
        ></input>
        <span className='result'
       style={ {display:display}}
        >The result of 2 values are {res}</span>
        <button onClick={sum}>Add</button>
        <button onClick={sub}>Sub</button>
        <button onClick={mul}>Mul</button>
        <button onClick={div}>Div</button>
    </div>
  )
}

export default Content