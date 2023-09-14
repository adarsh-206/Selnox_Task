import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='home-heading'>
                <h1>Welcome to Employee Management System </h1>
            </div>
            <div className='home-options'>
                <Link to="/registrationForm"><Button color="inherit">Add Employee</Button></Link>
                <Link to="/employeesTable"><Button color="inherit">Employee Details</Button></Link>
                <Link to="/dropdown"><Button color="inherit">Employee Dropdown</Button></Link>
            </div>
        </div>
    )
}

export default Home