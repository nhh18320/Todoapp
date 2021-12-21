const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const port = 8000;

const app = express();

const todoRoutes = require('./routes/Todo')

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/todoapp', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if(err) {
        console.error('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection: ' + err)
    }
});



app.use("/api", todoRoutes);

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Lisening to http://localhost:${port}`);
});