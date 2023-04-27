const connection = require('./connection');

const getAllController = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const getByIdController = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE ID = ?;',
    [id],
  );
  return product;
};

module.exports = {
  getAllController,
  getByIdController,
};