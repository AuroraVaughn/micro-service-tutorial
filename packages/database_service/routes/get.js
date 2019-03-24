const mongoose = require("mongoose");
const Mail = mongoose.model("Mail");

const pingHandler = (_, res) => {
  res.send("Healthy");
};

const mailsHandler = async (_, res) => {
  let mails, error;
  try {
    mails = await Mail.find();
  } catch (err) {
    error = err;
  } finally {
    res.send({
      message: "Get response from Database",
      service: "Database Service",
      status: 200,
      payload: mails || error
    });
  }
};
const singleMailHandler = async ({ params }, res) => {
  let mail, error;
  try {
    mail = await Mail.findOne({ _id: params.id });
  } catch (err) {
    error = err;
  } finally {
    res.send({
      message: "Get response from Database",
      service: "Database Service",
      status: 200,
      payload: mail || error
    });
  }
};

module.exports = server => {
  server.get("/", pingHandler);
  server.get("/mails", mailsHandler);
  server.get("/mails/:id", singleMailHandler);
};
