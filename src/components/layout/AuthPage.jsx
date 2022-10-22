import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from '../About';
import './AuthPage.css'

const AuthPage = () => {

    return (
        <div>
            <header>App name</header>
            <main>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
                <Link to='/about'>
                    <button>About</button>
                </Link>
                <Routes>
                    <Route path='/about' element={<About />} />
                </Routes>
            </main>
            <div>

            </div>
        </div>
    )
};

export default AuthPage;