const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql');
const resolvers= require('./schemas/resolver');
const connectDB = require('./config/db')

const port = process.env.PORT || 6000;


const app = express();

// connect to the database
connectDB();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: resolvers.schema, // Pass the schema from the resolvers
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`server running on port${port}`.cyan.underline.bold));


