import getTotalFees from './getTotalFees';

const getNetProfit = (productPrice, shippingPrice, productCost, shippingCost) => {
  return productPrice + shippingPrice - productCost - shippingCost - getTotalFees(productPrice, shippingPrice);
}

export default getNetProfit;