import path from 'path'
import express from 'express'
import cors from 'cors'
import { errors } from 'celebrate'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(
  '/uploads/points_image',
  express.static(path.resolve(__dirname, '..', 'uploads', 'points_image'))
)

app.use(errors())

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`> Server listening on port: ${PORT}`)
})
