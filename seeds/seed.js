const sequelize = require('../config/connection');

const userSeed = require('./userSeed.js');
const postSeed = require('./postSeed.js');
const commentSeed = require('./commentSeed.js');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await userSeed();

  await postSeed();

  await commentSeed();

  process.exit(0);
};

seedDatabase();
