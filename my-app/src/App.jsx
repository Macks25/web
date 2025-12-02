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
import HooksContainer from './components/hooks/HooksContainer.jsx'
import ThemeComponent from './components/ThemeComponent.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'



function App() {
  const [count, setCount] = useState(0)


    return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<SimpleFunctionalComponent students={students} />} />
            <Route path="/class" element={<SimpleClassComponent />} />
            <Route path="/hooks" element={<HooksContainer />} />
            <Route path="/theme" element={<ThemeComponent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
