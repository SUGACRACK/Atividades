const http = require('http');
const url = require('url');

const host = 'localhost';
const porta = 3000;

const server = http.createServer((req, res) => {

    var obj = req.url.split('/');
    console.log(obj);

    if (obj[1] == 'favicon.ico') {
        res.statusCode = 204;
        res.end();
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    res.write('<html>');
    res.write('<body>');
res.write('<table>');


var cachorro= [
[10, 8, 4, 7],
[7, 5, 9, 6],
[3, 5, 6, 11]
];
for(i = 0; i<cachorro.length; i++){
for(j = 0; j<cachorro[i].length;j++){
res.write("[" + `${cachorro[i][j]-2}` + "]");
}
res.write('<br />');
}

res.write('</table>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(porta, host, () => {
  console.log(`Servidor rodando em http://${host}:${porta}/`);
});