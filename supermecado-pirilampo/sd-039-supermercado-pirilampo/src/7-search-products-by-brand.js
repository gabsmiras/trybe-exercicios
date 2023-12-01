const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  // Desenvolva seu código dentro dessa função...
  let arrayInfoProduct = [];
  for (let index = 0; index < stockProducts.length; index += 1){
    if (stockProducts[index].brand === brand) {
      arrayInfoProduct.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`
      })
    }
  };
  return arrayInfoProduct
}

module.exports = { searchProductsByBrand };
