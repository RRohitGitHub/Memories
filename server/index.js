import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Cors from 'cors'
import postRoutes from './Routes/post.js'

// Initialize app
const app = express()

// General setup
app.use(bodyParser.json({ limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(Cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Added prefix of /posts to the routes
app.use('/posts',postRoutes)

// MogoDB Atlas
// Connect server with database
const CONNECTION_URL = "mongodb+srv://rohitparab213:Jan@2021@cluster0.og2xw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//Create port for server
const PORT = process.env.PORT || 5000;

// Use mongoose to connect to database
// Returns a promise
mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    .then(()=>app.listen(PORT,() => console.log(`Server running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message))

//Makes sure we do not get any warnings in the console 
mongoose.set('useFindAndModify',false)