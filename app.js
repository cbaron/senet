const server = require('net').createServer( require('./handler') )

server.on('error', e => console.log( e.stack || e) )

server.listen( 8124 )
