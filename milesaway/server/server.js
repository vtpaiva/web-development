import http from 'http'
import debug from 'debug'
import app from './app.js'

// Debug
debug('nodecrud:server');

// Utils
function normalizePort(val) {
    const port = parseInt(val, 10);
    if(isNaN(port)) {
        return val;
    }

    if(port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if(error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port 
        : 'Port ' + port;

    switch(error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

// App
const port = normalizePort(process.env.PORT || '4001');
app.set('port', port);
console.log("Rodando na porta " + port);

// Server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

