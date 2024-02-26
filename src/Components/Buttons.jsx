import React from 'react'
import styles from './Buttons.module.css'
export default function Buttons({btnClick}) {
    let btn=['1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/','<x','Clear'];
  return (
    <div>
      {btn.map((val,index)=><button className={val==='Clear'?styles.clearbtn:styles.calcBtn} key={index} onClick={()=>btnClick(val)}>{val}</button>)}
    </div>
  )
}
