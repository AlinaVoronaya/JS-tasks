function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let different = tomorrow - now; 
    return Math.round(different / 1000); 
  }