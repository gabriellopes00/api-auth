# { API Authentication } 🔐

## About this API 📚
This is a simple API that allows you register users in the database(allows you to do a complete CRUD wth this users), and the best part is that this API allows this users log in to the system using a [JWT](https://jwt.io/) token, other good thing, is that when the users are registered their password are hidden, using [Bcryptjs](https://www.npmjs.com/package/bcryptjs) to generate the *hash*. This project use Typescript, because it improves the code understanding and provide a better development.

## Building ⚙
You'll need [Node.js](https://nodejs.org) and i recommend that you have installed the [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) on your computer. With your setup completed, you will need to instal [MySQL](https://www.mysql.com/), and create an empty database.

This is API is running at port ``5050`` ```http://localhost:5050```
<br>

#### Clone
```bash
git clone https://github.com/gabriellopes00/Api-authentication.git
```

#### Running with yarn 🐿
```ssh
$ cd api-jwt-ts
$ yarn install
$ yarn dev
```

#### Running with npm 🔧
```ssh
$ cd api-jwt-ts
$ npm install
$ npm run dev
```

## Contact 📱
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/gabriellopes00)](https://github.com/gabriellopes00)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-lopes-6625631b0/)](https://www.linkedin.com/in/gabriel-lopes-6625631b0/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/_gabrielllopes_)](https://twitter.com/_gabrielllopes_)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?&style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabrielluislopes00@gmail.com)](mailto:gabrielluislopes00@gmail.com)
  <a href="https://www.facebook.com/profile.php?id=100034920821684">
    <img src="https://img.shields.io/badge/Facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white">
  </a>
  <a href="https://www.instagram.com/_.gabriellopes/?hl=pt-br">
    <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white">
  </a>

## Documentation 📝
##### End points:
- `get` ```http://localhost:5050/```
- Here you can show registered users *( used only during the development )*.

- `post` ```http://localhost:5050/```
- Here you can register a new client in the database, just need to pass ( *email* and *password* **both strings** ) as request body.
  - Registered successfully will return { userCreated } *without password*.
  - Email already registered will return status `409`.
  - Internal server error will return status `500`.

- `put` ```http://localhost:5050/```
- Here you can update an registered client, just need to pass *user email* as request param and ( *new email* and *new password* **both strings** ) as request body.
  - Updated successfully will return status `200`
  - Email is not registered, will return status `404`
  - Invalid password will return status `401`
  - new password is igual last password, will return status `400`
  - Internal server error will return status `500`

- `post` ```http://localhost:5050/auth```
- Here will be done the user login authentication, just need to pass ( *email* and *password* registered, **both strings** ) as request body.
  - Authenticated successfully will return { useData, tokenGenerated } *without user password*.
  - Invalid password or invalid email will return status `401`
  - Internal server error will return status `500`

- `get` ```http://localhost:5050/tryAuthentication```
  - This route is only used to verify if the user is registered, and if this is true, will return `res.json({ status: 'User authenticated successfully', userId: req.userId })`