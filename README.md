# Flashcard - Backend

It is a platform where user can create a question - answer flashcards.

### Technology Used

- Typescript
- NodeJS
- NestJS
- NestJS Microservices
- MongoDB
- Mongoose

### Features

- User
  - User can easily signup and signin with the system.
- Flashcard
  - User can create, get, update and delete flashcards.
  - Flashcards are sharable. Means user can share the flashcards with other users.

### Steps to run - Node App

- Copy .env.sample file and create new .env file in project's directory with actual values and credentials.

#### First Terminal

- npm i
- npm run start:dev auth

#### Second Terminal

- npm run start:dev flash-card

#### Third Terminal

- npm run start:dev share-link
