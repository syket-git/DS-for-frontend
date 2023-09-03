let s = "syket bhattachergee";
let newString = "";

const skipString = (s, target, newString) => {
  //   console.log(newString);
  if (s.length === 0) {
    console.log(newString);
    return;
  }

  let ch = s.charAt(0);

  if (ch === target) {
    skipString(s.substring(1), target, newString);
  } else {
    skipString(s.substring(1), target, (newString += ch));
  }
};
skipString(s, "e", newString);
