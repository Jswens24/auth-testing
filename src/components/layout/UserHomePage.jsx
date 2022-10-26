import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DisplayUserPostList from '../userPosts/DisplayUserPostList';
import UserPostForm from '../userPosts/UserPostForm';
import Header from './Header';
import './UserHomePage.css'

const UserHomePage = () => {
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear()
        navigate('/');
    };

    const currentId = localStorage.getItem('user_id');

    const getUserName = () => {
        axios
            .get('http://localhost:4004/api/getUserName', { params: { currentId } })
            .then((res) => {
                setName(res.data.user_name)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserName()
    }, [])


    return (
        <div>
            <nav>
                <h1>App Name</h1>
                <ul>
                    <button onClick={handleLogout}>Logout</button>
                </ul>
            </nav>
            <h2>Welcome back {name}!</h2>
            <div className='list-add-new-contain'>
                <div className="list">
                    <DisplayUserPostList />
                </div>
                <Link to='/newEntry'>
                    <button>Add new entry</button>
                </Link>

            </div>
        </div>
    )
};

export default UserHomePage;