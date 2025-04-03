import { createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './Components/Mainpage'

export const data = createContext();

function App() {

  const name = "Roshan"

  return (
    <data.Provider value={name}>
      <Mainpage />
    </data.Provider>
  )
}

export default App
