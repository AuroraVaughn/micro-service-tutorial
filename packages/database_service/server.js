const server = require("express")();
const config = require("./config");
const { port } = config;

const bodyParser = require("body-parser");

server.use(bodyParser.json());
require("./dbUtil")(config);
require("./routes/get")(server);
server.listen(port, () =>
  console.log("Database Service - Listening on port ", port)
);
