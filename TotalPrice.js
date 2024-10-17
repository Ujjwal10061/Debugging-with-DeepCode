// Potential Security Vulnerability might take place

const fs = require('fs'); 

function readUserFile(filename)
   {
    const fileContent = fs.readFileSync(filename, 'utf8');
    return fileContent;
}

function hashPassword(password) 
{ 
   // PASSWORD ALGORITHM
   
    const crypto = require('crypto');
    return crypto.createHash('md5').update(password).digest('hex');
}

function authenticateUser(user, password) 
   //PASSWORD CHECK
   
{
    if (user.password === hashPassword(password))
    {
        return "Authentication successful!";
    } else
    {
        return "Authentication failed!";
    }
}

function processPayment(paymentAmount)
   // Payment Amount 
   
   {
    if (paymentAmount > 0)
    {
        console.log("Processing payment of $" + paymentAmount);
    }
}

// Testing the function

const user = {
    username: "john_doe",
    password: hashPassword("password123"),
};

console.log(authenticateUser(user, "password123"));

const userFile = readUserFile('user_data.txt'); 
console.log(userFile);

processPayment(-100); 
