const stockProducts = require('./data.json');


const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  const arrayInfoProduct = [];
  let teste = -1;

  for (let index = 0; index < stockProducts.length; index += 1){

    if (stockProducts[index].allergyOrIntolerance !== undefined) {
      teste += 1;

      arrayInfoProduct.push(
        {
        allergyOrIntolerance: `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`,  
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,       
        }
      );
      console.log(index);
      console.log(arrayInfoProduct[teste]);
    };
  };
  return arrayInfoProduct;
};

getProductsWithAllergyOrIntoleranceInfo();




module.exports = { getProductsWithAllergyOrIntoleranceInfo };
