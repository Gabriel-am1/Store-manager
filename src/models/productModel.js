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

const createProd = async (product) => {
  // const columns = Object.keys(product).join(', ');

  // const placeHolders = Object.keys(product)
  //   .map((_key) => '?')
  //   .join(', ');
  
const [{ insertId }] = await connection.execute(
  'INSERT INTO StoreManager.products (name)  VALUES (?);',
  [product],
  );
return insertId;
};

module.exports = {
  getAllController,
  getByIdController,
  createProd,
};