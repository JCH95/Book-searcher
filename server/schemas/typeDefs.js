// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    input SavedBooks {
        authors: [String],
        description: String,
        title: String,
        bookId: String,
        image: String,
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBooks): User
        removeBook(bookId: String!): User
    }
    type Auth {
        toke: ID!
        user: User
    }
    type Query {
        me: User
    }
`;

module.exports = typeDefs;