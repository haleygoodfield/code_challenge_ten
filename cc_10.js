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
        this.stock -= quantity;
        }
    
 };
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
    this.product.updateStock(this.quantity);
    };

    getOrderDetails() { // Add a method getOrderDetails() that returns order details
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}
    
// Test Cases:
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)



// Task 3: Creating an Inventory Class
// Create an Inventory class with a property products 
class Inventory {
    constructor() {
        this.products = []; // array of product instances 
        this.orders = []; // add a orders array in the Inventory class
        }
    // Add methods:
    addProduct(product) {
        this.products.push(product); // addProduct(product): Adds a new product to inventory.
    }

    listProducts() { // listProducts(): Logs all products' details.
        this.products.forEach(product => console.log(product.getDetails()));
    }


    // Task 4: Implementing Order Management
    placeOrder(orderId, product, quantity) { // add method: placeOrder(orderId, product, quantity) 
    if (product.stock >= quantity) { 
        let order = new Order(orderId, product, quantity); // Creates a new order 
        this.orders.push(order); // Adds it to orders if stock is available
   } else {
        return `Not enough stock for ${product.name}`; // Output if there is not enough stock 
   }
} 
    listOrders() { // Logs all placed orders.
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }

    

    // Task 5: : Implementing Product Restocking
    restockProduct(productId, quantity) { // Add a method restockProduct(productId, quantity) in the Inventory class
        let product = this.products.find(product => product.id === productId);
        if (product) {
            product.stock += quantity; // The method increases the stock of the product.
        }
    }
};

// Test Cases: Task 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


// Test Cases: Task 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"


// Test Cases: Task 5
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"