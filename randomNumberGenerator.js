function generateRandomId() {
  const timestamp = Date.now().toString(); // Get current timestamp as string
  const random = Math.random().toString().slice(2, 8); // Get random number between 0 and 1, convert to string, and take the 2nd to 8th characters

  return `${timestamp}${random}`; // Combine timestamp and random number to create ID
}
