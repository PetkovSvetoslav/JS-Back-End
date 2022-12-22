const http = require('http');
const server = http.createServer( (request, response) => {

const homePage = `<h1> hello world! </h1>`;
const defaultPage = `<h1>404 not found</h1>`;

const routes = {
    '/': homePage,
    '/about': aboutPage,
};
const url = new URL(request.url, `http://${request.headers.host}`);

const page = routes[url.pathname];

if(page != undefined){
    response.write(html(page));
        response.end();
} else {
    response.statusCode = 404;
    response.write(html(defaultPage));
    response.end();
}

// if (request.url == '/') {
//     response.writeHead(html(homePage));
//     response.write();
//     response.end();
// } else if (url.pathname == '/about') {
//     response.write(html(aboutPage));
//     response.end();
// } else {
//     response.statusCode = 404;
//     response.end();
// }

});
server.listen(3000);

function html(body){
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${body}
</body>
</html>
`
}
