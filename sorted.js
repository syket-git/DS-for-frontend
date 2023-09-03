const sorted = (arr, index) => {
  // base case
  if (index === arr.length - 1) {
    return true;
  }

  return arr[index] <= arr[index + 1] && sorted(arr, index + 1);
};

const arr = [2, 9, 5, 6, 7, 7];

console.log(sorted(arr, 0));
