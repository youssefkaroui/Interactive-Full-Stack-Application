const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('OnlineLib_db', 'root', 'Jjg030600$', {
  host: 'localhost',
  dialect: 'mysql'
});

const Author = sequelize.define('Author', {
  // Define author attributes
});

const Genre = sequelize.define('Genre', {
  // Define genre attributes
});

const Book = sequelize.define('Book', {
  title: DataTypes.STRING,
  publication_year: DataTypes.INTEGER,
  view_count: { type: DataTypes.INTEGER, defaultValue: 0 },
  checkout_count: { type: DataTypes.INTEGER, defaultValue: 0 }
});

// Define associations
Book.belongsTo(Author);
Book.belongsTo(Genre);

// Method to increment view_count
Book.prototype.incrementViewCount = async function() {
  this.view_count += 1;
  await this.save();
};

// Sync the models with the database
sequelize.sync({ force: true }) // Use `force: true` only during development
  .then(async () => {
    // Insert sample data or perform other actions
  })
  .catch(error => {
    console.error('Error syncing models:', error);
  });