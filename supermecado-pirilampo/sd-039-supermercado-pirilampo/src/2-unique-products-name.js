const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let arrayProductsName = Array(0).fill(0);
  for (let index = 0; index < stockProducts.length; index += 1){
    arrayProductsName.push(stockProducts[index].productName);
  }
  return arrayProductsName
};

module.exports = { getUniqueProductsName };
