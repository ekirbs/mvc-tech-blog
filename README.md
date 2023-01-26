# MVC Tech Blog

## Description

This application is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts.  The purpose of building this application is to gain a deeper understanding of routes and requests/responses.  While complicated, by the end I really started to get a clear understanding of how all the files were connected and how to trace through it all to find a bug or something I wanted to adjust.  This was an exciting project because it feels we are closer and closer to building a full, semi-professional site.  Another benefit of this application is that I was able to use some packages I had either limited experience with, or no experience at all, such as nodemon and bcrypt.  All-in-all a fun but rewarding challenge!  Enjoy the site!

Link: [MVC Tech Blog](https://ekirbs-tech-blog.herokuapp.com/ 'A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts.')

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

All packages used in conjunction with this application can be found in the "package.json" file.  In order to run the application on a system, open the file in a terminal and type npm install to download all packages mentioned.

## Usage

To run this application, the server needs to be opened on the PORT.  This can be done with either the command "npm start" or "node server.js" in the terminal. Once the app is listening, the application can be found at: http://localhost:3001.

On the homepage, any previoulsy made comments will be displayed. If a post's title is clicked, it will navigate to the post pge where the post information can be viewed in more detail, along with any comments left on the post.  These can be viewed by anyone, but in order to interact with the blog, the "login" button in the navigation must be pressed, and the user must login, or sign up if they haven't yet created an account.  All accounts must have a unique email and the password must be at least 8 characters long.  All passwords will be encrypted using the bcrypt package.

Once logged in, the user has the option of navigating to their dashboard page from the navbar.  From here, the user can add a new post, or view their posts in more detail.  If a logged-in user clicks on "Edit Your Post" or "Edit Your Comment, it will navigate to the different pages where the posts or comments can be edited or deleted.

![Tutorial GIF.](./public/images/tutor-gif.gif)

## Credits

A special thanks to the Net Ninja youtube channel for help with explaining aspects of this assignment!

Link: [The Net Ninja](https://www.youtube.com/@NetNinja 'The Youtube channel for The Net Ninja.')

## License

N/A