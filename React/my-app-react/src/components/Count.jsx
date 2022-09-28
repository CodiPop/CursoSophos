import React, {useState} from 'react'
import "./Styles/UserCount.css"



const Count = () => {

    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        setCount(count+1);
    }
    const handleSubstract = () =>{
        setCount(count-1);
    }
    const handleReset = () =>{
        setCount(count - count);
    }
  return (
    <div className='count'>
        <h2>Contador de usuarios</h2>
        <h3>{count}</h3>
        <h3>{}</h3>
        <button onClick={handleAdd}>Aumentar</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>Disminuir</button>
    </div>
  )
}

export default Count