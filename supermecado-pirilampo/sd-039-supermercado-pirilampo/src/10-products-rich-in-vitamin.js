const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  // Desenvolva seu código dentro dessa função...
  let arrayInfoProduct = Array(0).fill(0);
  for (let index = 0; index < stockProducts.length; index += 1){
    if (stockProducts[index].nutritionalInfo.vitamins !== undefined) {
      arrayInfoProduct.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: [stockProducts[index].nutritionalInfo.vitamins]
      })
    }
  }
  
  return arrayInfoProduct
};


module.exports = { getProductsRichInVitamin };
