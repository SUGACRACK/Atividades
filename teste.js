/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Curso: Informática para Internet
 * Disciplina: Lógica de Programação e Estrutura de Dados
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 * 
 * Código de Domínio Público, sinta-se livre para usá-lo, modificá-lo e redistribuí-lo.
 *
 */

const http = require('http');

const host = 'localhost';
const porta = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');

    var array = [7];

    for (var i = 0; i < array.length; i++) {
        res.write(`<li>${array[i]}</li>`);
    }

    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(porta, host, () => {
  console.log(`Servidor rodando em http://${host}:${porta}/`);
});