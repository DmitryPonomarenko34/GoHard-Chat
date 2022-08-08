//@ts-ignore
const { ApolloServer, gql } = require('apollo-server');
const messages = require('./data/messages');

const arrayMessages = JSON.parse(JSON.stringify(messages));

const typeDefs = gql`
  type Message {
    id: String!
    text: String!
    username: String!
    createdAt: String!
    updatedAt: String!
  }

  mutation createMessage {
    id,
    text
  }

  type Query {
    getMessages: [Message!]!
  }
`;

const resolvers = {
    Query: {
        getMessages: () => arrayMessages,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
`);
});
