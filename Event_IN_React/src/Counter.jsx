import { useState } from "react";

export default function Counter(){
    let [count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count+1);
        console.log(count);
    }
    function handleDecrement(){
        setCount(count-1);
        console.log(count);
    }

    let [color,setColor] = useState("white");

    function handleColor(){
        let f = Math.floor(Math.random()*255);
        let s = Math.floor(Math.random()*255);
        let t = Math.floor(Math.random()*255);
        setColor(`rgb(${f},${s},${t})`);
    }

    return (
        <div className="Counter" style={{textAlign:"center",backgroundColor:color}}>
        <h1>Counter App</h1>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>count+1</button>
        <br />
        <br />
        <button onClick={handleDecrement}>Count-1</button>
        <br /><br />
        <button onClick={handleColor}>changeColor</button>
        </div>
    )
}