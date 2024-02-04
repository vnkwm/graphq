export const resolvers = {
  Query: {
    jobs: () => {
      return [
        {
          id: 2334,
          title: 'Lorem',
          description: 'Ipsum description',
        },
        {
          id: 2335,
          title: 'Lorem',
          description: 'Ipsum description',
        },
      ]
    }
  },
};