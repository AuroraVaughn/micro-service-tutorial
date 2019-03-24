const server = require("express")();
const { port } = require("./config");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const schema = require("./data/schema");

server
  .use(bodyParser.json())
  .use("/graphql", graphqlExpress({ schema }))
  .use("/gq", graphiqlExpress({ endpointURL: "/graphql" }))
  .listen(port, () =>
    console.log("Gateway Service - listening on port ", port)
  );
