import React from 'react'
import { useCounter } from '../hooks/useCount';
import "./Styles/UserCount.css"



const Count = () => {

 
    const {count,handleAdd,handleSubstract,handleReset} = useCounter(0)
    
 
  return (
    <div className='count'>
        <h2>Contador de usuarios</h2>
        <h3>{count}</h3>
        <button onClick={handleAdd}>Aumentar</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>Disminuir</button>
    </div>
  )
}

export default Count