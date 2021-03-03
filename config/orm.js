const connection = require('./connection.js');


const orm = {
  selectAll(cb) {
    const queryString = 'SELECT * FROM burgers';
    connection.query(
      queryString,
      [cb],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
  insertOne(name,cb) {
    const queryString = 'INSERT INTO burgers_db (burger_name) VALUES';
    console.log(queryString);
    connection.query(
      queryString,
      [name],
      function (err, result) {
        if (err)
          throw err;
        cb(result);
      }
    );
  },
  UpdateOne(id, cb) {
    const queryString = 'UPDATE bugers devoured=true';

    connection.query(
      queryString,
      [id
      ],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
