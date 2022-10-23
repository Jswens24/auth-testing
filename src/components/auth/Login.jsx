import axios from 'axios';
import React, { useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import UserHomePage from '../layout/UserHomePage';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();



    const handleSignIn = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4004/api/checkUsers', { username, password })
            .then((res) => {
                // console.log(res.data.user_name)
                // console.log(Boolean(res.data))
                if (res.data) {
                    localStorage.setItem('user_id', res.data.user_id)
                    const currentId = localStorage.getItem('user_id');
                    {
                        navigate(`/userHomePage/${currentId}`)
                    }
                } else {
                    alert('USERNAME OR PASSWORD INCORRECT')
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Header />
            <form>
                <div className="form-div">
                    <label>Username:
                        <input
                            type='text'
                            placeholder='enter username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Password:
                        <input
                            type='password'
                            placeholder='enter password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button onClick={handleSignIn}>Sign in</button>
            </form>
        </div>
    )
};

export default Login;