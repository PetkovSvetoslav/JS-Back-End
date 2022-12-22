// const mongodb = require('mongodb');

// const connectionString = 'mongodb://localhost:27017';
// start();

// async function start() {
// const connection = new mongodb.MongoClient(connectionString, {useUnifiedTopology: true});

// await connection.connect();

// const db = client.db('test');
// const collection = db.collection('test');
// const query = collection.find({});
// const data = await query.toArray();
//     console.log(data);
// }

const mongoose = require('mongoose');
const Person = require('./models/Person');

const connectionString = 'mongodb://localhost:27017/testdb';
start();

async function start() {
await mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});

const person = new Person({  
    name: 'Peter',
    lastName: 'John',
    age: 25
});

await person.save();

const data = await Person
.find({}).where({}).gte().lte().and({}).select().sort({});
console.log(data[0].sayHi());
console.log(data[0].names);

await mongoose.disconnect();
}