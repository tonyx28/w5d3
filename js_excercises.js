// function uniq(arr){
//   let newArr = [];
//   for(i = 0; i < arr.length; i++){
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr
// }
//
// console.log(uniq([1,1,2]))
//
// function twoSum(arr) {
//   let temp = []
//   for(i = 0; i < arr.length - 1; i++){
//     for(j = i + 1; j < arr.length; j++){
//       if (arr[i] + arr[j] === 0) {
//         temp.push([i,j])
//       }
//     }
//   }
//   return temp
// }
//
// console.log(twoSum([-1, 0, 2, -2, 1]))
//
// function myTranspose(arr){
//   let temp = []
//   for(j = 0; j < arr.length; j++){
//     let row = []
//     for(i = 0; i < arr[0].length; i++){
//       row.push(arr[i][j])
//     }
//     temp.push(row)
//   }
//   return temp
// }
//
//
// let rows = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]
//
// console.log(myTranspose(rows))


function myEach(arr, callBack){
  for(i =0; i<arr
    .length; i++){
    callBack(arr[i]);
  };
  return arr;
};
// myEach
// Array.prototype.myEach = function (func) {
//   for (i = 0; i < this.length; i++) {
//     func(this[i]);
//   }
//
//   return this;
// };


Array.prototype.myEach = function (callBack){
  for(i =0; i<this.length; i++){
    callBack(this[i]);
  };
  return this;
};

[1,2,3].myEach(el => console.log(el))
let arr = [1,2,3]
// console.log(arr.myEach(logIfEven))

function myMap(arr, callBack){
  let temp = [];

  myEach(arr, element => temp.push(callBack(element)));

  return temp;
};

Array.prototype.myMap = function (callBack){
  let temp = [];

  this.myEach(element => temp.push(callBack(element)));

  return temp;
};

// console.log(arr.myMap(logIfEven))

function myInject(arr, callBack){
  let num = arr[0];

  myEach(arr.slice(1), element => num = callBack(num,element));

  return num;
};

Array.prototype.myInject = function (callBack){
  let num = this[0];
  // console.log(this.slice(1));
  this.slice(1).myEach(element => num = callBack(num,element));
  // console.log(num)
  return num;
};
// Array.prototype.myInject = function (func) {
//   let result = this[0];
//
//   this.slice(1).myEach(element => result = func(result, element) );
//
//   return result;
// };
console.log(arr.myInject(add))

function add(num1, num2){
  // console.log(num1 + num2)
  return num1 + num2;
}

function multiply(num1,num2){
  return num1 * num2;
};

// console.log(myInject([1,2,3],multiply));

function logIfEven(num) {
  if (num % 2 === 0) {
    return(`${num} is an even number!`);
  }
};
//
// console.log(myEach([1,2,3,4], logIfEven));
// console.log(myMap([1,2,3,4], logIfEven));


function bubbleSort(arr){
  let newArr = arr.slice();
  let notSorted = true;

  while (notSorted) {
    notSorted = false
    for(i=0; i<newArr.length-1; i++){
      if (newArr[i] > newArr[i+1]){
        let temp1 = newArr[i];
        let temp2 = newArr[i+1];
        newArr[i] = temp2;
        newArr[i+1] = temp1;
        notSorted = true;
      };
    };
  };
  return newArr;
};

// let array = [1,4,2,7];
// console.log(bubbleSort(array));
// console.log(array);

function subString(string){
  let storage = [];

  for(i = 0; i < string.length; i++){
    for(j = i + 1; j < string.length + 1; j++){
      storage.push(string.slice(i,j));
    };
  };
  return storage;
};

// console.log(subString("cat"));
