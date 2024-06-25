import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import Register from './page/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'
import AdminProtected from './share/AdminProtected'
import Dashboard from './page/Dashboard'

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin/dashboard' element={<AdminProtected compo={<Dashboard />} />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App