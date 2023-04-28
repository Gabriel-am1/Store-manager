// const express = require('express');
// const { productController } = require('./controllers');
// const { fieldsValidationProduct } = require('./middlewares/productMiddleware');
// const errorHandler = require('./middlewares/errorMiddleware');

// const app = express();

// app.use(express.json());

// // não remova esse endpoint, é para o avaliador funcionar
// app.get('/', (_request, response) => {
//   response.send();
// });

// app.get('/products', productController.getAllController);
// app.get('/products/:id', productController.getByIdController);
// app.post('/products/', fieldsValidationProduct, productController.createController);

// app.use(errorHandler);

// // não remova essa exportação, é para o avaliador funcionar
// // você pode registrar suas rotas normalmente, como o exemplo acima
// // você deve usar o arquivo index.js para executar sua aplicação 
// module.exports = app;

const express = require('express');

const errorHandler = require('./middlewares/errorHandler');
const { productsRouter, salesRouter } = require('./routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

app.use(errorHandler);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima

// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
