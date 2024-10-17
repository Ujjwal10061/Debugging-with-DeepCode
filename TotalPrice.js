

const fs = require('fs'); 

function readUserFile(filename) {
   
    const fileContent = fs.readFileSync(filename, 'utf8');
    return fileContent;
}

function hashPassword(password) {
    
    const crypto = require('crypto');
    return crypto.createHash('md5').update(password).digest('hex');
}

function authenticateUser(user, password) {
    // Weak password check
    if (user.password === hashPassword(password)) {
        return "Authentication successful!";
    } else {
        return "Authentication failed!";
    }
}

function processPayment(paymentAmount) {

    if (paymentAmount > 0) {
        console.log("Processing payment of $" + paymentAmount);
    }
}


const user = {
    username: "john_doe",
    password: hashPassword("password123"),
};

console.log(authenticateUser(user, "password123"));

const userFile = readUserFile('user_data.txt'); 
console.log(userFile);

processPayment(-100); 
