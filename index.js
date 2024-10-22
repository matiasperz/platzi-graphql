'use scrict'
const cors = require('cors');
require('dotenv').config();
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

// Configurar los resolvers
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000
const isDev = process.env.NODE_ENV !== 'production'

// Definiendo el esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib/schema.graphql'),
  'utf-8'
)
const schema = makeExecutableSchema(
  {
    typeDefs, resolvers
  }
)

app.use(cors());

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => {
  console.log('Server is listening at: http://localhost:' + port + '/api')
})