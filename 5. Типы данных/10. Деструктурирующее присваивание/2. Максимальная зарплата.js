function topSalary(salaries) {

    let best = 0;
    let bestName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (best < salary) {
        best = salary;
        bestName = name;
      }
    }
  
    return bestName;
  }