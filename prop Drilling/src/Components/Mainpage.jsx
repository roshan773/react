import React from 'react'
import Content from './Content'

const Mainpage = () => {

    const name = "Roshan Pakhre"
  return (
    <div>
        <h1>THis is mainpage</h1>
        <Content data = {name}/>
    </div>
  )
}

export default Mainpage