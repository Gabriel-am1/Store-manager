const { productModel } = require('../models');

const getAllController = async () => {
  const products = await productModel.getAllController();

  return products;
};

const getByIdController = async (id) => {
  const product = await productModel.getByIdController(id);

  return product;
};

module.exports = {
  getAllController,
  getByIdController,
};