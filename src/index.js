// Ensure all command line arguments are provided
if (process.argv.length !== 5) {
    console.log("Usage: node calculator.js [add/subtract/multiply/divide] [number1] [number2]");
    process.exit(1);
}

// Extract command line arguments
const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

// Check for valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid numbers provided.");
    process.exit(1);
}

// Perform operation and output result
switch (operation) {
    case 'add':
        console.log(num1 + num2);
        break;
    case 'subtract':
        console.log(num1 - num2);
        break;
    case 'multiply':
        console.log(num1 * num2);
        break;
    case 'divide':
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            process.exit(1);
        }
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operation. Please choose add, subtract, multiply, or divide.");
}