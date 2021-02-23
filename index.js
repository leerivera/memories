require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./server/routes/posts.js');

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


app.use('/posts', postRoutes);


 // "start": "nodemon --exec babel-node index.js"

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
   app.use(express.static(__dirname  + '/build'));
   app.get('*', (req, res) => {
      res.sendFile(__dirname + '/build/index.html');
   });
}

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
   .then(() => {
      app.listen(PORT, () => console.log(`running ${PORT}`));
   })
   .catch((error) => console.log(error.message));
