const ProductModel = require('../Models/productModel')


const createProduct = async ( req, res)=>{

    try{

        let data = req.body

        let { name , price , ratings , description} = data
        if(!name) return res.status(400).send({status : false , message : "please Enter name"})
        if(!price) return res.status(400).send({status : false , message : "please Enter price"})
        if(!ratings) return res.status(400).send({status : false , message : "please Enter ratings"})
        if(!description) return res.status(400).send({status : false , message : "please Enter description"})

        const Product = await ProductModel.create(data)
        return res.status(201).send({status : true , data : Product , message : "successFully created product"})

    }catch(err){
        return res.status(500).send({status : false, message : err.message})
    }
}

const getProduct = async (req, res)=>
{
    try{
        const products = await ProductModel.find()
        
        return res.status(200).send({status : true, data : products})
    }catch(err){
        return res.status(500).send({status : false, message : err.message}) 
    }
}

const updateProduct = async (req, res)=>{
    const ProductId = req.params.id
    try{
        const data = req.body
        let update = await ProductModel.findByIdAndUpdate(ProductId , data , {new : true})
        return res.status(200).send({status : true, message : "product updated successfully" , data : update})

    }catch(err){
        return res.status(500).send({status : false, message : err.message}) 
   
    }
}

const deleteProduct = async (req, res)=>{

    const ProductId = req.params.id
    try{
        const product = await ProductModel.findByIdAndDelete(ProductId)
        return res.status(200).send({status : true , message : "product deleted Successfully"})
    }catch(err){
        return res.status(500).send({status : false, message : err.message}) 
   
    }
}


module.exports = { createProduct , getProduct , deleteProduct , updateProduct }