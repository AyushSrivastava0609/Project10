import React, { useState } from 'react'
import ParentContainer from './Components/ParentContainer'
import Display from './Components/Display'
import Buttons from './Components/Buttons'
export default function App() {
  const [data,setData]=useState('');
  function handleClick(val){
    if(val==='='){
      setData(eval(data)+'');
    }else if(val==='Clear'){
      setData("");
    }else if(val==='<x'){
      setData(data.slice(0,-1));
    }  else{
      setData(data+val);
    }
  }
  return (
    <ParentContainer>
    <Display data={data}/>
    <Buttons btnClick={handleClick}/>
    </ParentContainer>
  )
}
