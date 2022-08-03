const mongoose = require('mongoose');
// changed the database name
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
