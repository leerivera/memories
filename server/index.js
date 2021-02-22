const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const postRoutes = require('./routes/posts.js');






const app = express();



app.use(cors());
app.use('/posts', postRoutes);
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

const CONNECTION_URL = 'mongodb+srv://nick:nick317718@cluster0.f4khk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT, () => console.log(`running ${PORT}`)))
   .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

