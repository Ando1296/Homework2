function gemetric(numsArray){
  return numsArray.reduce((total,current) =>{
    return total * current;
  },1) / numsArray.length;
}