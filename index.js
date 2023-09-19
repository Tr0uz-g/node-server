const http = require ('http');
const port = 3000;

const listaDeTareas = [
    
    {id: 1, descripcion: 'esta es la tarea 1', estado: false},
    {id: 2, descripcion: 'esta es la tarea 2', estado: true},
    {id: 3, descripcion: 'esat es la tarea 3', estado: false},
];


const server = http.createServer((req, res)=> {
    if(req.method === 'GET' && req.url === '/tareas') {
        res.writeHead(200, { 'Conten-Type': 'application/json' });
        res.end(JSON.stringify(listaDeTareas, null, 3));
    } else {
        res.writeHead(404, { 'Conten-type': 'text/plain' });
        res.end('Ruta no encontrada')
    }
});


server.listen(port, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${port}`)
});
