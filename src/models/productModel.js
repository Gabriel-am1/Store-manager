// const connection = require('./connection');

// const getAllController = async () => {
//   const [products] = await connection.execute(
//     'SELECT * FROM StoreManager.products;',
//   );
//   return products;
// };

// const getByIdController = async (id) => {
//   const [[product]] = await connection.execute(
//     'SELECT * FROM StoreManager.products WHERE ID = ?;',
//     [id],
//   );
//   return product;
// };

// const createProd = async (product) => {
//   // const columns = Object.keys(product).join(', ');

//   // const placeHolders = Object.keys(product)
//   //   .map((_key) => '?')
//   //   .join(', ');
  
// const [{ insertId }] = await connection.execute(
//   'INSERT INTO StoreManager.products (name)  VALUES (?);',
//   [product],
//   );
// return insertId;
// };

// module.exports = {
//   getAllController,
//   getByIdController,
//   createProd,
// };

const connection = require('./connection');

const getAllProd = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
};

const getByIdProd = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE ID = ?;',
    [id],
  );
  return product;
};

const createProd = async (name) => {
  const [insertId] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [name],
  );

  return insertId;
};

const updateProd = async (id, name) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
    [name, id],
  );
  return {
    id,
    name,
  };
};

const deleteByIdProd = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id = ?;',
    [id]);
};

const searchByIdProd = async (name) => {
  const productName = `${name}%`;
  const result = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name LIKE ?',
    [productName],
  );

  return result[0];
};

module.exports = {
  getAllProd,
  getByIdProd,
  createProd,
  updateProd,
  deleteByIdProd,
  searchByIdProd,
};