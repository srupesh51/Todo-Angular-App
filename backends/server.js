const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');
const logger  = require('morgan');
const mongoose = require('mongoose');
const cors = require("cors");
const todoRoutes = require('./routes/todoRoutes');
const sls = require('serverless-http');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
// configure app
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
// set the port
const port = process.env.PORT || 3000;
// connect to database
// 'mongodb://localhost/mern-todo-app'
mongoose.connect(process.env.MODE === 'production' ? 'mongodb+srv://dbuser:password134@cluster0-3ecdp.mongodb.net/todoDb' : 'mongodb://localhost/mern-todo-app', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to Database!');
})
.catch((err) => {
    console.log('Connection Failed!!!',err);
});
app.use('/api', todoRoutes);
app.get('/', (req, res) => {
    return res.end('Api working');
})
app.get('/hello', (req, res) => {
    return res.end('Api working fine');
})
// catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
app.listen(port, () => {
    console.log(`App Server Listening at ${port}`);
});

module.exports.handler = sls(app);