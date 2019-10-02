var express = require('express');
var app = express();
var cors = require('cors');
const path = require('path');

var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

var Product = require('./productCatalog-API/restapi/model/productModel');

var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/catalogger', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./productCatalog-API/restapi/routes/productRoutes');

routes(app);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function(){
    console.log('Product Catalog -  RESTful web services with Nodejs started on: ' + port);
});