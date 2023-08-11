 const arr = [15, 18, 1];
/*
          SHIFT

function myShift(arr) {
    let shift = arr[0];
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i +1]
    }
    arr.length = arr.length - 1;
    return shift;
}
const res = myShift(arr);
console.log(res)  */


/*
          UNSHIFT

function myUnshift(arr, el) {
    const newLen = arr.length;
    for(let i = newLen; i > 0; i--) {
        arr[i] = arr[i- 1];
    }
    arr[0] = el;
    return arr.length;
}*/



 /*
           POP

 function myPop(arr) {
    let popVal = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return popVal;
 }*/



  /*
               REDUCE
  
  function myReduce(arr, callback, acc) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            acc += arr[i];
        }
    }
    return acc;
  }*/




 /*
             PUSH
 function myPush(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        arr[arr.length] = num;
    }
    return arr.length
 }*/




 /*
           FILTER
 
 function myFilter(arr,callback) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[x], x, arr)) {
            newArr.push(arr[x])
        }
    }
    return newArr;
 }*/

/*
       FOREACH

function myforEach(arr,fn) {
    for(let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}*/



/*
         MAP

const callBack = (item) => item / 2
function myMap(arr,callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
const newArr = myMap(arr,callback);
console.log(newArr)*/


/*      FIND

function myFind(array, callback) {
 const index = findIndex(array, callback);

 if (index === -1) {
   return undefined;
 }

 return array[index];
}          */

/*        EVERY
function myEvery(arr, callback) {
   
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
   
      if (!callback(val,i,arr)) {
        return false;
      }
    }
   
    return true;
   }*/


   /*
               MYSLICE
   
   function mySlice(array, startIndex = 0, endIndex = array.length) {
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
      const value = array[i];
   
      if (i < array.length) {
        result.push(value);
      }
    }
   
    return result;
   } */