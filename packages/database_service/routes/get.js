const mongoose = require("mongoose");
const Mail = mongoose.model("Mail");

module.exports = server => {
  const m = new Mail({
    subject: "I am haz subject matter",
    receiver: "greates@notfound.com",
    content: "I once was great, but then was lost. Now I am my own lost boss."
  });
  server.get("/", async (req, res) => {
    const m = new Mail({
      subject: "I am haz subject matter",
      receiver: "greates@notfound.com",
      content: "I once was great, but then was lost. Now I am my own lost boss."
    });
    await m.save();
    res.send("");
  });
};
