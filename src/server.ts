import express from "express"
import dotenv from 'dotenv'
require('dotenv').config();
// console.log(process.env)

import mustache from 'mustache-express'
import path from "path"
import mainRoutes from './routes/index'


const server = express()
server.use(mainRoutes)

server.use((req, res) => {
    res.send('Página não encontrada.')
})


server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, "views"))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.listen(process.env.PORT);