const http = require('http');

http
  .createServer((request, response) => {
    // console.log(request);
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, { 'Content-Type': 'application/csv' });

    response.write('Hola Mundo');
    response.end();
  })
  .listen(8080);

console.log('Escuchando el puerto', 8080);
