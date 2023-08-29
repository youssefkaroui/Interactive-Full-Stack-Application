
// Middleware function to restrict routes a user is not allowed to visit if not logged in
const isLoggedIn = (req, res, next) => {
  // If the user is logged in, continue with the request to the restricted route
  if (req.session.isLoggedIn) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/login");
};

// Export the middleware function
module.exports = isLoggedIn;