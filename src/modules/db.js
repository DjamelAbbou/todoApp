import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let dbPromise;

if (!process.env.MONGO_URI) {
  throw new Error("Please add your Mongo URI to envs");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  dbPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  dbPromise = client.connect();
}

export function jsonify(val) {
  return JSON.parse(JSON.stringify(val));
}

export default dbPromise;
