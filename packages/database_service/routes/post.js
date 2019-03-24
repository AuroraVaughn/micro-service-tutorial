const mongoose = require("mongoose");
const Mail = mongoose.model("Mail");
server.post("/", async (req, res) => {
  const { subject, receiver, content } = req.body;
  const m = new Mail({
    subject,
    receiver,
    content
  });
  await m.save();
  res.send("");
});
