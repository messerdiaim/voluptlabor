// Define an interface for the function's expected input
interface User {
  id: number;
  name: string;
}

// This function takes a User object and returns a greeting string
function greetUser(user: User): string {
  // Ensure the user object has the necessary properties
  if (!user || !user.id || !user.name) {
    throw new Error('Invalid user object');
  }

  // Return a personalized greeting
  return `Hello, ${user.name}! Your user ID is ${user.id}.`;
}

// Example usage:
const user = { id: 1, name: 'Alice' };
console.log(greetUser(user)); // Output: Hello, Alice! Your user ID is 1.
