/* Total fees calculation (US)
  Transaction Fee: 5% of total
  Processing Fee: 3% of total + $0.25
  Listing Fee: $0.20
*/

const listingFee = 0.20;

function getTransactionFee(cartTotal) {
  return cartTotal * 0.05;
}

function getProcessingFee(cartTotal) {
  return cartTotal * 0.03 + 0.25;
}

const getTotalFees = (productPrice, shippingPrice) => {
  let cartTotal = productPrice + shippingPrice;
  return  getTransactionFee(cartTotal) + getProcessingFee(cartTotal) + listingFee;
}

export default getTotalFees;