//Crear una función en JavaScript que lea un archivo html y lo muestre en un servidor en el puerto 8080
//http://localhost:8080
//http://192.168.0.30:8080

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const port = 8080;
const filePath = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error al leer el archivo HTML');
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${port}`);

    // Abrir automaticamente el navegador 
    exec(`start http://148.213.41.142:${port}`, (err) => {
        if (err) {
            console.error('Error al abrir el navegador:', err);
        }
    });
});