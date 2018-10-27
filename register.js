const express = require('express');
const router = express.Router();

const templete = require('./templete.js');
const navigation = require('./navigation.js');
const fs = require('fs');
const app = express();

var data = fs.readFileSync('./user.json');
var users = JSON.parse(data);

router.get('/reg', (req, res) => {
    console.log('register page')
    var form =
        `
    <div>
        <form action="/account/reg_prog" method="post" >
            <div>
                <lable>User Id</lable>
                <input name="userId" type="text" >
            </div>
            <div>
                <lable>Passowrd</lable>
                <input name="password" type="text" >
            </div>
            <div>
                <lable>Email</lable>
                <input name="email" type="text" >
            </div>
            <div>
                <lable>User Name</lable>
                <input name="userName" type="text" >
            </div>
            <div>
                <input type="submit">
            </div>
        </form>
    </div>
    `
    var html = templete('reg', form, 'reg');
    console.log('post');
    res.send(html);

});

router.post('/reg_prog', (req, res) => {
    var data = req.body;
    console.log(req.body);
    var userId = req.body.userId;
    var password = data.password;
    var email = data.email;
    var userName = data.userName;
    var anUser = { userId, password, email, userName };
    console.log(users);
    users.push(anUser);
    console.log('before parsed');
    var dataStr = JSON.stringify(users, null, 2);
    console.log('parsed');
    fs.writeFile('user.json', dataStr, (err) => {
        console.log('added a user to user.json');
        res.redirect('/');
    })
})

router.get('/login', (req, res) => {
    var loginForm = 
    `<form method="post" action="/account/login_prog">
    <div>
        <label>User Id</label>
        <input type="text" name="userId" />
    </div>

    <div>
        <label>User Password</label>
        <input type="text" name="password" />
    </div>
    <div>
        <input type="submit" />
    </div>
</form>`;
    var html = templete('login', loginForm, 'login');
    res.send(html);
})

router.post('/login_prog', (req, res) => {
    return new Promise((resolve, reject) => {
        var id = req.body.userId;
        var pwd = req.body.password;

        for (user in users) {
            if (id == user.userId && pwd == user.password) {
                res.send(user);
            }
        }
    })
})

module.exports = router;