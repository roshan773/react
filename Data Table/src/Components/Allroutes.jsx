import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Description from './Description'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/description/:id' element={<Description /> } />
    </Routes>
  )
}

export default Allroutes