const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await Post.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    //  // req.session => req.session = { save: method(), ..., countVisit }
    //  req.session.save(() => {
    //   // We set up a session variable to count the number of times we visit the homepage
    //   if (req.session.countVisit) {
    //     // If the 'countVisit' session variable already exists, increment it by 1
    //     req.session.countVisit++;
    //   } else {
    //     // If the 'countVisit' session variable doesn't exist, set it to 1
    //     req.session.countVisit = 1;
    //   }

    //   res.render('homepage', { // points to homepage render (handlebars)
    //     galleries,
    //     // We send over the current 'countVisit' session variable to be rendered
    //     countVisit: req.session.countVisit,
    //   });
    // });

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
