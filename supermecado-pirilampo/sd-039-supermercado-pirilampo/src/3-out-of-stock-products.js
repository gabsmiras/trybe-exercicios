const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let arrayOutOfStockProducts = [];
  for (let index = 0; index < stockProducts.length; index += 1){
    if (stockProducts[index].quantityInStock === 0) {
      arrayOutOfStockProducts.push(stockProducts[index].productName);
    }
  }
  return arrayOutOfStockProducts
};

module.exports = { getOutOfStockProducts };
