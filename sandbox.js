
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


  // const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };