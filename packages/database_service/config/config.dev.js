const { PORT } = process.env;
const { dbPassword, dbUserName, dbAddress } = require("../secrets");

module.exports = {
  port: PORT || 4000,
  mongoURI: `mongodb+srv://${dbUserName}:${dbPassword}@${dbAddress}`
};
