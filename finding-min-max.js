/*
finding min/max in unsorted array
О(n)
*/

function minMax(numbers) {
    // assign the first element of the array to the variables min and max
    let min = numbers[0];
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      const n = numbers[i];
      // compare element with min
      if (n < min) {
        min = n;
      }
      // compare element with max
      if (n > max) {
        max = n;
      }
    }
    // return the found pair of values
    return { min, max };
}
  
console.log(minMax([1, 5, 3, 2, 7, 4, 8, 6, 9, 0])); // { 0, 9 }
