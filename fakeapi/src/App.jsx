import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Store from './components/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Store />
    </>
  )
}

export default App
