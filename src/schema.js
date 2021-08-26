//import qql from "apollo-server"//Es6
const { gql } = require('apollo-server')//Es5
const typeDefs = gql`
type Student {
  id: ID!
  email: String!
  fullName: String!
  dept: String
  enrolled: Boolean
}

type Query {
  enrollment: [Student!]!
  student(id: ID!): Student
}

type Mutation {
  registerStudent(email: String!, fullName: String!): Student!
  enroll(id: ID!): Student
}
`
module.exports = {
    typeDefs
}