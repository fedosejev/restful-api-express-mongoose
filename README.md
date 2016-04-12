# RESTful API with Node.js, Express.js, Mongoose and MongoDB.

Example of a RESTful API built with Node.js, Express.js, Mongoose and MongoDB.

## RESTful API endpoints

### GET `/api/items`

Get all items.

+ Method: `GET`
+ URL: `/api/items`

### POST `/api/items`

Create a new item.

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

Get item with specific id.

+ Method: `GET`
+ URL: `/api/items/1`

### PUT `/api/items/:itemId`

Update entire item with specific id.

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

Update part of the item with specific id.

+ Method: `PATCH`
+ URL: `/api/items/1`
+ Body:

```js
{
  "quantity": "30"
}
```

### DELETE `/api/items/:itemId`

Delete item with specific id.

+ Method: `DELETE`
+ URL: `/api/items/1`

## Install

`npm install`

## Run

0. Make sure MongoDB is running, if not: `sudo ~/mongodb/bin/mongod` (assuming you have `~/mongodb` directory).
1. `npm run start`
