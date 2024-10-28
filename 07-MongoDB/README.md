---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'MongoDB'
footer: 'Marco Robol - University of Trento, A.Y. 2024/2025 - Software Engineering'
---

# **MongoDB and Mongoose**

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

*Academic year 2024/2025*

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

---

# What is MongoDB - [mongodb.com](https://www.mongodb.com)

A distributed, **document-oriented** database that stores data in JSON-like documents, where fields can vary from document to document.

- **Database** - a physical container for collections. Each database gets its own set of files on the file system;
- **Collection** - a group of documents that exists within a single database. Collections do not enforce a schema;
- **Document** model maps to the **objects** in your application code; Typically, all documents in a collection are of similar or related purpose;
  ```json
  { "name": "notebook",
    "size": { "height": 11, "width": 8.5, "unit": "in" },
    "tags": [ "college-ruled", "perforated"] }
  ```
- **Queries** and **aggregation** provide powerful ways to access and analyze your data.

> https://www.mongodb.com/en-us/what-is-mongodb

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

## Access your MongoDB with MongoDB **Shell** `mongosh` https://www.mongodb.com/docs/mongodb-shell/
- `brew install mongosh`
- `mongosh "mongodb://localhost:27017/"`
- `db` to list all databases
-  `use <database_name>` to switch to a database
- `show collections` to list all collections in the current database
- `db.<collection_name>.find()` to list all documents in the current collection
- `db.<collection_name>.insertOne({})` to insert a new document in the current collection

---

## Access your MongoDB with MongoDB **Drivers** https://www.mongodb.com/docs/guides/crud/install/:
- Node.js `npm install mongodb`
```javascript
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("sample_guides");
    const coll = db.collection("planets");
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

```

---

# Mongoose mongoosejs.com

> elegant mongodb object modeling for node.js

> Mongoose provides a straight-forward, **schema-based** solution to model your application data. It includes *built-in type casting, validation, query building, business logic hooks* and more, out of the box.


---

## Get Mongoose

    $ npm install mongoose

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

> https://mongoosejs.com/docs/guide.html

---

## Defining your schema

```javascript
import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```

---

**Ids** - By default, Mongoose adds an _id property to your schemas.

```javascript
bookSchema.path('_id'); // ObjectId { ... }
```

## Creating a model

To use our schema definition, we need to convert our **bookSchema** into a **Model** we can work with. To do so, we pass it into mongoose.model(modelName, schema):

```javascript
const BookModel = mongoose.model('Book', bookSchema);
```

When you create a new document, a new _id of type ObjectId is created.

```javascript
const doc = new BookModel();
doc._id instanceof mongoose.Types.ObjectId; // true
```

---

## Querying

> https://mongoosejs.com/docs/models.html#querying

Finding documents is easy with Mongoose, which supports the rich query syntax of MongoDB. Documents can be retrieved using a model's **find**, **findById**, **findOne**, or **where** static methods.

```javascript
BookModel.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);
```

## Saving

> https://mongoosejs.com/docs/documents.html#updating-using-save


```javascript
const doc = await MyModel.findOne();
doc.name = 'foo';
await doc.save();
```

---

# Subdocuments versus Nested Paths

> https://mongoosejs.com/docs/subdocs.html#subdocuments-versus-nested-paths

```javascript
// Subdocument
const subdocumentSchema = new mongoose.Schema({
  child: new mongoose.Schema({ name: String, age: { type: Number, default: 0 } })
});
const Subdoc = mongoose.model('Subdoc', subdocumentSchema);
// subdoc.child may be undefined

// Nested path
const nestedSchema = new mongoose.Schema({
  child: { name: String, age: { type: Number, default: 0 } }
});
const Nested = mongoose.model('Nested', nestedSchema);
// nested.child will never be undefined
```

---

# Populate

> https://mongoosejs.com/docs/populate.html

```javascript
const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});
const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});
const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

Story.findOne({ title: 'Casino Royale' })
.populate('author').exec(function (err, story) { ... });
```

---

# MongoDB with mongoose in EasyLib

> https://github.com/unitn-software-engineering/EasyLib

How to run: `npm run start_local`

#### package.json
```json
  "scripts": {
    "start": "node index.js",
    "dev": "node -r dotenv/config index.js" }, ...
```

What is *-r dotenv/config* ? ...

---

### dotenv - www.npmjs.com/package/dotenv

    $ npm install dotenv

> Dotenv loads environment variables from a .env file into process.env.

```javascript
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working
```

**Preload** - You can use the --require (-r) command line option to preload dotenv. By doing this, you do not need to require and load dotenv in your application code.

    $ node -r dotenv/config your_script.js

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

```javascript
// https://mongoosejs.com/docs/subdocs.html#adding-subdocs-to-arrays
const Parent = mongoose.model('Parent');
const parent = new Parent();
parent.children.push({ name: 'Liesl' });

// https://mongoosejs.com/docs/subdocs.html#subdoc-parents
const schema = new Schema({
  docArr: [{ name: String }],
  singleNested: new Schema({ name: String })
});
````

- Apply populate() when necessary.

---

# Questions?

marco.robol@unitn.it

