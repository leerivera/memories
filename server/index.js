const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

import dotenv from 'dotenv'
const postRoutes = require('./routes/posts.js');

dotenv.config();






const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


app.use('/posts', postRoutes);




const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT, () => console.log(`running ${PORT}`)))
   .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

