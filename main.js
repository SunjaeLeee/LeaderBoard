const express = require('express');
const bodyParser = require('body-parser');
const indexPage = require('./index');
const accountPage = require('./register');
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//app.get('*',(req,res,next)=>{console.log('all'); next();});
app.use('/',indexPage);
app.use('/account',accountPage);


app.listen(3000,()=>{
    console.log('success to access localhost 3000!');
});