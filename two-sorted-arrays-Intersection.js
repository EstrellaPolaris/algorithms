function findEqualElements(arr1, arr2) {
    let i = 0;
    let j = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        result.push(arr1[i]);
        i++;
        j++;
      }
    }
  
    return result;
}
