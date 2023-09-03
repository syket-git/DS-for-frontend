const pattern = (r, c) => {
  // base case
  if (r === 0) {
    return;
  }

  // check the condition
  if (c < r) {
    pattern(r, c + 1);
    console.log(" * ");
  } else {
    pattern(r - 1, 0);
    console.log("");
  }
};

const r = 4;
pattern(4, 0);
