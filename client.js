const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * connect establishes a connection for the client to the snek server, and manages events
 * @returns conn is returned to be used in other functions, such as input
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');

  conn.addListener('data', data => {
    console.log('Server says', data);
  });

  conn.on('connect',() => {
    console.log("Successfully connect to game server");
    conn.write("Name: BRB");
  });
  return conn;
};

module.exports = { connect };