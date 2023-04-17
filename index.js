// Код для первого задания напиши в этой функции
function crawlTree(arr) {
  let str = "";
  for (let item = 0; item < arr.length; item++) {
    if (Array.isArray(arr[item])) {
      str += crawlTree(arr[item]);
    } else {
      str += arr[item];
    }
  }
  return str;
}
console.log(
  crawlTree([
    [
      [["П", "р"], "и"],
      ["в", ["е", "т"]],
    ],
    [["и", "к"], "и"],
  ])
);

// Код для второго задания напиши в этой функции
function twoSum(arr, target, offset) {
  let result = [];
  let i;
  if (arr.length <= 1) return [];
  if (offset === undefined) offset = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[0] + arr[i] === target) {
      console.log("offset is", offset);
      result.push([offset, offset + i]);
    }
  }
  result = result.concat(twoSum(arr.slice(1), target, offset + 1));
  return result.flat(1);
}

console.log(twoSum([3, 2, 4], 6));
// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
