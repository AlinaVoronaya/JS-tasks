function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let different = now - today; 
    return Math.round(different / 1000); 
  }