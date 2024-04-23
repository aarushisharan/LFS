import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './sigunp'
import Login from './Login'
import Home from './Home'
import LostForm from './LostForm'
import LostItems from './LostItems'
import FoundForm from './FoundForm'
import FoundItems from './FoundItems'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= '/register' element={<Signup/>}></Route>
      <Route path= '/login' element={<Login/>}></Route>
      <Route path= '/home' element={<Home />}></Route>
      <Route path= '/lostform' element={<LostForm />}></Route>
      <Route path= '/lostitems' element={<LostItems />}></Route>
      <Route path= '/foundform' element={<FoundForm />}></Route>
      <Route path= '/founditems' element={<FoundItems />}></Route>



    </Routes>
    </BrowserRouter>
    
  )
}

export default App
