import React from 'react';
import './Navbar.css'; // Import your custom CSS file for styling

const Navbar = ({ onPageChange }) => {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <nav className='navbar'>
            <div className='logo'>
                <span >TICHKULU & Sons</span>
            </div>
            <ul className='nav-links'>
                <li onClick={() => handlePageChange('home')}>Home</li>
                <li onClick={() => handlePageChange('about')}>About</li>
                <li onClick={() => handlePageChange('contact')}>Contact</li>
            </ul>
            <div className='auth-links'>
                <span className='Reg-link' onClick={() => handlePageChange('Reg')}>Register</span>
                <span className='login-link' onClick={() => handlePageChange('login')}>Login</span>
            </div>
        </nav>
    );
};

export default Navbar;
