/*
Subsegment with sum X
Given an array of integers.
It is necessary to find and return the number of subsegments (continuous subsequences) with a given sum k.
If this is not possible, the function should return 0.
*/

// ([1, 1, 1], 2) -> 2
// ([1, 2, 1], 3) -> 2
// ([1, 2, 5, 3], 3) -> 2
// ([10, 5, 6, 7, 8, 7], 15) -> 3

function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    
    nums.reduce((hashMap, current) => {
      sum += current;
      if (hashMap[sum - k]) {
        count += hashMap[sum - k];
      }
      
      hashMap[sum] = (hashMap[sum] || 0) + 1;
      
      return hashMap;
    }, {0: 1});
    
    return count;
}
