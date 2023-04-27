// const sinon = require('sinon');
// const { expect } = require('chai') 

// const { productsMockFromDB } = require('./productsMockFromDB');

// const { productService } = require('../../../src/services');

// const { productModel } = require('../../../src/models');
// const e = require('express');

// describe("test service products", () => {
//   describe("Testa quando tem produtos no banco", () => {
//     it("testa a busca por todos os produtos no banco", async () => {
//       sinon.stub(productModel, "getAllProd").resolves(productsMockFromDB);
//       const result = await productService.getAllController();
//       expect(result).to.deep.equal(productsMockFromDB);
//     });

//     it("Testa a busca por um produto no banco", async () => {
//       sinon.stub(productModel, "getByIdProd").resolves(productsMockFromDB);
//       const result = await productService.getByIdController(2);
//       expect(result).to.deep.equal(productsMockFromDB[2]);
//     });

//     it("Testa a inserção de um produto no banco", async () => {
//       sinon.stub(productModel, "createProd").resolves({ insertId: 4 });
//       const result = await productService.createService(
//         "Armadura do Homem de Ferro"
//       );
//       expect(result).to.deep.equal(newProduct);
//     });
//     afterEach(sinon.restore);
// });
// });

const sinon = require('sinon');
const { expect } = require('chai');

const { productsMockFromDB } = require('./productsMockFromDB');

const { productService } = require('../../../src/services');

const { productModel } = require('../../../src/models');
const e = require('express');

describe("test service products", () => {
  describe("Testa quando tem produtos no banco", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("testa a busca por todos os produtos no banco", async () => {
      sinon.stub(productModel, "getAllProd").resolves(productsMockFromDB);
      const result = await productService.getAllController();
      expect(result).to.deep.equal(productsMockFromDB);
    });

    it("Testa a busca por um produto no banco", async () => {
      sinon.stub(productModel, "getByIdProd").resolves(productsMockFromDB[2]);
      const result = await productService.getByIdController(2);
      expect(result).to.deep.equal(productsMockFromDB[2]);
    });

    it("Testa a inserção de um produto no banco", async () => {
      const newProduct = { id: 4, name: "Armadura do Homem de Ferro" };
      sinon.stub(productModel, "createProd").resolves({ insertId: 4 });
      const result = await productService.createService(newProduct.name);
      expect(result).to.deep.equal(newProduct);
    });
  });
});