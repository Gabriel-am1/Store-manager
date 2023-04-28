const { productModel } = require('../models');

const getAllController = async () => {
  const products = await productModel.getAllController();

  return products;
};

const getByIdController = async (id) => {
  const product = await productModel.getByIdController(id);

  return product;
};

const create = async (name) => {
  const insertId = await productModel.createProd(name);
  return { id: insertId, name };
};

module.exports = {
  getAllController,
  getByIdController,
  create,
};