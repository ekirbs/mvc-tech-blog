const sequelize = require('../config/connection');
// const { User, Post, Comment } = require('../models');

// const userData = require('./postData.json');
// const postData = require('./postData.json');
// const commentData = require('./postData.json');

const seedusers = require('./userData.json');
const seedPosts = require('./postData.json');
const seedComments = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedusers();

  await seedPosts();

  await seedComments();

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

  process.exit(0);
};

seedDatabase();
