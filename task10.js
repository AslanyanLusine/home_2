const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]; 
function numberSum(arr) {
    const res = arr.reduce(function(agrr,item){
        if(item > 18) {
            agrr += item;
        }
        return agrr;
    },0)
    return res
}
console.log(numberSum(arr))