var mongoose = require('mongoose')

var productschema = new mongoose.Schema({

    title:{
        type:String
    },    
    price:{
        type:String
    },
    product_image:{
        type:String
    },
    cat_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categprydata"
    }

})

module.exports = mongoose.model('productdata',productschema)