const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    connectionLimit: 5,
    database: 'fineapi'
});
async function getConnection() {
    try {
      const connection = await pool.getConnection();
      console.log('Connected to MariaDB database');
      return connection;
    } catch (error) {
      console.error('Error connecting to MariaDB database: ', error);
    }
  }
  
  module.exports = getConnection;