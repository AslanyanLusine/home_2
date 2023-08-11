const arr = ['aeioulnrst', 'dg','bcmp','fhvwy','k','jx', 'qz'];
const str = 'people';
const str1 = str.split('');
const sumOfLetters = (arr, str1) => {
    return str1.reduce((acc,val) => {
        arr.forEach((item,index) => {
            if(item.includes(val)) acc += index + 1
        })
        return acc;
    }, 0)
}
const res = sumOfLetters(arr,str);
console.log(res)