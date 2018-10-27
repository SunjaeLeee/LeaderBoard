const express = require('express');
const router = express.Router();
const templete = require('./templete.js');
const navigation = require('./navigation.js');
const app = express();

router.get('/',(req,res)=>{
    console.log('index page')
    var html = templete('index','index','index');
    res.send(html)
});


module.exports = router;

