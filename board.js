const express = require('express');
const router = express.Router();
const fs = require('fs');
const templete = require('./templete.js');
var exhbs = require('express-handlebars');
const app = express();

var data = fs.readFileSync('./board.json');
var boards = JSON.parse(data);
var sess;

router.get('/bd',(req,res,next)=>{
    sess = req.session;
    if(sess.user){
        res.render('board',{title:'board',footer:'board footer',boards,sess});
    }
    else{
        res.render('board',{title:'board',footer:'board footer',boards});
    }
});


router.get('/create',(req,res,next)=>{
    sess = req.session;
    if(sess.user)
    {
        res.render('createBoard',{title:'create',footer:"create board",sess});
    }
    else{
        res.redirect('/account/login');
    }
})

router.post('/create_prog', (req, res) => {
    sess = req.session;
    var data = req.body;
    console.log(req.body);
    var boardTitle = data.boardTitle;
    var content = data.content;
    var userId = data.userId;
    var aBoard = { boardTitle,content,userId};
    boards.push(aBoard);    
    var dataStr = JSON.stringify(boards, null, 2);
    fs.writeFileSync('board.json', dataStr, (err) => {
    })
        sess = req.session.user;
        res.redirect('/');
})

module.exports = router;
