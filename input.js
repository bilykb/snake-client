let connection;
const { inputObject } = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}

const handleUserInput = function(key) {
    if (key === "\u0003") {
      process.exit();
    }
    for(const [unicode, command] of Object.entries(inputObject)) {
      // loop through input commands and send command to server
      if (unicode === key) {
        connection.write(command);
      }
    }
};

module.exports = { setupInput };

