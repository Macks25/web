  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponent from './components/SimpleClassComponent.jsx'
import SimpleFunctionalComponent from './components/SimpleFunctionalComponents.jsx'

function App() {
  const [count, setCount] = useState(0)
  const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 23 }
  ];

    return (
    <>
      <SimpleFunctionalComponent students={students} />
    </>
  )
}

export default App
