const connection = require('./connection');

const getAllController = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products;',
  );
  return products;
};

const getByIdController = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE ID = ?;',
    [id],
  );
  return product;
};

module.exports = {
  getAllController,
  getByIdController,
};