import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AddEmployee from './components/AddEmployee';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeDrop from './components/EmployeeDrop';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrationForm' element={<AddEmployee />} />
          <Route path='/employeesTable' element={<EmployeeDetail />} />
          <Route path="/employeesTable/:id" element={<AddEmployee />} />
          <Route path='/dropdown' element={<EmployeeDrop />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
