function randomInteger(min, max) {
  let num = min + Math.random() * (max + 1 - min);
  return Math.floor(num);
}