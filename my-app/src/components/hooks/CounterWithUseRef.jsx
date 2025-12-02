import React, {useState, useRef} from 'react'

function CounterWithUseRef() {

    const [count, setCount] = useState(0);
    const buttonClickRef = useRef(0);
    let clickCount = 0;

    const increment = () => {
        setCount(count + 1);
        buttonClickRef.current += 1;
        clickCount += 1;
        console.log("Count incremented:", count + 1);
        console.log("Button clicked:", clickCount);
    }
    const decrement = () => {
        setCount(count - 1);
        buttonClickRef.current += 1;
        clickCount += 1;
        console.log("Count decremented:", count - 1);
        console.log("Button clicked:", clickCount);
    }

    return (
        <div>
            <div>CounterWithUseRef</div>
            <div>Count: {count}</div>
            <div>Button clicked: {buttonClickRef.current} times</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>ifiw
        </div>
    )
}
export default CounterWithUseRef