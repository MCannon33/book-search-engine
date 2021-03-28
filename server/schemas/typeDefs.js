// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: Int!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  input BookInput {
    bookId: Int!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
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
