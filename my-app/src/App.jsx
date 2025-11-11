  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponent from './components/SimpleClassComponent.jsx'
import SimpleFunctionalComponent from './components/SimpleFunctionalComponents.jsx'
import { students } from './components/helper.js'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import CounterWithoutHook from './components/hooks/CounterWithoutHook.jsx'
import CounterWithUseState from './components/hooks/CounterWithUseState.jsx'
import CounterWithUseEffect from './components/hooks/CounterWithUseEffect.jsx'
import CounterWithUseRef from './components/hooks/CounterWithUseRef.jsx'



function App() {
  const [count, setCount] = useState(0)


    return (
    <>
      <BrowserRouter>


        <Navbar />
        <CounterWithoutHook />
        <CounterWithUseState />
        <CounterWithUseEffect />
        <CounterWithUseRef />
        <Routes>
          <Route path="/" element={<SimpleFunctionalComponent students={students} />} />
          <Route path="/class" element={<SimpleClassComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
