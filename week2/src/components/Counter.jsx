import React, {useState} from "react";

const Counter =() =>{
    const[count,setCount] =useState(0);
    
    const increase =()=>{
        setCount(count +1);
    };

    const decrease =()=>{
        setCount(count-1);
    };


return (
    <div>
        <p>{count}</p>
        <button onClick={increase}>+1</button>
        <button onClick ={decrease}>-1</button>
    </div>
);

};

export default Counter; 
//counter componet를 export하여 다른 파일에서 사용할 수 있도록 만듬 