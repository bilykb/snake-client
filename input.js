let connection;

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
    if (key === "\u0077") {
      connection.write("Move: up");
    }
    if (key === "\u0073") {
      connection.write("Move: down");
    }
    if (key === "\u0061") {
      connection.write("Move: left");
    }
    if (key === "\u0064") {
      connection.write("Move: right");
    }
    if (key === "\u0031") {
      connection.write("Say: Have a good day!");
    }
    if (key === "\u0032") {
      connection.write("Say: I am so confused");
    }
};

module.exports = { setupInput };

