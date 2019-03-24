let config;
const { NODE_ENV } = process.env;
if (NODE_ENV === "production") {
  config = require("./config.prod");
} else {
  config = require("./config.dev");
}
module.exports = config;
