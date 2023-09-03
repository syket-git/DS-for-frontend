// Applying binary search in rotated and sorted array

const helper = (arr, target, s, e) => {
  // base case
  if (s > e) {
    return -1;
  }

  const mid = Math.floor(s + (e - s) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[s] <= arr[mid]) {
    if (target >= arr[s] && target <= arr[mid]) {
      return helper(arr, target, s, mid - 1);
    } else {
      return helper(arr, target, mid + 1, e);
    }
  }

  if (target >= arr[mid] && target <= arr[e]) {
    return helper(arr, target, mid + 1, e);
  }

  return helper(arr, target, s, mid - 1);
};

const arr = [5, 6, 7, 8, 9, 1, 2, 3, 4];
const target = 1;
const result = helper(arr, target, 0, arr.length - 1);
console.log(result);
