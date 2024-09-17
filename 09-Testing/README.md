---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'Testing'
footer: 'Marco Robol - Trento, 2024 - Software Engineering'
---

# **Testing**

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

*Academic year 2023/2024 - Second semester*

---

# Links

> **EasyLib repos**
> BackEnd - https://github.com/unitn-software-engineering/EasyLib
> Vue FrontEnd - https://github.com/unitn-software-engineering/EasyLibVue

> **EasyLib deploys**
> Basic Frontend - https://easy-lib.onrender.com/
> Vue Frontend - https://easy-lib.onrender.com/EasyLibApp/ or https://unitn-software-engineering.github.io/EasyLibApp/

---

# Testing with Jest

> A JavaScript Testing Framework with a focus on simplicity - jestjs.io

---

## Install Jest in **develompment** environment and run it

1. `npm install --save-dev jest`

2. Create a `sum.test.js`

    ```javascript
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
    ```
    > https://jestjs.io/docs/en/getting-started.html

3. Run `jest`

---

## Testing a function *concatenateStrings(a, b)*

`./someModule.js`
```javascript
function concatenateStrings (a, b) { return '' + a + b }
module.exports = concatenateStrings
```

`./someModule.test.js`
```javascript
const conc = require('./someModule')
test('conc 2+2', () => {
    expect(conc(2, 2)).toBe('22');
});
test('concat test', () => {
    expect(conc('a','b')).toBe('ab');
});
test('concat null', () => {
    expect(conc(null,null)).toBe('nullnull');
});
```

---

## Testing an API with `node-fetch`

`./api.test.js`
```javascript
const fetch = require("node-fetch");
const url = process.env.HEROKU || "http://localhost:3000"
it('works with get', async () => {
    expect.assertions(1)
    expect( ( await fetch(url) ).status ).toEqual(200)
})
it('works with post', async () => {
    expect.assertions(1)
    var response = await fetch(url+'/courses', {
        method: 'POST', body: JSON.stringify({name: 'hello course'}),
        headers: { 'Content-Type': 'application/json' }
    })
    expect( ( await response.json() ).status ).toEqual(201)
})
```
`npm install --save-dev node-fetch`: This requires the server to be running!

---

## Testing an API with `supertest`

> https://www.npmjs.com/package/supertest `npm install --save-dev supertest`

`EasyLib\app\app.test.js`
```javascript
const request = require('supertest');
const app     = require('./app');

test('app module should be defined', () => {
  expect(app).toBeDefined();
});

test('GET / should return 200', () => {
  return request(app)
    .get('/')
    .expect(200);
});
```

---

# Configuring Jest on EasyLib using *dotenv module*

> https://lusbuab.medium.com/using-dotenv-with-jest-7e735b34e55f

1. Add *test* **script** to `package.json`:

```json
"scripts": {
    "start": "node api.js",                        // dotenv not preloaded
    "dev": "node -r dotenv/config index.js",       // dotenv preloaded
    "test": "jest --setupFiles dotenv/config"      // dotenv preloaded
```

2. Run jest `npm test`

Alternatively...

---

## Configure jest to load *environment variables* from `.env` without preloading *dotenv module* 

1. In `package.json` do not preload dotenv `"test": "jest"`

1. From https://jestjs.io/docs/en/configuration.html, create `jest.config.js` and set:

```javascript
module.exports = {
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
  verbose: true
```

2. Create file `./.jest/setEnvVars.js` to load dotenv:

```javascript
require("dotenv").config()
```

---

## Testing EasyLib *token-authenticated* APIs on *mongodb* 

`EasyLib\app\booklendings.test.js`
```javascript
const request  = require('supertest');    const app      = require('./app');
const jwt      = require('jsonwebtoken'); const mongoose = require('mongoose');

describe('GET /api/v1/booklendings', () => {

  beforeAll( async () => { jest.setTimeout(8000);
    app.locals.db = await  mongoose.connect(process.env.DB_URL); });
  afterAll( () => { mongoose.connection.close(true); });
  
  var token = jwt.sign( {email: 'John@mail.com'},
    process.env.SUPER_SECRET, {expiresIn: 86400} ); // create a valid token
  
  test('POST /api/v1/booklendings with Student not specified', () => {
    return request(app).post('/api/v1/booklendings')
    .set('x-access-token', token).set('Accept', 'application/json')
    .expect(400, { error: 'Student not specified' });
  });
```

---

## Test EasyLib with *mock-functions*

`EasyLib\app\books.test.js` https://jestjs.io/docs/en/mock-functions

```javascript
describe('GET /api/v1/books', () => {
  let bookSpy; // Moking Book.find method
  beforeAll( () => {
    const Book = require('./models/book');
    bookSpy = jest.spyOn(Book, 'find').mockImplementation((criterias) => {
      return [{ id: 1010, title: 'Jest' }];
    });
  });
  afterAll(async () => { bookSpy.mockRestore(); bookSpyFindById.mockRestore(); });

  test('GET /api/v1/books should respond with an array of books', async () => {
    request(app).get('/api/v1/books').expect('Content-Type', /json/).then( (res) => {
        if(res.body && res.body[0])
          expect(res.body[0]).toEqual({self:'/api/v1/books/1010',title:'Jest'})
    });
  });
});
```

---

# Coverage

Configure Jest to  activate **coverage**

> https://jestjs.io/docs/configuration#collectcoverage-boolean:

`package.json`
```json
"jest": {
    "verbose": true,
    "collectCoverage": true
}
```

Run tests with `npm run test`

---

# Questions?

marco.robol@unitn.it
