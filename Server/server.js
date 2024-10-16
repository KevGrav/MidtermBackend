const express = require('express')
const app = express()
const logger = require("morgan");
const cors = require("cors")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const pantryRouter = require("./routers/pantryRouter")
const cookieParser = require('cookie-parser') // gives ability to view cookies

require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(cookieParser())  // Give access to req.cookies

app.use(express.json())   // Gives access to the req.body

app.use(cors({
    origin: ["http://localhost:5173",  "http://localhost:5174"  ],
    //credentials: true
}))

//other use middleware
app.use(logger("dev"));
app.use("/api/pantry", pantryRouter);


app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected to Database")
    })
    console.log(`Server is running on port: ${port} `)
})

