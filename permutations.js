/*
finding the number of permutations in an array
О(n!)
*/

function permutations(arr, perm = [], result = []) {

    // if there are no elements left - return the current permutation
    if (arr.length === 0) {
      result.push(perm);
    } else {
      for (let i = 0; i < arr.length; i++) {

        // create a copy of the array
        const copy = arr.slice();

        // remove the current element from it
        const elem = copy.splice(i, 1);

        // run the algorithm again on the copy,
        // adding the current element to the permuted array
        permutations(copy, perm.concat(elem), result);
      }
    }
  
    return result;
}
