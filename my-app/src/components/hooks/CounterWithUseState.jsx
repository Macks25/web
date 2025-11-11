import React, {useState} from 'react'

function CounterWithUseState() {

    const [count, setCount] = useState(0);
    const [countStep2, setCountStep2] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log("Count incremented:", count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        console.log("Count decremented:", count - 1);
    }

    return (
        <div>
            <div>CounterWithUseState</div>
            <div>Count: {count}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}
export default CounterWithUseState