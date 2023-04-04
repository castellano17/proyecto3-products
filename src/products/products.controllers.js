const Products = require("../models/products.models");

const findAllProducts = async () => {
    const products = await Products.findAll();
    return products;
};

const findProductById = async (id) => {
    const product = await Products.findOne({
        where: {
            id: id,
        },
    });
    return product;
};

const createProduct = async (productObj) => {
    const newPost = await Products.create({
        name: productObj.name,
        description: productObj.description,
        price: productObj.price,
        stock: productObj.stock,
    });
    return newPost;
};

const updateProduct = async (id, productObj) => {
    const selectedProduct = await Products.findOne({
        where: {
            id: id,
        },
    });

    if (!selectedProduct) return null;

    const updateProduct = await selectedProduct.update(productObj);
    return updateProduct;
};

const deleteProduct = async (id) => {
    const product = await Products.destroy({
        where: {
            id: id,
        },
    });
    return product;
};

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
