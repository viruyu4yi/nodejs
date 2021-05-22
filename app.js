const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const authRouter = require('./routes/authRouter');

app.use("/auth", authRouter);
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION, 
{ useNewUrlParser: true ,
 useUnifiedTopology: true },
() => console.log('connected to DB!'),
);

//Listening server
app.listen(3000);