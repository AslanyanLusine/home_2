const array = [7, 8, 66, 11];
function sortBy(arr, type = "Asc") {
    return arr.sort((a,b) => {
      if(type === "Desc") {
        return b - a;
      } 
        return a - b;
    })
}
const res = sortBy(array, 'Desc');
console.log(res)