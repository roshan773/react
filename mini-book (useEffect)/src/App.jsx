import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchDataComponent from './component/FetchDataComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchDataComponent />
    </>
  )
}

export default App
