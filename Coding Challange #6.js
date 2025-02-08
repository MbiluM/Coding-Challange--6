// Task 1 - Business Profit Calculation
const calculateProfit = (costPrice, sellingPrice, unitsSold) => {
    return ((sellingPrice - costPrice) * unitsSold); //Profit Formula
}
console.log(calculateProfit(20, 30, 100)) //Expected Output: 1000
console.log(calculateProfit(50, 70, 200)) //Expected Output: 4000

// Task 2 - Sales Tax Computation 
const calculateSalesTax = (amount, taxRate) => amount * taxRate; //Sales Tax Formula

console.log(calculateSalesTax(100, 0.07)) //Output: 7
console.log(calculateSalesTax(500, 0.1)) //Output: 50