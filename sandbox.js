// // SEED.js (for use with json files)

// const { User, Post, Comment } = require('../models');

// const userData = require('./postData.json');
// const postData = require('./postData.json');
// const commentData = require('./postData.json');

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // await Post.bulkCreate(postData, {
  //   returning: true,
  // });

  // await Comment.bulkCreate(commentData, {
  //   returning: true,
  // });

  // for (const post of postData) {
  //   await Post.create({
  //     ...post,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // };

  // for (const comment of commentData) {
  //   await Comment.create({
  //     ...comment,
  //     post_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // };
  

// // SERVER SIMPLE SETUP

  // const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };


// // HOMEROUTES

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


//     // HOMEPAGE.HANDLEBARS
//     {{#each posts as |post| }}
// <div class="row mb-4 project">
//   <div class="col-md-5">
//     <h2>
//       {{{get_emoji}}}
//       <a href="/project/{{post.id}}">{{post.title}}</a>
//     </h2>
//     <p>Created by {{user.username}} on {{format_date post.date_created}}</p>
//   </div>
//   <div class="col-md-7">
//     <p>
//       {{post.post_body}}
//     </p>
//   </div>
// </div>
// {{/each}}


// // DASHBOARDROUTES
// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });