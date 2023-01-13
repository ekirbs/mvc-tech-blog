const { Comment } = require("../models");

const commentData = [
  {
    "comment_text": "I agree! A good file structure is also really helpful when building an application!",
    "user_id": 3,
    "post_id": 1
  },
  {
    "comment_text": "I found this blog through googling.",
    "user_id": 2,
    "post_id": 2
  },
  {
    "comment_text": "Hackerman has hacked time again...",
    "user_id": 4,
    "post_id": 4
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;