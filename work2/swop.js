function swap(obj){
  obj.a = obj.a + obj.b;
  obj.b = obj.a - obj.b;
  obj.a = obj.a - obj.b
}
function swap1(obj){
  obj.a = obj.a * obj.b;
  obj.b = obj.a / obj.b;
  obj.a = obj.a / obj.b;
}
function swap2(obj){
  obj.a = obj.a / obj.b;
  obj.b = obj.a * obj.b;
  obj.a = obj.b / obj.a;
}


const obj = {
  a: 7,
  b: 3
}
swap1(obj);
console.log(obj);
