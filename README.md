# RESTful API with Node.js, Express.js, MongoDB and Mongoose.

Example of a RESTful API built with Node.js, Express.js and Mongoose.

## RESTful API

### POST `/items`

+ Method: `GET`
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

## Install

`npm install`

## Run

0. Make sure MongoDB is running, if not: `sudo ~/mongodb/bin/mongod`
1. `npm run start`
