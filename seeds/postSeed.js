const { Post } = require("../models");

const postData = [
  {
    "title": "File structure is important",
    "post_text": "A properly organized file structure will allow yourself and others to more easily navigate the application!",
    "user_id": 2
  },
  {
    "title": "Google Everything",
    "post_text": "Google every question you have.  Everything is on the internet!",
    "user_id": 3
  },
  {
    "title": "Encryption",
    "post_text": "Encrypting your passwords is an important security measure to deter hackers form accessing sensitive files.",
    "user_id": 4
  },
  {
    "title": "Powergloves",
    "post_text": "Everyone knows that to reach your maximum hacking potential, you need a Powerglove!",
    "user_id": 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;