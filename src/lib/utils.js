export const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return false;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

export const isPerfect = (n) => {
  if (n <= 0) return false;
  if (n === 1) return false;
  let sum = 1;
  const sqrtN = Math.sqrt(n);
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) {
      sum += i;
      const otherDivisor = n / i;
      if (otherDivisor !== i) {
        sum += otherDivisor;
      }
    }
  }
  return sum === n;
};

export const isArmstrong = (n) => {
  if (n < 0) return false;
  const str = String(n);
  const power = str.length;
  const sum = str.split("").reduce((acc, digitStr) => {
    const d = parseInt(digitStr, 10);
    return acc + Math.pow(d, power);
  }, 0);
  return sum === n;
};

export const digitSum = (n) => {
  return String(Math.abs(n))
    .split("")
    .reduce((sum, d) => sum + parseInt(d, 10), 0);
};
