import React, {useState, useEffect, use} from 'react'

function CounterWithUseEffect() {

    const [count, setCount] = useState(0);
    //const [data, setData] = useState(null);

    const increment = () => {
        setCount(count + 1);
        console.log("Count incremented:", count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        console.log("Count decremented:", count - 1);
    }

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Document title updated");
    }, [count]);

    return (
        <div>
            <div>CounterWithUseEffect</div>
            <div>Count: {count}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}
export default CounterWithUseEffect