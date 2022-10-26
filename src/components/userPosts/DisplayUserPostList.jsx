import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DisplayUserPostList = () => {
    const [title, setTitle] = useState([]);


    const currentId = localStorage.getItem('user_id');

    const getUserList = () => {
        axios
            .get('http://localhost:4004/api/getList', { params: { currentId } })
            .then((res) => {
                setTitle([...title, res.data.camp_entry_title])
            })
    }

    // useEffect(() => {
    //     getUserList()
    // }, [])

    return (
        <div>
            <h3>Your posts:</h3>
            {title}
        </div>
    )
}

export default DisplayUserPostList