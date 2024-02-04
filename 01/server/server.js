import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Query {
    greeting: String
    lastName: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello there',
    lastName: () => 'Kenobi'
  },
}

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);
