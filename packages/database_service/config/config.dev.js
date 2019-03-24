const { PORT } = process.env;
module.exports = {
  port: PORT || 4000,
  mongoURI:
    "mongodb+srv://tofu:<password>@microservice-gufgp.mongodb.net/test?retryWrites=true"
};
