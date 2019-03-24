const { PORT } = process.env;
const { dbPassword } = require("../secrets");

module.exports = {
  port: PORT || 4000,
  mongoURI: `mongodb+srv://tofu:<${dbPassword}>@microservice-gufgp.mongodb.net/test?retryWrites=true`
};
