import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Project from '../Pages/Project'
import Login from '../Pages/Login'
import Description from '../Pages/Description'
import PrivatePage from '../Pages/Privatepage'
import Product from '../Pages/Product'

const AllROutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={
        <PrivatePage>
          <Product />
        </PrivatePage>
      } />
      <Route path='/project' element={<Project />} />
      <Route path='/description' element={<Description />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AllROutes