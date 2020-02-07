var mysql      = require('mysql');
var debug = require('debug')('contacts:pool');

var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'nodeuser',
  password : 'test123',
  database : 'nodeuser'
});

pool.on('acquire', function (connection) {
    debug('Connection %d acquired', connection.threadId);
});

pool.on('connection', function (connection) {
    debug('Connection %d created', connection.threadId);
});

pool.on('enqueue', function () {
    debug('Waiting for available connection slot');
});

pool.on('release', function (connection) {
    debug('Connection %d released', connection.threadId);
});

 
module.exports = pool;
