function sumInput() {
  let arr = [];
  let num;
  while (true) {
    num = prompt("Введите число:", 0);
    
    if (num === '' || num === null || !isFinite(num)) break;
    
    arr.push(+num);
  } 
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}