import React, { useContext } from 'react'
import { LanguageChange } from './Context/Language'

const Content = () => {

    const {lang, setlang, togglelang, translate} = useContext(LanguageChange)

  return (
    <div>
        <h1>{translate[lang].welcome}</h1>
        <h2>{translate[lang].message}</h2>
    </div>
  )
}

export default Content