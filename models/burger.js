// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burgers = {
  all(cb) {
    orm.all('burgers',(res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(name, cb) {
    orm.insertOne(name, (res) => cb(res));
  },

  update(id, cb) {
    orm.updateOne(id, (res) => cb(res));
  },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burgers;
