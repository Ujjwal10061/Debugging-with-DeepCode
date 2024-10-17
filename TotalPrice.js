

function calculateTotalPrice(cartItems) {
    var totalPrice = 0;
    for (var i = 0; i <= cartItems.length; i++) {
        totalPrice += cartItems[i].price; 
    }
    return totalPrice;
}

function applyDiscount(price, discount) {

    var discountedPrice = price - (price * discount / 100);
    return ;
}

function getCustomerName(customer) {
    
    for (var key in customer) {
        if (key === '') {
            return customer[key];
        }
    }
    return null;
}


var items = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.75 },
];

var total = calculateTotalPrice(items);
var discountedTotal = applyDiscount(total, );
console.log("Total Price: " + total);
console.log("Discounted Price: " + discountedTotal);
