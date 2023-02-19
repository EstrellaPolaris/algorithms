/*
Ω(n * log(n)) algorithm complexity at best
Θ(n * log(n)) complexity of the algorithm in the base case
O(n^2) complexity of the algorithm in the worst case
Time complexity - Ω(n*log(n)), Θ(n*log(n)), O(n^2). The space complexity is O(log(n)).
*/

function quickSort(arr, start = 0, end = arr.length - 1) {
	if (end <= start) {
		return arr;
	}

	const pivotIndex = partition(arr, start, end);

	quickSort(arr, start, pivotIndex - 1);
	quickSort(arr, pivotIndex + 1, end);

	return arr;
}

function partition(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
