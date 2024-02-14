var productmodel = require('../model/productmodel')

exports.insert = async (req,res) =>{  

    var product = await productmodel.create(req.body)

    res.status(200).json({
        product
    })
}
exports.getproduct = async  (req, res) => {

    var product = await productmodel.find().populate('cat_id');

    res.status(200).json({        
        product    
    })
} 
exports.sin_p = async (req,res) => {

    var id = req.params.id;

    var product = await productmodel.findById(id,req.body).populate('cat_id');

    res.status(200).json({
        product       
    })

}

exports.product_list = async  (req, res) => {

    var id = req.params.id;

    var product = await productmodel.find({cat_id:id});

    res.status(200).json({        
        product    
    })
} 
