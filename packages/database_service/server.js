const server = require("express")();
const { port } = require("./config");

const bodyParser = require("body-parser");

server.use(bodyParser.json());

require("./routes/get")(server);
server.listen(port, () =>
  console.log("Database Service - Listening on port ", port)
);
