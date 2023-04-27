const { productService } = require('../services');

const getAllController = async (req, res) => {
  const data = await productService.getAllController();

  return res.status(200).json(data);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;

  const data = await productService.getByIdController(id);

  if (!data) res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(data);
};

const createController = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const response = await productService.create(name);
  res.status(201).json(response);
};

module.exports = {
  getAllController,
  getByIdController,
  createController,
};