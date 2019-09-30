var express = require('express');
var app = express();
var cors = require('cors');

var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

var Product = require('./restapi/model/productModel');

var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/catalogger', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./restapi/routes/productRoutes');

routes(app);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function(){
    console.log('Product Catalog -  RESTful web services with Nodejs started on: ' + port);
});