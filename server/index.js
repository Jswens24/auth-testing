require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const { createUser, checkUsers, getUserName, newPost, getList } = require('./controller')


app.post('/api/user', createUser);
app.post('/api/checkUsers', checkUsers);
app.post('/api/post', newPost)


app.get('/api/getUserName', getUserName);
app.get('/api/getList', getList)







app.listen(4004, () => console.log('Vibin on 4004'));