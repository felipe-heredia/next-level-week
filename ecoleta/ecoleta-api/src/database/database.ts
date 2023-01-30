import path from 'path'
import knex from 'knex'

const dbConnect = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
})

export default dbConnect
