const stockProducts = require('./data.json');


const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  const arrayInfoProduct = [];

  for (let index = 0; index < stockProducts.length; index += 1){

    if (stockProducts[index].allergyOrIntolerance !== undefined) {


      arrayInfoProduct.push(
        {
        allergyOrIntolerance: `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`,  
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,       
        }
      );
    };
  };
  return arrayInfoProduct;
};

getProductsWithAllergyOrIntoleranceInfo();




module.exports = { getProductsWithAllergyOrIntoleranceInfo };
