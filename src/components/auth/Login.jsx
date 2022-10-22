import axios from 'axios';
import React, { useState } from 'react';
import Header from '../layout/Header';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4004/api/checkUsers', { username, password })
            .then((res) => {
                console.log(res.data)
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