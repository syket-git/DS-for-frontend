const countZero = (num, count) => {
  if (num == 0) {
    return count;
  }
  const rem = num % 10;

  if (rem == 0) {
    return countZero(Math.floor(num / 10), count + 1);
  }

  return countZero(Math.floor(num / 10), count);
};

const ans = countZero(205000, 0);
console.log(ans);
