
//1,1,2,3,5,8,13,21
function fib(n){
  if(n === 1) return [1];
  if(n === 2) return [1,1];

  currentFib = fib(n-1);
  let length = currentFib.length;
  currentFib.push(currentFib[length-1] + currentFib[length-2]);
  return currentFib;
}
// console.log(fib(7))

function bSearch(arr,target){
  if (arr.length <= 0) return null;
  let mid = parseInt(arr.length / 2);

  if (arr[mid] === target) {
      return mid;
  } else if (arr.slice(0,mid).includes(target)){
      return bSearch(arr.slice(0,mid),target);
  } else {
      // console.log("right")
      // console.log(mid)
      // console.log(arr.slice(mid+1,arr.length))
      return (mid + 1 + bSearch(arr.slice(mid+1,arr.length),target));
  };

};

// console.log(bSearch([1,2,3,4,5,6,7],7));

function makeChange1(num, denom){
  let change = [];
  if (num <= 0) [];

  for(i = 0; i< denom.length; i++){
    if (denom[i] <= num ){
      change.push(denom[i]);
      result = makeChange1((num-denom[i]),denom);
      change = change.concat(result);
    }
  }
  return change;
}

// console.log(makeChange1(14,[10,7,1]))

function mergeSort(arr){
  if (arr.length <= 1) return arr;

  let mid = parseInt(arr.length / 2);



  return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid,arr.length)));
};

function merge(arr1, arr2){
  finalArray = [];
  while ((arr1.length > 0) && (arr2.length > 0)){
    switch (arr1[0] <= arr2[0]){
      case true:
        finalArray.push(arr1.shift());
      case false:
        finalArray.push(arr2.shift());
    }
  }
  return finalArray.concat(arr1.concat(arr2));
}

console.log(mergeSort([1,5]));
console.log(mergeSort([1,5,13,6,2,8,3,4,9]));
function subString(string){
  let storage = [];

  for(i = 0; i < string.length; i++){
    for(j = i + 1; j < string.length + 1; j++){
      storage.push(string.slice(i,j));
    };
  };
  return storage;
};

console.log(subString([1,2,3]));
