const mongoose = require("mongoose");
const { MailSchema } = require("./Models");

module.exports = config => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(config.mongoURI, { useNewUrlParser: true })
    .catch(err => console.error("\n\nError connecting mongoose:\n", err));

  mongoose.model("Mail", MailSchema);
};
