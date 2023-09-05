const subseq = (p, up) => {
  // base case
  if (up.length === 0) {
    console.log(p);
    return;
  }

  const ch = up.charAt(0);
  // taking
  subseq(p + ch, up.substring(1));

  // rejecting
  subseq(p, up.substring(1));
};

// subseq("", "abc");

//Passing the array inside the arguments and store the characters inside the array

const subseq2 = (p, up, arr) => {
  // base case
  if (up.length === 0) {
    console.log(arr);
    return;
  }

  const ch = up.charAt(0);

  // taking

  let newchar = p + ch;
  arr.push(newchar);
  subseq2(newchar, up.substring(1), arr);

  // rejecting
  subseq2(p, up.substring(1), arr);
};
// subseq2("", "abc", []);

//** Without taking extra array as an arguments
const subseq3 = (p, up) => {
  if (up.length === 0) {
    // console.log(p);
    let list = [];
    list.push(p);
    console.log({ list });
    return list;
  }

  let ch = up.charAt(0);

  let left = subseq3(p + ch, up.substring(1));
  let right = subseq3(p, up.substring(1));

  let final = [...left, ...right];
  return final;
};

const result = subseq3("", "abc");
// console.log(result);
