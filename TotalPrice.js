// Sample JavaScript Code with Bugs and Inefficiencies

function calculateTotalPrice(cartItems) {
    var totalPrice = 0;
    for (var i = 0; i <= cartItems.length; i++) { // Bug: Loop goes out of bounds
        totalPrice += cartItems[i].price; // Bug: cartItems[i] might be undefined
    }
    return totalPrice;
}

function applyDiscount(price, discount) {
    // Inefficiency: Discount validation is not handled
    var discountedPrice = price - (price * discount / 100);
    return discountedPrice;
}

function getCustomerName(customer) {
    // Inefficiency: Using a loop to extract name, should directly return customer.name
    for (var key in customer) {
        if (key === 'name') {
            return customer[key];
        }
    }
    return null;
}

// Test cases (not efficient)
var items = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.75 },
];

var total = calculateTotalPrice(items);
var discountedTotal = applyDiscount(total, 10);
console.log("Total Price: " + total);
console.log("Discounted Price: " + discountedTotal);
