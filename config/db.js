const { Sequelize } = require("sequelize");

// Update with your phpMyAdmin details
const sequelize = new Sequelize("pgowner", "root", "", {
  host: "localhost", // Typically "localhost" for phpMyAdmin
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL successfully."))
  .catch((error) => console.error("Unable to connect to MySQL:", error));

module.exports = sequelize;
