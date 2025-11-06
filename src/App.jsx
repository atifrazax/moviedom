// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movie from './pages/Movie'
import { Nav } from './components/Nav'
import Features from './pages/Features'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:id' element={<Movie />}></Route>
          <Route path='/features' element={<Features />}></Route>
          <Route path='*' element={<NotFound /> }></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
