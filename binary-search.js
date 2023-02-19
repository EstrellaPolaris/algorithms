// const list = [1, 3, 4, 5, 7, 10];

function binarySearch(list, element) {
    let first = 0;
    let last = list.length;
    let position = -1;
    while (first < last) {
      const mid = Math.floor((first + last) / 2);
      if (list[mid] === element) {
        position = mid;
      }
      if (list[mid] < element)
        first = mid + 1;
      else {
        last = mid;
      }
    }
    return position;
  }
