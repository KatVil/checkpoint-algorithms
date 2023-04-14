// Код для первого задания напиши в этой функции
function crawlTree(arr) {
    let str = '';
    for (let item = 0; item < arr.length; item++){
        if(Array.isArray(arr[item])){
            str+=crawlTree(arr[item]);
        }
        else{
            str += arr[item];
        }
    }
    return str;
}
console.log(crawlTree([
    [[["П", "р"], "и"],
      ["в", ["е", "т"]],
    ],
    [["и", "к"], "и"],
  ]));

// Код для второго задания напиши в этой функции
function twoSum(arr, target) {
    let arrIndexes = [];
    let sum = 0;
    let arrSliced = [];
    for (let i = 0; i<arr.length; i++){
        sum+=arr[i];
        arrIndexes.push(i);
        if (sum === target){
            return arrIndexes;
        }
        else{
            arrSliced = arr.slice(1);
            return twoSum(arrSliced, target);
        }
    }
}
console.log(twoSum([3, 2, 4],6));
// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
