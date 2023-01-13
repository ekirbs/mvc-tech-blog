const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log('GET /');
  try {
    const postData = await Post.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_body', "post_id", "user_id"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', (req, res) => {

});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
