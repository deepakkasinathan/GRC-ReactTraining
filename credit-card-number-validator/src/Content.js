import React from 'react'
import validator from 'validator'
import './Content.css'
import {useState} from 'react'
import { MdOutlineBackspace } from "react-icons/md";

const Content = () => {

  const [num,setNum]=useState('');
  const [err,setErr]=useState('');
  const [color,setColor]=useState('red');
  function handlenum(e){
      let target=e.target.value;
      let val=num+target;
      console.log(val);
      setNum(val);
      cardvalid();
  }
  function handledelete(e){
   
    setNum((num.substring(0,num.length-1)));
    cardvalid();
}
 
function cardvalid(){
  if(validator.isCreditCard(num)){
  setErr("Card Number is valid");
  setColor("green");
  }
  else{
  setErr('Card  Number is invalid');
  setColor("red");
  }

}
function reset(){
  setNum('');
  setErr('');
}
let getButtonsUsingMap = () => {
  const array = [1, 2, 3 ,4, 5,6,7,8,9,0]

  return array.map((number) => {
    return <button onClick={handlenum} value={number}>{number}</button>
  })
}
  return (
    <div className='content'>
        
        <input type='text' value={num} className='input_val' readonly></input>
        <span style={{color: color}}>{err}</span>
        <div className='buttons'>
        {getButtonsUsingMap()}
        <button onClick={handledelete}><MdOutlineBackspace /></button>
        <button onClick={reset} value=''>Clear</button>
        
        </div>
    </div>
  )
}

export default Content