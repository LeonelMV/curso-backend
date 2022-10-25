const Product = require('../models/product');
const { ObjectId } = require('mongoose');

const getProducts = (criteria) => {
    return new Promise((resolve, reject) => {
        Product.find({}, (err, result) => {
            if(err){
                reject(err);
            }
            resolve(result);
            console.log(result)
        });
    });
}

const createProduct = (name, value) => {
    return new Promise((resolve, reject) => {
        Product.findOne({ name }, (err, result) => {
            if(err){
                reject(err);
            }
            if(result){
                reject("El producto ya existe");
            }
            const newProduct = new Product({ name, value });
            newProduct.save(() => {
                resolve(newProduct);
            });
        });
    });
}

const updateProduct = (id, name, value) => {
    return new Promise((resolve, reject) => {
        Product.findByIdAndUpdate({ _id: id }, { name, value }, (err, result) => {
            if(err){
                reject(err);
            }
            resolve();
        });
    });
}

const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        Product.findByIdAndRemove(id, (err, result) => {
            if(err){
                reject(err);
            } else if (!result){
                reject("El ID ingresado no existe.");
            }
            resolve(result);
        });
    });
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}