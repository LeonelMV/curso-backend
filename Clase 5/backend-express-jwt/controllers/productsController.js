const { productsService } = require('../service');

const getProducts = async (req, res) => {
    try{
        const products = await productsService.getProducts();
        res.status(200).send(products);
    }catch(error){
        res.status(500).send(error);
    }
}

const createProduct = async (req, res) => {
    try{
        const { name, value } = req.body;
        console.log(name, value)
        const newProduct = await productsService.createProduct(name, value);
        res.status(200).send({ message: "El producto ha sido creado correctamente ", newProduct});
    }catch(error){
        res.status(500).send(error);
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, value } = req.body;
    try{
        const updatedProduct = await productsService.updateProduct(id, name, value);
        res.status(200).send({ message: "El producto ha sido actualizado correctamente ", updatedProduct});
    }catch(error){
        res.status(500).send(error);
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try{
        const deletedProduct = await productsService.deleteProduct(id);
        res.status(200).send({ message: "El producto ha sido eliminado correctamente ", deletedProduct});
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}