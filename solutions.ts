// ! problem 1 

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}
// const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result);

// ! problem 2 

const reverseString = (input: string): string => {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
};
