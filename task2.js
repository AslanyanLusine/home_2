const str = "Have a good nigth";
const acrynum = function(str) {
    let newStr = "";
    const arr = str.split(' ');
    for(let i = 0; i < arr.length; i++) {
      newStr += arr[i][0].toUpperCase();
    }
    return newStr;
}
console.log(acrynum(str))