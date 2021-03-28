// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [savedBooks]
  }
  type Book {
    bookId: Int
    authors: [authors]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: String
    user: String
  }
  type Query {
    me: [User]
    me(username: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;

// thoughts(username: String): [Thought]
// thought(_id: ID!): Thought

//type Query {
//books(title: String): [Book]
//book(_id: ID!): Book
//}
