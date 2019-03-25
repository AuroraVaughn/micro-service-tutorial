const mongoose = require("mongoose");
const Mail = mongoose.model("Mail");
const mailHandler = async ({ body }, res) => {
  const { subject, receiver, content } = body;
  let mail, error;
  console.log("body: ", body);
  if (!subject || !receiver || !content) {
    res.sendStatus(400).send({
      massage:
        "Required data is missing. Requires subject, receiver, and content to be provided.",
      service: "Database service",
      status: 400,
      payload: null
    });
  }
  const m = new Mail({
    subject,
    receiver,
    content
  });
  try {
    mail = await m.save();
  } catch (err) {
    error = err;
  }
  res.send({
    message: "Post response to Database",
    service: "Database Service",
    status: error ? 400 : 200,
    payload: mail || error
  });
};

module.exports = server => {
  server.post("/mails", mailHandler);
};
