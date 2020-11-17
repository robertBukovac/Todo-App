const DB_URI = 'mongodb://mongo:27017/toDoApp';

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};