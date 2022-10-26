import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPostForm = () => {
    const [title, setTitle] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [comment, setComment] = useState('');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear()
        navigate('/');
    };

    const currentId = localStorage.getItem('user_id');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length === 0 || pictureUrl.length === 0 || coordinates.length === 0 || comment.length === 0) {
            alert('please enter all all fields')
        } else {
            axios
                .post('http://localhost:4004/api/post', { title, pictureUrl, coordinates, comment, currentId })
                .then((res) => {
                    console.log(res.data)
                    navigate(`/userHomePage/${currentId}`)
                })
        }

    }


    return (
        <div>
            <nav>
                <h1>App Name</h1>
                <ul>
                    <button onClick={handleLogout}>Logout</button>
                </ul>
            </nav>
            <h2>New entry:</h2>
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input
                        type='text'
                        placeholder='name of place'
                        onChange={e => setTitle(e.target.value)}
                    />
                </label>
                <label>picture url
                    <input
                        type='text'
                        placeholder='picture url'
                        onChange={e => setPictureUrl(e.target.value)}
                    />
                </label>
                <label>coordinates
                    <input
                        type='text'
                        placeholder='coordinates'
                        onChange={e => setCoordinates(e.target.value)}
                    />
                </label>
                <label>comments
                    <input
                        type='text'
                        placeholder='comments'
                        onChange={e => setComment(e.target.value)}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};

export default UserPostForm;