const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => stockProducts.length;
  // Desenvolva seu código dentro dessa função...


getUniqueProductsAmount(stockProducts);

module.exports = { getUniqueProductsAmount };
