const userdata = require('./user-seeds')
const seedPosts = require('./post-seeds')
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
  console.log('--------------');
  await userdata();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  process.exit(0);
}

seedAll()