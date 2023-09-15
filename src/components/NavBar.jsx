import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

const NavBar = () => {
    // State for handling the mobile menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#003153' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/"><span style={{ color: 'white' }}>Selnox</span></Link>
                </Typography>

                {/* Mobile Menu Button */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    sx={{
                        display: { xs: 'block', sm: 'none' }, // Show on xs (extra small) screens, hide on sm (small) screens and above
                    }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Desktop Menu Links */}
                <div className="desktop-menu">
                    <Link to="/addEmployee" className="nav-link-button">
                        <Button color="inherit">Add Employee</Button>
                    </Link>
                    <Link to="/employeeDetail" className="nav-link-button">
                        <Button color="inherit">Employee Details</Button>
                    </Link>
                    <Link to="/employeeDropdown" className="nav-link-button">
                        <Button color="inherit">Employee Dropdown</Button>
                    </Link>
                </div>

                {/* Mobile Menu (Dropdown) */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{ display: { xs: 'block', sm: 'none' } }} // Show on xs (extra small) screens, hide on sm (small) screens and above
                >
                    <Link to="/addEmployee" onClick={handleMenuClose}>Add User</Link>
                    <Link to="/employeeDetail" onClick={handleMenuClose}>Employee Details</Link>
                    <Link to="/employeeDropdown" onClick={handleMenuClose}>Employee Dropdown</Link>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;