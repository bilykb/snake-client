const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8')

  conn.addListener('data', data => {
    console.log('Server says', data);
  });

  conn.on('connect',() => {
    console.log("Successfully connect to game server");
    conn.write("Name: BRB");

    
    for(let move of moveArray) {
      setInterval(() => {
        conn.write(move);
      }, 300);

    
    };
  return conn;
  })
}

module.exports = { connect };