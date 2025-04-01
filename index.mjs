// index.js
import { greet, Person, fetchData, asyncOperation, userRoles } from './tools.mjs';

// Testing modularity (imported function)
console.log(greet("John"));

// Testing Class
const alice = new Person("Alice", 25);
console.log(alice.introduce());

// Testing Async/Await
async function testAsync() {
    const data = await fetchData();
    console.log(data);
}
testAsync();

// Testing Promises
asyncOperation()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

// Testing Map
console.log("User Roles:");
userRoles.forEach((role, user) => {
    console.log(`${user}: ${role}`);
});
