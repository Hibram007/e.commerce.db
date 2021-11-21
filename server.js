const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

// cod eto initialize the app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// code to start the server- db connection
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
