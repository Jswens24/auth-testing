require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const { createUser, checkUsers } = require('./controller')


app.post('/api/user', createUser);

app.get('/api/checkUsers', checkUsers);






app.listen(4004, () => console.log('Vibin on 4004'));