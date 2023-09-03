const bubbleSort = (arr, r, c) => {
  // base condition
  if (r == 0) {
    return;
  }

  if (c < r) {
    if (arr[c] >= arr[c + 1]) {
      let temp = arr[c];
      arr[c] = arr[c + 1];
      arr[c + 1] = temp;
    }
    bubbleSort(arr, r, c + 1);
  } else {
    bubbleSort(arr, r - 1, 0);
  }
};

const selectionSort = (arr, r, c, max) => {
  if (r === 0) {
    return;
  }

  if (c < r) {
    if (arr[c] > arr[max]) {
      selectionSort(arr, r, c + 1, c);
    } else {
      selectionSort(arr, r, c + 1, max);
    }
  } else {
    let temp = arr[max];
    arr[max] = arr[r - 1];
    arr[r - 1] = temp;
    selectionSort(arr, r - 1, 0, 0);
  }
};

// const arr = [4, 3, 5, 1];
// selectionSort(arr, arr.length, 0, 0);

// console.log(arr);

// Merge sort

const merge = (first, second) => {
  const arr = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      arr[k] = first[i++];
    } else {
      arr[k] = second[j++];
    }
    k++;
  }

  while (i < first.length) {
    arr[k++] = first[i++];
  }

  while (j < second.length) {
    arr[k++] = second[j++];
  }
  return arr;
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, arr.length);
  let left = mergeSort([...leftArr]);
  let right = mergeSort([...rightArr]);

  const res = merge(left, right);
  return res;
};

// mergeSort in place

const mergeInPlace = (arr, s, mid, e) => {
  let mix = [];
  let i = s;
  let j = mid;
  let k = 0;

  while (i < mid && mid > e) {
    if (arr[i] < arr[j]) {
      mix[k++] = arr[i++];
    } else {
      mix[k++] = arr[j++];
    }
  }

  while (i < m) {
    mix[k++] = arr[i++];
  }

  while (j < e) {
    mix[k++] = arr[j++];
  }

  for (let i = 0; i <= arr.length; i++) {
    arr[i] = mix[i];
  }
};

const mergeSortInPlace = (arr, s, e) => {
  if (e - s === 1) {
    return;
  }

  let mid = Math.floor(s + (e - s) / 2);

  mergeSortInPlace(arr, s, mid);
  mergeSortInPlace(arr, mid, e);

  mergeInPlace(arr, s, mid, e);
};

const arr2 = [4, 2, 4, 5, 45, 2, 21, 3, 4, 23];
mergeSortInPlace(arr2);
console.log(arr2);
