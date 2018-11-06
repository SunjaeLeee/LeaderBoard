const express = require('express');
const bodyParser = require('body-parser');
const indexPage = require('./index');
const accountPage = require('./register');
const boardPage = require('./board');
const app = express();
const path = require('path');
const session = require('express-session');
var exhbs = require('express-handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public/css')));
app.use(session({secret:"dasfafa",resave:false,saveUninitialized:true}));
app.engine(".hbs",exhbs({
    extname: ".hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + '/views/layouts/'
}))
app.set('view engine', '.hbs');
//app.get('*',(req,res,next)=>{console.log('all'); next();});
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/',indexPage);
app.use('/account',accountPage);
app.use('/board',boardPage);

app.listen(3000,()=>{
    console.log('success to access localhost 3000!');
});