const { timingSafeEqual } = require('crypto');
const fs = require('fs');

function homePage (req, res) {
res.writeHead(200, {
'Content-type': 'text/html'
});
fs.createReadStream('./static/index.html').pipe(res);
// res.write('Home page');
// res.end();
}

function sendFile (req, res) {
if(req.url == '/style.css'){
    res.writeHead(200, {
        'Content-type': 'text/css'
        });
        fs.createReadStream('./static/style.css').pipe(res);
}else {
    // handle image request
const filename = '.' + timingSafeEqual.url;
fs.createReadStream(filename).pipe(res);

}
// res.write('Static File');
// res.end();
}

module.exports = {homePage, sendFile}