import React from "react";
import CounterWithUseState from "./CounterWithUseState.jsx";
import CounterWithUseEffect from "./CounterWithUseEffect.jsx";
import CounterWithUseRef from "./CounterWithUseRef.jsx";
import CounterWithoutHook from "./CounterWithoutHook.jsx";

export default function HooksContainer() {
    return (
        <div>
            <h2>Hooks Container</h2>
            <CounterWithoutHook />
            <CounterWithUseState />
            <CounterWithUseEffect />
            <CounterWithUseRef />
        </div>
    );
}