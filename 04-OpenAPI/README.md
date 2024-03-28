---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'RESTful WebAPIs'
footer: 'Marco Robol - Trento, 2022 - Software Engineering'
---

# **Designing and Documenting RESTful APIs with OpenAPI Specification Language**

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

*Academic year 2023/2024 - Second semester*

---

# OpenAPI Specification Language

> ***Online documentation:*** https://swagger.io/docs/specification/about/

OpenAPI Specification (formerly Swagger Specification) is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including: endpoints and operations, input and output parameters, authentication.

Use the following tools to document and test your APIs:
- https://editor.swagger.io/
- https://app.apiary.io/
- https://www.postman.com/

---

## EasyLib

Web service for the management of book lendings to students.

> Repository: https://github.com/unitn-software-engineering/EasyLib

> APIs documentation: https://easylib.docs.apiary.io/#

---

# Notes on Implementing RESTful WebAPIs

The response of a POST request should provide an empty body and an HTTP header 'Location' with a link to the newly created resource. For example:
```javascript
app.post('/api/products', function (req, res) {
  ...
  res.status(201).location("/api/products/" + product.id);
  ...
}
```

Send the correct HTTP status codes: https://www.restapitutorial.com/lessons/httpmethods.html

> A complete list of HTTP status code: [restapitutorial.com/httpstatuscodes.html](https://www.restapitutorial.com/httpstatuscodes.html)

---

# [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

![w:1000](./swagger-ui-express.png)

---

This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route.

```javascript
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

---

# [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

![w:1000](./swagger-jsdoc.png)

---

This library reads your JSDoc-annotated source code and generates an OpenAPI (Swagger) specification. Imagine having API files like these:

```javascript
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

---

The library will take the contents of @openapi (or @swagger) with the following configuration:

```javascript
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
```

The resulting openapiSpecification will be a swagger validated specification.

---

# swagger-ui-express and swagger-jsdoc

Swagger specification auto-generated and served from express.

```javascript
const swaggerUI = require('swagger-jsdoc')
const swaggerJsDoc = require('swagger-ui-express')

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

---

# Questions?

marco.robol@unitn.it