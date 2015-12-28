# RESTful API with Node.js, Express.js, MongoDB and Mongoose.

Example of a RESTful API built with Node.js, Express.js and Mongoose.

## RESTful API

### GET `/api/items`

+ Method: `GET`
+ URL: `/api/items`

### POST `/api/items`

+ Method: `POST`
+ URL: `/api/items`
+ Body:

```js
{
  "id": "1",
  "name": "React.js Essentials",
  "description": "A fast-paced guide to designing and building scalable and maintainable web apps with React.js.",
  "quantity": "10"
}
```

### GET `/api/items/:itemId`

+ Method: `GET`
+ URL: `/api/items/1`

### PUT `/api/items/:itemId`

+ Method: `PUT`
+ URL: `/api/items/1`
+ Body:

```js
{
  "id": "1",
  "name": "React.js Essentials",
  "description": "A fast-paced guide to designing and building scalable and maintainable web apps with React.js.",
  "quantity": "20"
}
```

### PATCH `/api/items/:itemId`

+ Method: `PATCH`
+ URL: `/api/items/1`
+ Body:

```js
{
  "quantity": "30"
}
```

### DELETE `/api/items/:itemId`

+ Method: `DELETE`
+ URL: `/api/items/1`

## Install

`npm install`

## Run

0. Make sure MongoDB is running, if not: `sudo ~/mongodb/bin/mongod`
1. `npm run start`
