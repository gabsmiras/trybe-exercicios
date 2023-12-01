const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  let arrayInfoProduct = [];
  for (let index = 0; index < stockProducts.length; index += 1){
    if (stockProducts[index].onSale == true) {
      arrayInfoProduct.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        onSale: stockProducts[index].onSale
      })
    }
  }
  return arrayInfoProduct
};

module.exports = { getProductsOnSale };
