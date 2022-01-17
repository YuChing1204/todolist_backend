# todolist_backend

This app is a to-to list app that let user keep track of their tasks.
Functions:
1.	Add/Delete tasks.
2.	Edit the tasks by double click the list items, press enter to confirm modification, press esc to undo modification.
3.	Mark tasks as done.

Libraries

Frontend:
Body-parser: Body-parser is an npm library used to process data sent through an HTTP request body. It parses request and converts it into a format that can help developers extract data easily.
Semantic UI: Semantic UI is a development framework that helps create beautiful, responsive layouts using human-friendly HTML. It allows me to design UI interface faster.

Backend:
Axios: Axios promises based HTTP client for the brower and node.js. The advantage of Axios is that it automatically converts the data to JSON. It also supports wide brosers.
Express: Express is a fast, unopinionated, minimalist web framework for Node.js. 
mongoose: The reason why I chose Express is that it supprts Node.js so that I can develop an Express.js backend with NPM packages.

List items:

The schema I store in the database is 
title: String,
    completed: Boolean,
The format is JSON.
Title means the to-do list text, so it’s stored as string. Completed is to record if the to-do list item is completed, so it’s stored as boolean.

Deployment architecture:
I chose Heroku to deploy the project because it is free and easier for beginners. I separated front end part and back end part to deploy to two different websites. 

What part of this project you had never done before:
I never deployed project before. However, I think Heroku is a could platform that good for beginners.

GitHub links:
https://github.com/YuChing1204/todolist_frontend.git
https://github.com/YuChing1204/todolist_backend.git

URL of the live deployments:
https://todolistwebappfrontend.herokuapp.com
