// Task 1: Creating a Product Class
// Create a class Product with the following properties: name, id, price, stock 
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    } 
    // Add a method getDetails() that returns a formatted string of product details
    getDetails () {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    // Add a method updateStock(quantity) that modifies the stock level when an order is placed
    updateStock(quantity) {
        if (quantity > 0 && quantity <= this.stock) {
            this.stock -= quantity;
        } else {
            console.log("Not enough Stock")
        }
    }
 }
// Test Cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"