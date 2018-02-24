var Index = function(arry, num) {
  //构造函数
  this.arry = arry;
  this.num = num;
  //返回结果
  this.result = [];
  arry.forEach((value, index) => {
    if (value === num) {
      console.log(index);
      this.result.push(index);
    }
  });
  console.log( this.result);
};
var a = new Index([1, 3,3, 4], 3);
console.log(a.result);
console.log(a.result.length);

console.log(NaN==NaN)
console.log(typeof(NaN)==typeof(NaN))
console.log(typeof(NaN==NaN))

console.log('123'==123)
console.log('123'=='ab')
console.log('123'+1)
console.log(typeof('123'+1))
console.log(0==false)
var str=123;
var temp=str+'';
console.log(typeof(temp))
console.log(temp===str)





// arry = [1, 1, 3];
// num = 1;
// arry.forEach(function(value, index) {
//   if (value == num) {
//     console.log(index);
//   }
// });
