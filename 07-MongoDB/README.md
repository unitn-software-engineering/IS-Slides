---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'MongoDB'
footer: 'Marco Robol - University of Trento, A.Y. 2025/2026 - Software Engineering'
---

# **MongoDB and Mongoose**

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

---

# Contents of today class

- MongoDB https://www.mongodb.com
  - What is MongoDB? Locally or in the cloud? How to access your MongoDB?
- Mongoose https://mongoosejs.com
  - Schema, Model (querying), Document. 

Tools and services:
- MongoDB [Community Edition](https://www.mongodb.com/products/self-managed/community-edition)
- MongoDB Atlas https://cloud.mongodb.com/
- [MongoDB for VS Code](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)
  - or alternatively MongoDB [Compass GUI](https://www.mongodb.com/products/compass)

<!-- ---

# Questions and answers

![h:450](../vevox.png) -->

---

# What is MongoDB - [mongodb.com](https://www.mongodb.com)

A distributed, **document-oriented** database that stores data in JSON-like documents, where fields can vary from document to document.

- **Database** - a physical container for collections. Each with its own files on the FS;
- **Collection** - a group of documents within a database (no schema enforced);
- **Document** - maps to **objects** in your application code;
  ```json
  { "name": "notebook",
    "size": { "height": 11, "width": 8.5, "unit": "in" },
    "tags": [ "college-ruled", "perforated"]
  } // Typically, all documents in a collection are of similar or related purpose
  ```

- **Queries** and **aggregation** provide powerful ways to access and analyze your data.

---

## Run MongoDB

##### Locally:

- Install MongoDB Community Edition
  https://www.mongodb.com/docs/manual/administration/install-community/

##### In the cloud:

- Register on [MongoBD Atlas](https://cloud.mongodb.com), create a new Project, and create a Free Cluster
- `Database Access` -> `Add database user` -> `Edit Password`
- `Network Access` -> `Add IP address` -> `0.0.0.0/0` (to allow any IP)
- `Clusters` -> `Connect` -> Get conection String and replace <db_password>
  e.g. `mongodb+srv://admin:<db_password>@cluster0.jyosd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

---

## Access your MongoDB with UI tools: MongoDB for **VS Code**

> https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode
> or alternatively MongoDB Compass https://www.mongodb.com/products/compass

- **Let's try to connect**:
  - to your local server `mongodb://localhost:27017/`
  - to EasyLib cluster on Atlas cloud: `mongodb+srv://admin:<password>@cluster0.jyosd.mongodb.net/?retryWrites=true&w=majority`

---

## Access with `mongosh` **Shell**

- `brew install mongosh`
- `mongosh "mongodb://localhost:27017/"`
- `show dbs` to list all databases
- `use <database_name>` to switch to a database (created when a document is added)
- `show collections` to list all collections in the current database
- `db.createCollection("<collection_name>")` to create a collection
- `db.<collection_name>.find(<query>)` to query documents in current collection
- `db.<collection_name>.insertOne({})` to insert a new document

> https://www.mongodb.com/docs/manual/crud/

---

## Access with **Node.js Drivers** `npm install mongodb`
```javascript
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const db = client.db("easylib");
    const coll = db.collection("books");
    const cursor = coll.find();
    await cursor.forEach(console.log);
  } finally {    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```

> https://www.mongodb.com/docs/drivers/node/current/

---

# Mongoose

> https://mongoosejs.com/docs/index.html - Mongoose provides an elegant **MongoDB** schema-based **object-modeling** for **Node.js**

---

## Getting started with Mongoose

1. Install `$ npm install mongoose`
2. Connect
    ```javascript
    import mongoose from 'mongoose';  // const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/easylib');                                //
    ```
3. Create document
    ```javascript
    const Book = mongoose.model('Book', { name: String });
    const softwareEngineering = new Book({ name: 'Software Engineering' });
    softwareEngineering.save().then(() => console.log('saved!'));                                //
    ```
4. Query
    ```javascript
    const books = await Book.find().exec();                                                    //
    ```

> [www.mongodb.com/docs/drivers/node/current/integrations/mongoose-get-started](https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose-get-started/)

---

## Defining your **schema**

> https://mongoosejs.com/docs/api/schema.html

```javascript
import mongoose from 'mongoose';
const { Schema, SchemaTypes } = mongoose;

const bookSchema = new Schema({
  title:  String,                                       // String
  author: { type: String, required: true },             // String, required
  editor: { name: String, address: String },            // Nested path {name, address}
  comments: [ { body: String, date: Date } ],           // Nested path array
  date: { type: Date, default: Date.now },              // Date, default value
  hidden: Boolean,
  meta: { votes: Number, favs:  Number }.
});
```

By default, Mongoose adds the `_id` property to your schemas as:
```javascript
  _id: Schema.Types.ObjectId                                                                //
```

---

## Creating a **model** and perform **CRUD** operations

> https://mongoosejs.com/docs/api/model.html

```javascript
const Book = mongoose.model('Book', bookSchema);                     // Using schema, create a Model

const doc = await Book.create({title:  'The Mongoose Docs'});        // Constructing Documents
// const doc = new Book({title: 'The Mongoose Docs'});               // Or
// await doc.save();

const q = await Book.find({ year: { $gt: 2023 } }).exec();           // Querying: find, findById, findOne
// const q = await Book.where('date').gt(oneYearAgo).exec();         // or

await Book.deleteOne({ title: 'The Mongoose Docs' });                // Deleting: deleteOne, deleteMany

await Book.updateOne({ title: 'Mongoose' }, { author: 'Marco' });    // Updating
```

---

## Querying Documents

> https://mongoosejs.com/docs/models.html#querying
> https://mongoosejs.com/docs/documents.html#updating-using-save

Mongoose supports the **rich query syntax of MongoDB** (List of MongoDB Query and Projection Operators https://www.mongodb.com/docs/manual/reference/operator/query).

Documents can be retrieved using a model's **find**, **findById**, or **findOne** static methods. 

```javascript
await BookModel.find();
await BookModel.find({ year: { $gt: 2023 } }).exec();                         // find.exec
await BookModel.find({ size: 'small' }).where('createdDate').gt(oneYearAgo);  // find.where

await Blog.findOne({ author: "Marco" });                                      // findOne.exec
await Blog.findOne().where("author").equals("Marco");                         // findOne.where
```

> Promises? https://mongoosejs.com/docs/queries.html#queries-are-not-promises

---

```javascript
const BookSchema = new mongoose.Schema({
  author: {name: String}                                      // Nested path
});                                                           // book.author is a MongooseDocument {undefined}
```

## Introducing multiple schemas [🔗](https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose-get-started/#introduce-multiple-schemas)

```javascript
const { Schema, SchemaTypes } = mongoose;
...
const BookSchema = new mongoose.Schema({
  author: { type: SchemaTypes.ObjectId, ref: 'User', required: true },  // Ref ObjectId
});                                                                                                                  
...
await Book.create({ author: author._id });
await Book.findOne({ title: 'Casino Royale' }).populate('author');
```

> ```javascript
> // https://mongoosejs.com/docs/subdocs.html#subdocuments-versus-nested-paths
> const BookSchema = new mongoose.Schema({
>   author: new mongoose.Schema({ name: String })       // Subdocument; Each subdocument has an _id by default
> });                                                   // book.author may be undefined               
> ```

---

###  Populate

> https://mongoosejs.com/docs/populate.html

```javascript
const authorSchema = Schema({
  name: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]   // One author -> Many books
});
const Author = mongoose.model('Author', authorSchema);

const bookSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Author' }, // One book -> Many authors
  title: String,
});
const Book = mongoose.model('Book', bookSchema);

await Book.findOne({ title: 'Casino Royale' })
.populate('author');                                      // find.populate
```

---

# How to avoid exposing *connection string* in the code? 

We don't want our password in the source code. Let's use env variable e.g. `DB_URL`.

```javascript
import mongoose from 'mongoose';  // const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
```

How can we set the `DB_URL` env variable when we run the script?

1. `$ npm install dotenv`
2. Create a .env file `DB_URL=mongodb://localhost:27017/mydatabase`
3. ```javascript
   import 'dotenv/config'            // require('dotenv').config()
   import mongoose from 'mongoose';  // const mongoose = require('mongoose');
   mongoose.connect(process.env.DB_URL);
   ```
4. `node -r dotenv/config your_script.js`

---

# dotenv

> https://www.npmjs.com/package/dotenv
> `$ npm install dotenv`

Dotenv **module** loads environment variables from a `.env` file into `process.env.`:
```javascript
import 'dotenv/config'            // require('dotenv').config()
console.log(process.env.DB_URL)
```

Alternatively, with **preload** (Node.js --require (-r) command line option to preload), we avoid having dotenv dependency in production:
- Install dotenv as a dev dependency `npm install dotenv --save-dev`
- `node -r dotenv/config your_script.js`

---

# Mongoose in EasyLib

> https://github.com/unitn-software-engineering/EasyLib

How to run: `npm run dev`

#### package.json
```json
  "scripts": {
    "start": "node index.js",
    "dev": "node -r dotenv/config index.js" }, ...
```

What is *-r dotenv/config*? It is used to preload dotenv and expose variable from .env file as environment variables in process.env. *This is useful for development environment where we want to avoid having dotenv dependency in production*.

---

## Let's go back on mongoose and EasyLib

- **mongoose models**
  - app/models/
- **express routers**
  - app/

#### app/models/book.js
```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Book', new Schema({ 
	title: String
}));
```

---

#### app/books.js

```javascript
const Book = require('./models/book');

router.get('', async (req, res) => {
    // https://mongoosejs.com/docs/api.html#model_Model.find
    let books = await Book.find({});
    ...
}
router.get('/:id', async (req, res) => {
    // https://mongoosejs.com/docs/api.html#model_Model.findById
    let book = await Book.findById(req.params.id);
    ...
}
router.post('', async (req, res) => {
    let book = new Book({
          title: req.body.title
    });
    book = await book.save();
    res.location("/api/v1/books/" + book.id).status(201).send();
});
```

---

#### index.js

```javascript
const app = require('./app/app.js');
const mongoose = require('mongoose');

app.locals.db = mongoose.connect(process.env.DB_URL, 
  {useNewUrlParser: true, useUnifiedTopology: true})
.then ( () => {
    console.log("Connected to Database");
    app.listen(8080, () => { console.log(`Server listening`) });
});
```

---

## Define your own collections and their schema

- Starting from your APIs resources, define collections and their schema.

- You may incorporate some resources into others as subdocuments. For example, booklendings could be nested under book.
  > https://mongoosejs.com/docs/subdocs.html#adding-subdocs-to-arrays
  > https://mongoosejs.com/docs/subdocs.html#subdoc-parents
- Querying with populate() when necessary.

---

# Questions?

marco.robol@unitn.it

