/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentCost = 0;

  for (let i = 0; i < days; i++) {
    rentCost += 40;
  }

  if (days >= 7) {
    rentCost -= 50;
  }

  if (days >= 3 && days < 7) {
    rentCost -= 20;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
