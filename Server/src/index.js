const express = require('express')
const morgan = require('morgan')
const helmet = require("helmet")
const cors = require("cors")

const middlewares = require("./middlewares")
// rotas
const filmes = require("./routes/filmesroutes")


const app = express()

// Middlewares
app.use(morgan('common'))
app.use(helmet())
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

app.get("/", (req, res) => res.json({
    mensagem: "Hello 🙉"
}))

app.use("/api/filmes", filmes) 

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const port = process.env.PORT || 1337
app.listen(port, () => console.log("Inciando servidor em localhost: "+port) )