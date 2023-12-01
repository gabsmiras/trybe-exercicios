const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let arrayLowStockProducts = [];
  for (let index = 0; index < stockProducts.length; index += 1){
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10){
    arrayLowStockProducts.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`);
    }
  }
  return arrayLowStockProducts
};
getLowStockProducts();

module.exports = { getLowStockProducts };
