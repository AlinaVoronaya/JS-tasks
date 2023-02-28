function unique(arr) {
    let res = [];
  
    for (let str of arr) {
      if (!res.includes(str)) {
        res.push(str);
      }
    }
  
    return res;
  }