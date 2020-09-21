const express = require('express');
const sha256 = require('crypto-js/sha256');
const data = require('./data');



const port = 3001;
const authUser = {
    userName: 'admin',
    password: '111',
    token: 'gfhfy646Ghhgg%77hGcf$5F',
};

const app = express();
app.use(express.json());

app.post('/login', (request, response) => {
    if (request.body.userName === sha256(authUser.userName).toString() &&
        request.body.password === sha256(authUser.password).toString()){
        const userProfile = {
            userName: authUser.userName,
            token: authUser.token,
        };
        response.send(JSON.stringify(userProfile));
    } else {
        const message = 'Неверно указано имя или пароль';
        response.send(JSON.stringify({message}));
    }
});

app.get('/user', (request, response) => {
    if (request.headers.authorization === authUser.token){
        const userProfile = {
            userName: authUser.userName,
            token: authUser.token,
        };
        response.send(JSON.stringify(userProfile));
    } else {
        const message = 'Не корректный токен';
        request.send(JSON.stringify({message}));
    }
});

app.get('/contacts', (request, response) => {
    if (request.headers.authorization === authUser.token){
        response.send(data.getContacts());
    } else {
        const message = 'Не корректный токен';
        request.send(JSON.stringify({message}));
    }
});

app.delete('/contacts', (request, response) => {
    if (request.headers.authorization === authUser.token){
        if (data.deleteContact(request.body.id)) {
            response.sendStatus(200);
        } else {
            response.sendStatus(500);
        }
    } else {
        const message = 'Не корректный токен';
        request.send(JSON.stringify({message}));
    }
});

app.post('/contacts', (request, response) => {
    if (request.headers.authorization === authUser.token){
        if (data.saveContact(request.body)) {
            response.sendStatus(200);
        } else {
            response.sendStatus(500);
        }
    } else {
        const message = 'Не корректный токен';
        request.send(JSON.stringify({message}));
    }
});

app.put('/contacts', (request, response) => {
    if (request.headers.authorization === authUser.token){
        if (data.saveContact(request.body)) {
            response.sendStatus(200);
        } else {
            response.sendStatus(500);
        }
    } else {
        const message = 'Не корректный токен';
        request.send(JSON.stringify({message}));
    }
});


app.listen(port);
console.log('Сервер запущен');