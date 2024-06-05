import React from 'react'
import './Content.css';
import { useState } from 'react'
import Inputcontent from './Inputcontent';

const Content = () => {
    const [num,setNum]=useState('');
    function handlenum(e){
        let target=e.target.value;
        let val=num+target;
        console.log(val);
        setNum(val);
    }
    function result(e){
        setNum(eval(e.target.value));
    }
    
    function reset(e){
        setNum((e.target.value));
    }
  return (
    <div className='content'>
        
        <input type='text' value={num} className='input_val'></input>
        <div className='buttons'>
        
        <button onClick={handlenum} value='1'>1</button>
        <button onClick={handlenum} value='2'>2</button>
        <button onClick={handlenum} value='3'>3</button>
        <button onClick={handlenum} value='+'>ADD</button>
        <button onClick={handlenum} value='4'>4</button>
        <button onClick={handlenum} value='5'>5</button>
        <button onClick={handlenum} value='6'>6</button>
        <button onClick={handlenum} value='-'>SUB</button>
        <button onClick={handlenum} value='7'>7</button>
        <button onClick={handlenum} value='8'>8</button>
        <button onClick={handlenum} value='9'>9</button>
        <button onClick={handlenum} value='*'>MUL</button>
        <button onClick={handlenum} value='0'>0</button>
        <button onClick={handlenum} value='/'>DIV</button>
        <button onClick={reset} value=''>CLS</button>
        <button onClick={result} value={num}>=</button>
        </div>
    </div>
  )
}

export default Content