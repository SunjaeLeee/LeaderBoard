const navigation = require('./navigation.js');
module.exports = (title,body,footer) => {
    var navi = navigation;
    return `<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        ${navi}
        <div>
            ${body}
        </div>
        <div>
            ${footer}
        </div>
    </body>
</html>`
}
