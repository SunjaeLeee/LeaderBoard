const express = require('express');
const router = express.Router();
const session = require('express-session');
var exhbs = require('express-handlebars');
const app = express();
app.use(session({secret:'asdfafs', resave:true, saveUninitialized:true}));
var sess;
router.get('/',(req,res,next)=>{
     sess = req.session;
    if(sess.user){
        res.render('index',{title:'index',footer:'index footer',sess});
    }
    else{
        res.render('index',{title:'index',footer:'index footer'});
    }
    
    
});


module.exports = router;

