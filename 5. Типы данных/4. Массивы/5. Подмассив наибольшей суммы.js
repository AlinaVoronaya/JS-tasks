function getMaxSubSum(arr) {
  let best = 0;
  let partialSum = 0;

  for (let item of arr) { 
    partialSum += item; 
    best = Math.max(best, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }

  return best;
}