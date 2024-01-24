import React, { useState } from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  const [isOn, setIsOn]=useState();

  return (
    <div className={isOn?styles.isOn:styles.isOff}onClick={()=>{setIsOn(!isOn);}}>
         Sendar
    </div>
  )
}