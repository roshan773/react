import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Content'
import { LanguageChange } from './Context/Language'

function App() {

  const {lang, setlang, togglelang, translate} = useContext(LanguageChange)
  console.log(lang)

  return (
    <>
      <Content />
      <button onClick={togglelang}>{translate[lang].switch}</button>
    </>
  )
}

export default App
