import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav>
                <h1>App Name</h1>
                <ul>
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                    <Link to='/about'>
                        <p>About</p>
                    </Link>
                </ul>
            </nav>
        </div>
    )
};

export default Header;