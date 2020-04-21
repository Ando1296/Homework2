function arithmeticArray(array){
  let k = 0;
  for(let i = 0; i < array.length; i++){
    k += array[i];
  }
  return k/array.length;
}
function arithmeticArray2(array){
  return array.reduce((total,current) => {
    return total + current;
  },0) / array.length
}
