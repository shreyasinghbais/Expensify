import React from 'react';
import logo from './expensify-logo.png';

const Header = () => {
return (
    <div className='header'>
        <h1 className='title'>Track your Expenses with Expensify</h1>
        <img src={logo} alt='logo' className='logo'></img>
    </div>
)
}

export default Header
