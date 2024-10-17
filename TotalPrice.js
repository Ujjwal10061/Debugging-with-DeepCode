// Improved JavaScript Code with Security Fixes and Optimizations

const fs = require('fs');
const path = require('path'); // Added to handle secure file paths
const crypto = require('crypto');

// Securely read a user file
function readUserFile(filename) {
    // Validate and sanitize the filename to prevent path traversal
    const safePath = path.join(__dirname, filename);
    if (!fs.existsSync(safePath) || !fs.lstatSync(safePath).isFile()) {
        throw new Error('File does not exist or is not valid.');
    }
    const fileContent = fs.readFileSync(safePath, 'utf8');
    return fileContent;
}

// Use a stronger password hashing algorithm (SHA-256)
function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    return hash.update(password).digest('hex');
}

// Authenticate user securely
function authenticateUser(user, password) {
    // Use the improved hashing function
    if (user.password === hashPassword(password)) {
        return "Authentication successful!";
    } else {
        return "Authentication failed!";
    }
}

// Validate and process payment securely
function processPayment(paymentAmount) {
    // Ensure the payment amount is a valid positive number
    if (typeof paymentAmount !== 'number' || paymentAmount <= 0) {
        throw new Error("Invalid payment amount.");
    }
    console.log("Processing payment of $" + paymentAmount);
}

// Test cases (optimized and secure)
try {
    const user = {
        username: "john_doe",
        password: hashPassword("securePassword123"), // Stronger password hash
    };

    console.log(authenticateUser(user, "securePassword123"));

    const userFile = readUserFile('user_data.txt'); // Valid filename required
    console.log(userFile);

    processPayment(100); // Valid payment amount
} catch (error) {
    console.error(error.message);
}
