const express = require('express');
const router = express.Router();
const templete = require('./templete.js');
var exSession = require('express-session');
const fs = require('fs');   
const app = express();
app.use(exSession({secret:"asdadavqeq",resave:false,saveUninitialized:true})); 

var data = fs.readFileSync('./user.json');
var users = JSON.parse(data);
router.get('/reg', (req, res) => {
    var sess = req.session;
    if(sess.user){
        res.render('register',{title:'register',footer:'register footer',sess});
    }
    else{
        res.render('register',{title:'register',footer:'register footer'});
    }
    

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
    var dataStr = JSON.stringify(users, null, 2);
    fs.writeFile('user.json', dataStr, (err) => {
        console.log('added a user to user.json');
        res.redirect('/');
    })
})

router.get('/login', (req, res,next) => {
    res.render('login',{title:'login',footer:'login footer'});
})
router.get('/logout',(req,res,next)=>{
    sess= req.session.destroy();
    res.redirect('/');
})
router.post('/login_prog', (req, res) => {
    return new Promise((resolve, reject) => {
        var id = req.body.userId;
        var pwd = req.body.password;
        for (user of users) {
            if (id == user.userId && pwd == user.password) {
                var sess = req.session;
                sess.user = user;
                res.redirect('../');
            }
        }
    })
})

module.exports = router;