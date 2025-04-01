// tools.js

// 1. Modularity - Exporting Functions and Classes
export function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Class - Creating a simple ES6 class
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// 3. Asynchronous Programming using async/await
export async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

// 4. Promises - Handling asynchronous operations
export function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Operation failed!");
            }
        }, 1500);
    });
}

// 5. Maps - Using a JavaScript Map
export const userRoles = new Map();
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "Editor");
userRoles.set("Charlie", "User");
