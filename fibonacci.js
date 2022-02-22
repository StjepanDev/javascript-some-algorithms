function fibonacci(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    console.log('running');
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  console.log(numbers);
  return numbers[n];
}

console.log(fibonacci(4));
console.log(fibonacci(25));

// O(n) linear time complexity
