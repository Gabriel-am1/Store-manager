// const productModel = require('./productModel');
// const connection = require('./connection');

// module.exports = {
//   productModel,
//   connection,
// };

const connection = require('./connection');
const productsModel = require('./productModel');
const salesProductModel = require('./salesProductsModel');

module.exports = {
  productsModel,
  connection,
  salesProductModel,
};