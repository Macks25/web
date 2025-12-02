import React from 'react'

function CounterWithoutHook() {

    let count = 0;

    const increment = () => {
        count += 1;
        console.log("Count incremented:", count);
    }
    const decrement = () => {
        count -= 1;
        console.log("Count decremented:", count);
    }

    return (
        <div>
            <div>CounterWithoutHook</div>
            <div>Count: {count}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}
export default CounterWithoutHook