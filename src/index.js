const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const userRoutes = require("./routes/users")
const app = express();
const port = process.env.PORT || 9000;
const URI = process.env.URL_API_MONGO;
//middleware
app.use('/api',userRoutes);
//Routes
app.get('/',(req,res)=>{
    res.send("Welcome to my API")
})

app.listen(port,()=> console.log('Server Escuchando por el puerto',port));

// Replace the placeholder with your Atlas connection string
const uri = URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
