const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000
const connectDB = require("./config/db")
const cors = require("cors")

//const variable = require("./models/")

//1.0
const app = express()

//1.01
app.use(express.static("public"))

//3.30
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

//Connect Database
connectDB()

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    console.log(`success`)
  })
}

app.listen(PORT, () => {
  console.log(`DevArtist Server is runing on port ${PORT}`)
})
