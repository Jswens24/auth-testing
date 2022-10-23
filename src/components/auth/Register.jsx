import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import './Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        if (name.length === 0 || username.length === 0 || password.length === 0) {
            alert('INVALID NAME, USERNAME, PASSWORD')
        } else {
            axios
                .post('http://localhost:4004/api/user', { name, username, password })
                .then((res) => {
                    console.log('sent to database')
                    console.log(res.data)
                    if (res.data) {
                        localStorage.setItem('user_id', res.data.user_id)
                        const currentId = localStorage.getItem('user_id');
                        {
                            navigate(`/userHomePage/${currentId}`)
                        }
                    } else {
                        alert('INVALID NAME, USERNAME, PASSWORD')
                    }
                })
                .catch(err => console.log(err))
        }
    }


    return (
        <div>
            <Header />
            <form>
                <div className='form-div'>
                    <label>Name:
                        <input
                            type='text'
                            placeholder='enter your name'
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
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
                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
};

export default Register;