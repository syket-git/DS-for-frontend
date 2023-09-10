const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

/*

Set data structure has these functions and properties:

- add (Func)
- delete (Func)
- has (Func)
- size (property)

basic operations of set data structure
- isSuperset
- union
- intersection
- symmetricDifference
- difference


*/

// set.add({ name: "hello", age: 4 });
// set.add(6);
// set.add(7);

// console.log(set.delete(6));

// console.log(set.size);
// console.log(set);

function isSuperset(setA, subSet) {
  for (let elem of subSet) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  let _union = new Set(setA);

  for (let elem of setB) {
    _union.add(elem);
  }

  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _diff = new Set(setA);

  for (let elem of setB) {
    if (_diff.has(elem)) {
      _diff.delete(elem);
    } else {
      _diff.add(elem);
    }
  }

  return _diff;
}

function difference(setA, setB) {
  const _diff = new Set(setA);
  for (let elem of setB) {
    _diff.delete(elem);
  }
  return _diff;
}

const res = isSuperset(setA, setB);
const res2 = union(setB, setC);
const res3 = intersection(setB, setC);
const res4 = symmetricDifference(setA, setC);
const res5 = difference(setA, setC);

console.log({ res5 });
