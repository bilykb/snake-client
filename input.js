let connection;
const { inputObject } = require('./constants');

/**
 * setupInput establishes how user input is managed
 * @param {*} conn 
 * @returns 
 */

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

/**
 * a function which binds various actions with keyboard characters
 * @param {*} key 
 */
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  for (const [character, command] of Object.entries(inputObject)) {
    // loop through input commands and send command to server
    if (character === key) {
      connection.write(command);
    }
  }
};

module.exports = { setupInput };

