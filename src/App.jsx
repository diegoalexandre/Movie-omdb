import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import MovieDetails from './pages/Details'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:imdbID' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
