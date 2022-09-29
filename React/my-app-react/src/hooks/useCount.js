import {useState} from "react";


export const useCounter = (initialState) =>{

    const [count, setCount] = useState(initialState);
    
    const handleAdd = () =>{
        setCount(count+1);
    };

    const handleSubstract = () =>{
        setCount(count-1);
    };

    const handleReset = () =>{
        setCount(count - count);
    };

    return{
        count,
        handleAdd,
        handleSubstract,
        handleReset
    };
};