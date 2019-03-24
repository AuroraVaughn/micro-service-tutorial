// subject: String!
// receiver: String!
// content: String!
// _id: String

const mockMails = [
  {
    subject: "My first email",
    receiver: "test@test.com",
    content: "Hello World! For the first Time! ",
    _id: null
  },
  {
    subject: "My second email",
    receiver: "test@test.com",
    content: "Hello World! For the second Time! ",
    _id: null
  },
  {
    subject: "My third email",
    receiver: "test@test.com",
    content: "Hello World! For the third Time! ",
    _id: null
  }
];
module.exports = {
  Query: {
    mails: () => mockMails,
    mail: (_, args) => ({
      subject: "My third email",
      receiver: "test@test.com",
      content: "Hello World! For the third Time! ",
      _id: null
    })
  },
  Mutation: {
    mail: (_, args) => {
      mockMails[0] = args;
      return args;
    }
  }
};
