---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'RESTful APIs: Examples'
footer: 'Marco Robol - Trento, 2024/2025 - Software Engineering'
---

# **RESTful APIs: examples**

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

---

## RESTful concepts

> A complete guide to RESTful [www.restapitutorial.com](https://www.restapitutorial.com/)

CRUD operations are mapped to the standard HTTP verbs.

| Operation | HTTP Verb    |   URI          |   Req body  | Resp body  | success |
|-----------|--------------|----------------|-------------|------------|---------|
| Search    |  GET         | /products      |  Empty      | [Product+] |   200   |
| Create    |  POST        | /products      |  Product    | Product    |   201   |
| Read      |  GET         | /products/:id  |  Empty      | Product    |   200   |
| Update    |  PUT / PATCH | /products/:id  |  Product*   | Product    |   200   |
| Delete    |  DELETE      | /products/:id  |  Empty      | Empty      |   204   |

> https://www.restapitutorial.com/introduction/httpmethods

---

# Designing your RESTful APIs

Start from your user stories and design RESTful APIs for each of them:

- Identify resources and define their structure
- Organize into main and sub-resources
- Define supported methods and accepted parameters / constraints 
- Define returned status codes

---

# Some (good, but not perfect) examples

Let's find the mistakes:

- https://app.swaggerhub.com/apis/SunSync/SunSync/2.0.0

- https://ingegneriadelsoftware.docs.apiary.io/#

- https://unidomus.docs.apiary.io/#

- https://app.swaggerhub.com/apis/KENNY2817QM/TrentoJOB/1.0.0

- EasyLib https://easylib.docs.apiary.io/# (https://easy-lib.onrender.com, https://github.com/unitn-software-engineering/EasyLib)

---

# Questions?

marco.robol@unitn.it

---

## Links

Complex APIs require special attention to the relationship between web resources, and ways of traversing the relationships. The same resource could be accessed under different URLs. For example, to get the list of products associated to a company (`/company/:id/products`).

To easily navigate through resources, we should use links in place of ids. For example:

```json
// GET /products/123 JSON:
{ "self": "/products/123", "name": "iPhone", "producer": "/company/456" }

// GET /company/456 JSON:
{ "self": "/company/456", "name": "Apple", "products": "/products?producer=/company/456" }
```

> ***Read the following article:*** [API design: Why you should use links, not keys, to represent relationships in APIs
](https://cloud.google.com/blog/products/application-development/api-design-why-you-should-use-links-not-keys-to-represent-relationships-in-apis)

