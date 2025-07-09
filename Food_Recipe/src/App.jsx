import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Meal } from './Componenst/Meal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Meal />
    </>
  )
}

export default App
