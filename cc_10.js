// Task 1: Creating a Product Class
// Create a class Product with the following properties: name, id, price, stock 
class Product {
    constructor(name, id, price, stock) {
        this.name = name; // string
        this.id = id; // number
        this.price = price; // number
        this.stock = stock; // number
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



// Task 2: Creating an Order Class
// The Order class should have the following properties: orderId, product, and quantity
class Order {
    constructor(orderId, product, quantity) {
    this.orderId = orderId; // (number)
    this.product = product; // (instance of Product)
    this.quantity = quantity; // quantity (number)
    

    // Ensure stock is reduced when an order is created
    if (!this.product.updateStock(this.quantity)) {
        console.log(`Stock is Reduced when Order: ${this.orderId} is created`);
    }
}
    // Add a method getOrderDetails() that returns order details
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity;
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
}
// Test Cases:
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)