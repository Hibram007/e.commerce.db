// require('dotenv').config();

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('ecommerce_db', 'root', '1998Hlsg8sql', 
// {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     })

// module.exports = sequelize;


// // u OF A CODE 
// const Sequelize = require('sequelize');

// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });
// }

// module.exports = sequelize;

require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
