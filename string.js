let s = "syket bhattachergee";
let newString = "";

// with pass the new empty string
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
// skipString(s, "e", newString);

// without pass the empty string

const skipString2 = (s, target) => {
  if (s.length === 0) {
    return s;
  }

  let ch = s.charAt(0);

  if (ch === target) {
    return skipString2(s.substring(1), target);
  } else {
    return (ch += skipString2(s.substring(1), target));
  }
};

const s2 = "syket bhattachergee";
const res = skipString2(s2, "e");
console.log(res);
