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

subseq("", "abc");
