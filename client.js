const net = require('net');
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8')

  conn.addListener('data', data => {
    console.log('Server says', data);
  });

  conn.on('connect',() => {
    console.log("Successfully connect to game server");
    conn.write("Name: BRB");
  });
  return conn;
}

module.exports = { connect };