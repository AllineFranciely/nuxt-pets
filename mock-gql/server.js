import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Schema GraphQL
const typeDefs = `
  type Pet {
    id: ID!
    name: String!
    age: Int!
    type: String!
    image: String!
  }

  type Query {
    pets: [Pet!]!
    pet(id: ID!): Pet
  }
`;

// Dados mockados
const pets = [
  { id: "1", name: "Rex", age: 3, type: "Dog", image: "/pets/rex.jpg" },
  { id: "2", name: "Mia", age: 2, type: "Cat", image: "/pets/mia.jpg" },
  { id: "3", name: "Thor", age: 5, type: "Dog", image: "/pets/thor.jpg" },
  { id: "4", name: "Luna", age: 1, type: "Cat", image: "/pets/luna.jpg" },
  { id: "5", name: "Bob", age: 4, type: "Dog", image: "/pets/bob.jpg" },
  { id: "6", name: "Nina", age: 6, type: "Cat", image: "/pets/nina.jpg" },
  { id: "7", name: "Max", age: 2, type: "Dog", image: "/pets/max.jpg" },
  { id: "8", name: "Bella", age: 3, type: "Dog", image: "/pets/bella.jpg" },
  { id: "9", name: "Rocky", age: 7, type: "Dog", image: "/pets/rocky.jpg" },
  { id: "10", name: "Mel", age: 1, type: "Cat", image: "/pets/mel.jpg" },

  { id: "11", name: "Simba", age: 4, type: "Cat", image: "/pets/simba.jpg" },
  { id: "12", name: "Lilo", age: 2, type: "Dog", image: "/pets/lilo.jpg" },
  { id: "13", name: "Toby", age: 5, type: "Dog", image: "/pets/toby.jpg" },
  { id: "14", name: "Lola", age: 3, type: "Cat", image: "/pets/lola.jpg" },
  { id: "15", name: "Duke", age: 6, type: "Dog", image: "/pets/duke.jpg" },
  { id: "16", name: "Kiwi", age: 1, type: "Cat", image: "/pets/kiwi.jpg" },
  { id: "17", name: "Apolo", age: 4, type: "Dog", image: "/pets/apolo.jpg" },
  { id: "18", name: "Frida", age: 2, type: "Cat", image: "/pets/frida.jpg" },
  { id: "19", name: "Zeus", age: 8, type: "Dog", image: "/pets/zeus.jpg" },
  { id: "20", name: "Pipoca", age: 1, type: "Cat", image: "/pets/pipoca.jpg" },
];

// Resolvers
const resolvers = {
  Query: {
    pets: () => pets,
    pet: (_, { id }) => pets.find(p => p.id === id),
  },
};

// Criar servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
});

// Iniciar servidor
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Mock GraphQL rodando em: ${url}`);
