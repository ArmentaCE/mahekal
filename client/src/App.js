import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>DASHBOARD</h1>}/>
        <Route path='/login' element={<h1>LOGIN</h1>}/>
        <Route path='/register' element={<h1>REGISTER</h1>}/>
        <Route path='/ticket/:id' element={<h1>TICKET</h1>}/>
        <Route path='/profile' element={<h1>PROFILE</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App