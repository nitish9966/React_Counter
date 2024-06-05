import {useState} from 'react';
import style from './Counter.module.css'

function Counter(){

    const [count,setCount]=useState(0);

    const Increment=()=>{
        setCount(count+1);
    }

    const Decrement=()=>{
        setCount(count-1);
    }

    const Reset=()=>{
        setCount(0);
    }

    return(
        <>
        <h2 className={style.count}>{count}</h2>
        <div className={style.buttons}>
        <button onClick={Decrement} className={style.b1}>-</button>
        <button onClick={Reset} className={style.b2}>Reset</button>
        <button onClick={Increment} className={style.b3}>+</button>
        </div>
        </>
    );
}

export default Counter;