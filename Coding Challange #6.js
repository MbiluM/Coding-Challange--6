// Task 1 - Business Profit Calculation
const calculateProfit = (costPrice, sellingPrice, unitsSold) => {
    return ((sellingPrice - costPrice) * unitsSold); // Profit Formula
}
console.log(calculateProfit(20, 30, 100)) // Expected Output: 1000
console.log(calculateProfit(50, 70, 200)) // Expected Output: 4000
