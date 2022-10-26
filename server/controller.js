require('dotenv').config();
const Sequelize = require('sequelize');

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const createUser = (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    sequelize.query(`
    SELECT * FROM user_test WHERE LOWER(user_username) = '${username.toLowerCase()}';
    `)
        .then((dbResult) => {
            if (dbResult[0].length === 0) {
                sequelize.query(`
                INSERT INTO user_test (user_name, user_username, user_password)
                VALUES ('${name}', '${username}', '${password}') RETURNING *;
                `)
                    .then((newUserResult) => {
                        console.log(newUserResult);
                        res.status(200).send(newUserResult[0][0]);
                        return;
                    })
            } else {
                res.status(200).send(dbResult[0][0]);
                return;
            }
        })
}

const checkUsers = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    sequelize.query(`
    SELECT * FROM user_test WHERE LOWER(user_username) = '${username.toLowerCase()}' AND LOWER(user_password) = '${password.toLowerCase()}';
    `)
        .then((dbResult) => {
            if (dbResult[0].length === 0) {
                res.status(200).send('')
            }
            res.status(200).send(dbResult[0][0])
        })
}

const getUserName = (req, res) => {
    const userId = req.query.currentId;

    sequelize.query(`
    SELECT * FROM user_test WHERE user_id = ${userId}
    `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0][0])
        })
}

const newPost = (req, res) => {
    const title = req.body.title;
    const pictureUrl = req.body.pictureUrl;
    const coordinates = req.body.coordinates;
    const comment = req.body.comment;
    const currentId = req.body.currentId;

    sequelize.query(`
    INSERT INTO user_post (camp_entry_title, camp_entry_url, camp_entry_comment, camp_entry_coordinates, user_id)
    VALUES ('${title}', '${pictureUrl}', '${comment}', '${coordinates}', '${currentId}') RETURNING *;
    `)
        .then((newDbPostResult) => {
            res.status(200).send(newDbPostResult[0][0])
        })

}

const getList = (req, res) => {
    const currentId = req.query.currentId

    sequelize.query(`
    SELECT * FROM user_post WHERE user_id = ${currentId}
    `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0][0])
        })
}


module.exports = { createUser, checkUsers, getUserName, newPost, getList }