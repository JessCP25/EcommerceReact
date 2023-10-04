// This function calculates total prices of a new order
// @param {Array} products: Array of Objects
// @returns {number} Total price
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price,0).toFixed(2);
}