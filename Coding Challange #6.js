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


// Task 3 - Employee Bonus Calculation
let culculateBonus = (salary, performanceRating) => { // Culculated bonuses 
    let bonusPercentage = 0;
if (performanceRating === "Excellent"){
    bonusPercentage = 0.20;
} else if (performanceRating === "Good") {
    bonusPercentage = 0.10;
} else if (performanceRating === "Average") {
    bonusPercentage = 0.05;
} else {
    return "Invalid performance rating";
}
let Bonus = salary * bonusPercentage;
    return `Bonus: $${Bonus}`; // Return the word Bonus along with the dollar amount
}

console.log(calculateBonus(5000, "Excellent")); // Output: $1000
console.log(calculateBonus(7000, "Good"));  // Output: $700


// Task 4 - Subscription Pricing Model
let culculateSubsriptionCost = (plan, months, discount = 0) => { // Set monthly subscription cost
    let monthlycost  = 0;
if (SubscriptionCost === "Basic"){
    monthlycost = 10;
} else if (SubscriptionCost === "Premium") {
    monthlycost = 20;
} else if (SubscriptionCost === "Enterprise") {
    monthlycost = 50;
} else {
    return "Invalid Subscription";
}
let totalMonthlyCost = ((monthlycost * months)/discount); //Formula
return `Total Cost: $${totalCost}`; // Return the word Bonus along with the dollar amount
}

console.log(calculateSubscriptionCost("Basic", 6, 10)); // output: "Total Cost: $50"
console.log(calculateSubscriptionCost("Premium", 12, 0)); // output: "Total Cost: $240"

// Task 5 - Currency Conversion
const convertCurrency = function(amount, exchangeRate){ //Function
let convertedAmount = (amount * exchangeRate); //Formula
return `ConvertedAmount: $${convertedAmount.toFixed(2)}}` // "toFixed(2)" is used to add 2 decimal places to the output
}
console.log(convertCurrency(100, 1.1)); //output: Converted Amount: $110.00
console.log(convertCurrency(250, 0.85)); //output: Converted Amount: $212.50