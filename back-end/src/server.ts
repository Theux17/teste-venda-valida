import "dotenv/config"
import path from 'path'
import express from 'express'
import { urlencoded } from "body-parser"
import { routes }  from './routes'

const app = express()

app.use(express.static(path.join(__dirname, "..", "..", "front-end")))
app.set("views", path.join(__dirname, "..",  "..", "front-end"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
app.use(urlencoded({ extended: true }))

app.get("/forms", (request, response) => {
  return response.render("index.html")
})

app.use(express.json())
app.use(routes)

app.listen(3000)