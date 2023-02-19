/*
Ω(n) algorithm complexity at best
Θ(n^2) complexity of the algorithm in the base case
O(n^2) complexity of the algorithm in the worst case
Time complexity - Ω(n), Θ(n^2), O(n^2). Space complexity - O(1)
*/

function bubbleSort(arr) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    }

    return arr;
}

function swap(arr, i, j) {
    const tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
}
