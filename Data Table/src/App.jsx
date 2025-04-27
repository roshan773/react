import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Components/Products'
import Allroutes from './Components/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Product /> */}
      <Allroutes />
    </>
  )
}

export default App
