const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let ProductsAmount = 0;
  for (let index = 0; index < stockProducts.length; index += 1){
    ProductsAmount += stockProducts[index].quantityInStock;
  }
  return ProductsAmount
};

module.exports = { getProductsAmount };
