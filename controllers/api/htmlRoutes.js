const path = require("path");
const isAuthenticated = require("../config/connection.js");
const {User} = require("../../models/User.js"); // Sequelize models are defined here

module.exports = function(app) {
  // Root route: Redirects to /homepage if user is logged in, otherwise renders signup page
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/homepage");
    } else {
      res.render('signup', { js: ['signup.js'] });
    }
  });

  // Login route: Redirects to /home if user is logged in, otherwise renders login page
  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/homepage");
    } else {
      res.render('login', { js: ['login.js'] });
    }
  });

  // Home route: Requires authentication and renders home page
  app.get("/homepage", isAuthenticated, (req, res) => {
    res.render('homepage', { js: ['homepage.js'] });
  });

  // Browse route: Requires authentication and renders browse page
  app.get("/book", isAuthenticated, (req, res) => {
    res.render('book', { js: ['book.js'] });
  });

  // Cart route: Requires authentication and renders cart page
  app.get("/cart", isAuthenticated, (req, res) => {
    res.render('cart', { js: ['checkout.js'] });
  });

  // Additional route examples with Sequelize
  app.get("/user/:id", isAuthenticated, async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render('user', { user });
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred");
    }
  });
};
