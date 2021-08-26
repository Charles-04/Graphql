
const { gql, ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolver')
const server = new ApolloServer({resolvers,typeDefs})
const port = process.env.PORT || 9090

server.listen({ port }, () =>
  console.log(`Server ready at: http://localhost:${port}`),
)