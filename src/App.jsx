import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Form from './components/Form'
import AboutPage from './AboutPage'
import { Movies } from './pages/Movies/Movies'


const App = () => {
  return (
      <BrowserRouter>
          
          <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
              <Route path='/:id' element={<AboutPage/>}></Route>
              <Route path='/register' element={<Form/>}></Route>
              <Route path='/Movies' element={<Movies />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App


