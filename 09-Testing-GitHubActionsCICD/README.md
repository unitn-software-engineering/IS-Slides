---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'Testing - Continuous Integration - Continuous Deployment'
footer: 'Marco Robol - Trento, 2023 - Software Engineering'
---

# **Testing - Continuous Integration - Continuous Deployment**

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

*Academic year 2022/2023 - Second semester*

---

# Contents of today class

In today's class, we will see how to use Jest to test our APIs, how to set-up a continuous integration environment with Travis CI, and how to deploy our application on Heroku.

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

# CI-CD with GitHub Actions

**Automate your workflow from idea to production** - GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

---

## Workflows

- **Node.js CI** - This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node - https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

...if build succeed, we want to deploy to Heroku...

- **Deploy to Render.com** - A very simple GitHub action that allows you to deploy on Render - https://github.com/marketplace/actions/render-github-action

---

## Node.js CI Workflow

`EasyLib/.github/workflows/node.js.yml`
```yaml
name: Node.js CI
on:
  push:
    branches: [ master ]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x]
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci #similar to npm install , except it's meant to be used in automated environments
    - run: npm run build --if-present
    - run: npm test
```

---

## Environment variables

`EasyLib/.github/workflows/node.js.yml`
```yaml
name: Node.js CI

    # This is used to load Environment-level secrets, from the specified environment.
    # Instead, repository secrets are loaded by default.
    environment: production
    
    env:
      SUPER_SECRET: ${{ secrets.SUPER_SECRET }} # Must be set as a GitHub secret
      DB_URL: ${{ secrets.DB_URL }} # Must be set as a GitHub secret
...
```

---

## Deploy on Render.com

`EasyLib/.github/workflows/node.js.yml`
```yaml
...
jobs:
  test:
    ...  
  deploy:
    name: Wait for Deploy
    runs-on: ubuntu-latest
    needs: test
    steps:
      - name: Wait for Render Deployment
        uses: bounceapp/render-action@0.6.0
        # https://github.com/marketplace/actions/render-github-action
        with:
          render-token: ${{ secrets.RENDER_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          service-id: ${{ secrets.RENDER_ID }}
          # srv-xxxxxxxxxxxxxxxxxxxx
          retries: 20
          wait: 16000
          sleep: 30000
```

---

## `.gitignore` - Ignoring files from git versioning

- You can start from generic `.gitignore` file generated on www.gitignore.io, such as, https://www.gitignore.io/api/node,windows,linux,visualstudiocode

- **Make sure to always ingore**: `node_modules` `coverage` `.env`

- Put the `.gitignore` file itself under version control `git add .gitignore`

---

# Front-end deployment

> EasyLib Front-end Repository
> https://github.com/unitn-software-engineering/EasyLibVue

> EasyLib deployed front-end application
> https://unitn-software-engineering.github.io/EasyLibApp/

---

## Frontend already in the same repository as your webAPIs

`EasyLib\app\app.js`
```javascript
// Serving frontend files from process.env.FRONTEND
app.use('/', express.static(process.env.FRONTEND || 'static'));
// If request not handled, try in ./static
app.use('/', express.static('static'));
// If request not handled, try with next middlewares ...
```

`EasyLib\.env` These configurations are used only locally, never commit these settings!
```yaml
# Path to external frontend - If not provided, basic frontend in static/index.html is used
FRONTEND='../EasyLibVue/dist'
```

Separately setup Heroku with appropriate environment variables!

---

## Build and serve Vue app on *GitHubPages* pages.github.com

When ready to ship app to production, run the following: `npm run build`. This generates minified html+javascript frontend in `.\dist` folder. Create a **dedicated repository for hosting** on github to host your frontend, then push your built frontend manually or with a script `EasyLibVue\deploy.sh`: 

```bash
npm run build # build Vue app
cd dist # navigate into the build output directory
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/unitn-software-engineering/EasyLibApp.git master:gh-pages
```

***MUST be a repository dedicated to hosting, different from your Frontend repository!***
Run `.\deploy.sh` (In case of errors, manually delete the folder `.\dist`).

> https://cli.vuejs.org/guide/deployment.html#github-pages

---

# Questions?

marco.robol@unitn.it
