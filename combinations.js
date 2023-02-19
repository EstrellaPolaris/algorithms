/*
finding all combinations of elements from two arrays
O(n^2)
*/

function combinations(arr1, arr2) {
    // create an array for the result
    constresult = [];
  
    // run nested loops and form all possible pairs
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        result.push([arr1[i], arr2[j]]);
      }
    }
  
    return result;
}
