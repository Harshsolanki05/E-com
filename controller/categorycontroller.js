var categorymodel = require('../model/categorymodel')

exports.insert = async  (req, res) => {  
        
    var catagory = await categorymodel.create(req.body);

    res.status(200).json({        
        catagory   
    })
}
exports.getdata = async  (req, res) => {

    var catagory = await categorymodel.find();

    res.status(200).json({        
        catagory    
    })
}
