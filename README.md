# Social-network-api

## Table of Contents
- [Description](#description)
- [Usage](#usage)

## Description
Provides a social network api using a noSQL DB.  The application has CRUD operations available for the API.  It has two main routes, which deals with users and thoughts.

Demo Video URL: https://drive.google.com/file/d/1fA2sT8cvBZ1heRIdhkMdI_Xln988DE9s/view

GitHub URL: https://github.com/whougie/social-network-api.git

## Usage
To run the applicaiton. Execute 'npm run start'.

The application has the following routes available:

User Routes:
- GET /api/users - get all users
- GET /api/users/:userId - gets the one user
- POST /api/users - creates a new user
- PUT /api/users/:userId - modifies the one user
- DELETE  /api/users/:userId - deletes the one user
- POST /api/users/:userId/friends/:friendId - adds a friend to the designated user
- DELETE /api/users/:userId/friends/:friendId - deletes a friend from a designated user

Thought Routes:
- GET /api/thoughts - get all thoughts
- GET /api/thoughts/:thoughtId - get one designated thought
- POST /api/thoughts - create a thought
- PUT /api/thoughts/:thoughtId - modify one designated thought
- DELETE /api/thoughts/:thoughtId - delete one designated thought
- POST api/thoughts/:thoughtId/reactions - creates a reaction for a designated thought
- DELETE api/thoughts/:thoughtId/reactions/:reactionId - deletes a reaction for a designated thought



