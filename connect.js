const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:jagastrikas@cluster0.u3aqwzf.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      name: "jagadeesh",
      department: "cse",
    }
    const result = await haiku.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
