const { restore } = require('../models/products');
const Product = require('../models/products');
const Products = require('../models/products');
const sortCategoriesForInsert = require('./utils');

const productsController = { 
    getProducts: async (req,res) => {
        const data = await Products.findAll();
        return res.json(data);
    },
    postProduct: async (req,res) => {
        try{
            const {body} = req;
            const newProduct = {...body,isPublished:false}
            const result = await Products.create(newProduct);
            return res.status(201).json(result);
        } catch{
            return res.status(500).send();
        }
    },
    patchProduct: async(req,res) => {
        try{
            const {productId} = req.params;
            const product = await Product.findByPk(productId);
            if(product.mrp < product.price && product.stock <= 0)
                return res.status(422).send(["MRP should be less than equal to the Price","Stock count is 0"]);
            if(product.mrp < product.price)
                return res.status(422).send(["MRP should be less than equal to the Price"]);
            if(product.stock <= 0)
                return res.status(422).send(["Stock count is 0"]);
            
            product["isPublished"] = true;
            console.log(product);
            await Product.update({isPublished: true},{where:{id:product.id}});
            return res.status("204").send();
        }catch(ex){
            console.error(ex);
            return res.status(500).send();
        }
    },
    putProducts: (req,res) => {
        return res.status(405).send();
    },
    deleteProduct: (req,res) => {
        return res.status(405).send();
    },

    processOrders: (req,res) => {
        const {body} = req;
        console.log(body)
        const result = sortCategoriesForInsert(body);
        return res.json(result).send();
    }
}
    

module.exports = productsController;
