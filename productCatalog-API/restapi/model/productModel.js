var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({
    prodname: { 
        type: String, 
        Required: 'Product name cannot be left blank.' 
    },
    proddesc: { 
        type: String,    
        Required: 'Product description cannot be left blank.'
    },
    prodprice: { 
        type: String,     
        Required: 'Product price cannot be left blank.'
    }
    
});

module.exports = mongoose.model("Products", productSchema);