const { productService } = require('../services');

const getAllController = async (req, res) => {
  const data = await productService.getAllService();

  return res.status(200).json(data);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;

  const data = await productService.getByIdService(id);

  if (!data) res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(data);
};

module.exports = {
  getAllController,
  getByIdController,
};