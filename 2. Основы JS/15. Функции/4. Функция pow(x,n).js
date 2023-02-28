function pow(x, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
}