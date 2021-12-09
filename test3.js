const sift = require('sift');
const { NotFound, ServerError } = require('./test/utils/errors');

// This is a bonus but you need to do the previous tests before

class Server {
    // Create your server with query features with sift
    // We pass the db when the Server is instantiated (constructor)
    
  constructor(db) {
    this.db = db;
  }

}

module.exports = Server;
