const router = require('express').Router();
const { User } = require('../../models/User.js');

router.post('/', async (req, res) => {
  console.log("Incoming Data: ", req.body)
  try {
    const userData = await User.create(req.body);
    console.log("New User:", userData);
    // here we are trying to ADD OUR USER_ID to the REQ.SESSION OBJECT
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      //res.status(200).json(userData);
      res.redirect('/login') // OR MAYBE --> Redirect to an AUtorized endpoint(?)
    });
  } catch (err) {
    console.log("Signup Error: ", err);
    res.status(400); 
    res.render("signup", {
      message:"Signup failed, please try again."
    })
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;