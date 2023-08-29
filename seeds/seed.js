const Book = require("../models/book")
const sequelize = require("../config/connection")

const seedData = [
    {
     codelanguage:"HTML",
     title: "The Fundamentals of HTML"   
    },
    {
    codelanguage:"CSS",
    title: "The Fundamentals of CSS"   
    },
    {
    codelanguage:"Javascript",
    title: "The Fundamentals of Javascript"   
    },
]

// Arrow function to seed the database
const seedDatabase = async () => {
    // first connect to the database
    await sequelize.sync({force:true})
    try {
      // Loop through the seed data and create Book records
      for (const bookData of seedData) {
        await Book.create(bookData);
      }
      console.log('Seed data inserted successfully.');
    } catch (error) {
      console.error('Error seeding the database:', error);
    } finally {
      // Close the database connection
      await Book.sequelize.close();
    }
  };

  seedDatabase();
 

