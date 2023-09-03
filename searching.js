const searching = (arr, target, index) => {
  if (index === arr.length - 1) {
    return false;
  }

  if (arr[index] === target) {
    return true;
  } else {
    return searching(arr, target, index + 1);
  }
};

// const arr = [4, 5, 6, 6, 3, 5, 8];
// const target = 3;
// console.log(searching(arr, target, 0));

const searchingArrayList = (arr, target, index) => {
  let list = [];

  if (index === arr.length) {
    return list;
  }

  if (arr[index] === target) {
    list.push(index);
  }

  let ans = searchingArrayList(arr, target, index + 1);
  //   list.push(ans);
  if (ans.length > 0) {
    list.push(ans);
  }
  const finalList = list.flat(Infinity);
  return finalList;
};

const arr = [2, 3, 3, 56, 3, 3, 3, 3, 3, 3, 3, 3];
const target = 3;
const result = searchingArrayList(arr, target, 0, []);

console.log(JSON.stringify(result));
