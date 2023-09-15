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
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/employeeDetail' element={<EmployeeDetail />} />
          <Route path="/employeeDetail/:id" element={<AddEmployee />} />
          <Route path='/EmployeeDropdown' element={<EmployeeDrop />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
