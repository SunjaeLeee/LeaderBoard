const express = require('express');
const router = express.Router();
const templete = require('./templete.js');
const navigation = require('./navigation.js');
const users = require('./userLogin.json');
const app = express();

router.get('/login',(req,res)=>{
    var body = `<form method="post" action="/login">
    <div>
    </div>
    <div>
        <label>Id</label>
        <input type="text" placeholder="Enter id"/>
        <label>Password</label>
        <input type="password" placeholder="Enter password"/>
        <button type="submit">login</button>
    </div>
</form>`
    console.log('login page')
    var html = templete('index',body,'index');
    res.send(html)
});

router.post('/',(req,res) =>{
     
})

module.exports = router;


