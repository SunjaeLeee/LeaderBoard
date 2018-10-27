const fs = require('fs');

let users = [];

module.exports.initService() = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./user.json', 'utf8', (err, data) => {
            users = JSON.parse(data);
        })
        
        
    })
}
