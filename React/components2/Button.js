import React, { useState } from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  const [isOn, setIsOn]=useState();

  return (
    <div className={isOn?styles.isOn:styles.isOff} 
    onClick={()=>{
      
      setIsOn(!isOn);
    }}>{props.name} is {props.age} years old and is {isOn?"On":"Off"}</div>
  )
}


/*
<Button name="hans" age="18"/>
        <Button name = "sepp" age ="21"/>
        <Button name= "paul" age = "14"/>
        hallo
        <Person name="Finn" description="Supder Coder"/>
        <Person name="Hannes" description="Supder Programmierer"/>
        <Person name="Sude" description="Supder Coder"/>
*/