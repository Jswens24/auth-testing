import axios from 'axios';
import React, { useState } from 'react';
import Header from '../layout/Header';
import './Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        console.log({ name, username, password })
    }

    const handleRegister = () => {
        axios
            .post('http://localhost:4004/api/user', { name, username, password })
            .then((res) => {
                console.log('sent to database')
            })
            .catch(err => console.log(err))
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
                            placeholder='enter a username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label>Password:
                        <input
                            type='password'
                            placeholder='enter a password'
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