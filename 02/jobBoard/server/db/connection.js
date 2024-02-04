import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/jobBoard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

export default connection;


// import knex from 'knex';

// export const connection = knex({
//   client: 'better-sqlite3',
//   connection: {
//     filename: './data/db.sqlite3',
//   },
//   useNullAsDefault: true,
// });
