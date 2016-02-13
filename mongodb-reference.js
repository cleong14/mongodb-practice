// create and use database
// mongo-practice being the database name
use mongo-practice;

// gets list/array of created collections
db.getCollectionNames();

// creates collections
db.createCollection('name-of-collection');

// doing inserts and inserting with an array turns it into a bulkInsert automatically

// find movies released between certain dates
db.movies.find({$or: [{ {year: {$gte: 1990}}, {year: {$lt: 2000}} }] });

// adding new content to already existing item in collection
// adding synopsis to already existing item in below example
db.movies.update({title: 'The Hobbit: An Unexpected Journey'}, {$set: {synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'}});

// text search - use regex
// below example finds movies with synopsis that begins with B
db.movies.find({synopsis: /^B/ /*<---regex-goes-here*/ });

// below example finds bilbo but not smaug
db.movies.find({$and: [{synopsis: /Bilbo/}, {synopsis: {$not: /Smaug/}}]});

// below example finds synopsis with gold and dragon and makes sure its not case sensitive
db.movies.find({$and: [{synopsis: /gold/i}, {synopsis: /dragon/i}]});

db.users.insert([{username: "GoodGuyGreg", first_name: "Good Guy", last_name: "Greg"}, {username: "ScumbagSteve", full_name: {first: "Scumbag", last: "Steve"}}]);

db.posts.insert([
{
  username : "GoodGuyGreg",
  title : "Passes out at party",
  body : "Wakes up early and cleans house"
},

{
  username : "GoodGuyGreg",
  title : "Steals your identity",
  body : "Raises your credit score"
},

{
  username : "GoodGuyGreg",
  title : "Reports a bug in your code",
  body : "Sends you a Pull Request"
},

{
  username : "ScumbagSteve",
  title : "Borrows something",
  body : "Sells it"
},

{
  username : "ScumbagSteve",
  title : "Borrows everything",
  body : "The end"
},

{
  username : "ScumbagSteve",
  title : "Forks your repo on github",
  body : "Sets to private"
}
]);

db.comments.insert({username: "GoodGuyGreg", comment: "Hope you got a good deal!", post: ObjectId("56bd93dfa8c212af96380ce5")});

db.comments.insert([
  {
    username: "GoodGuyGreg",
    comment: "What's mine is yours!",
    post: ObjectId("56bd93dfa8c212af96380ce5")
  },

  {
    username: "GoodGuyGreg",
    comment: "Don't violate the licensing agreement!",
    post: ObjectId("56bd93dfa8c212af96380ce6")
  },

  {
    username: "ScumbagSteve",
    comment: "It still isn't clean",
    post: ObjectId("56bd93dfa8c212af96380ce1")
  },

  {
    username: "ScumbagSteve",
    comment: "Denied your PR cause I found a hack",
    post: ObjectId("56bd93dfa8c212af96380ce3")
  }
]);