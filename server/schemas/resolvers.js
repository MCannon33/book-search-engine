const { User } = require("../models");

const resolvers = {
  Query: {
    thoughts: async () => {
      return User.find().sort({ createdAt: -1 });
    },
  },
};
