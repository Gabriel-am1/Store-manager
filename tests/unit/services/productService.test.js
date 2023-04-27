const sinon = require('sinon');
const { expect } = require('chai') 
const { productsMockFromDB } = require('./productsMockFromDB');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');

describe('product service layer', function () {
    afterEach(function () {
      sinon.restore();
    });

  describe("test service products", function () {
    describe("Testa quando tem produtos no banco", function () {
      it("testa a busca por todos os produtos no banco", async function () {
        sinon.stub(productModel, "getAllController").resolves(productsMockFromDB);
        
        const result = await productService.getAllController();
        expect(result).to.deep.equal(productsMockFromDB);
      });
      describe('busca de um produto', function () {
        it("Testa a busca por um produto no banco", async function () {
          sinon.stub(productModel, "getByIdController").resolves(productsMockFromDB[0]);

          const result = await productService.getByIdController(1);
          expect(result).to.be.deep.equal(productsMockFromDB[0]);
        });

        // describe('busca de um produto inserido', function () {
        //   it("Testa a inserção de um produto no banco", async function () {
        //     sinon.stub(productModel, "createProd").resolves({ insertId: 4 });
        //     const result = await productService.createService(
        //       "Armadura do Homem de Ferro"
        //     );
        //     expect(result).to.deep.equal([productsMockFromDB[4]]);
        //   });
      });
    });
  });
  });